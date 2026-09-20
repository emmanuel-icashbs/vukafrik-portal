import { GetObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

export const scanDates = ["2026-09-23", "2026-09-24", "2026-09-25"] as const;
export const scanTimeZone = "Africa/Kinshasa";
type ScanStats = Record<string, number>;
const client = new S3Client({ region: "ca-central-1", maxAttempts: 1 });
const object = { Bucket: "vukafrik-storage", Key: "scan-stats-2026.json" };

export function eventDate(now = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: scanTimeZone, year: "numeric", month: "2-digit", day: "2-digit",
  }).format(now);
}

function status(error: unknown) {
  return (error as { $metadata?: { httpStatusCode?: number } })?.$metadata?.httpStatusCode;
}

export async function readScanStats() {
  const response = await client.send(new GetObjectCommand(object));
  const data: unknown = JSON.parse(await response.Body!.transformToString());
  if (!data || typeof data !== "object" || Array.isArray(data)) throw new Error("Invalid scan stats file");
  const stats = data as ScanStats;
  if (Object.values(stats).some(value => !Number.isSafeInteger(value) || value < 0)) {
    throw new Error("Invalid scan count");
  }
  if (!response.ETag) throw new Error("Missing scan stats ETag");
  return { stats: { ...Object.fromEntries(scanDates.map(date => [date, 0])), ...stats }, etag: response.ETag };
}

export async function recordScan(now = new Date()) {
  const date = eventDate(now);
  if (!(scanDates as readonly string[]).includes(date)) return { counted: false, date };
  // Only retry definite conflicts. Retrying an ambiguous network failure could count twice.
  for (let attempt = 0; attempt < 10; attempt++) {
    const { stats, etag } = await readScanStats();
    if (!Number.isSafeInteger(stats[date] + 1)) throw new Error("Scan count limit reached");
    stats[date]++;
    try {
      await client.send(new PutObjectCommand({
        ...object, Body: JSON.stringify(stats, null, 2), ContentType: "application/json",
        CacheControl: "no-store", IfMatch: etag,
      }));
      return { counted: true, date };
    } catch (error) {
      if (![409, 412].includes(status(error) ?? 0) || attempt === 9) throw error;
      await new Promise(resolve => setTimeout(resolve, 25 + Math.random() * 100 * (attempt + 1)));
    }
  }
  throw new Error("Unable to update scan stats");
}
