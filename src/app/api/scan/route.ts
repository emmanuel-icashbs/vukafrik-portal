import { NextRequest, NextResponse } from "next/server";
import { recordScan } from "@/lib/scan-stats";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  let sameOrigin = false;
  try { sameOrigin = !!origin && new URL(origin).host === request.headers.get("host"); } catch { /* Reject malformed origins. */ }
  if (!sameOrigin) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  try {
    const result = await recordScan();
    return NextResponse.json(result, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    console.error("Unable to record QR visit", error);
    return NextResponse.json({ error: "Scan tracking unavailable" }, { status: 503 });
  }
}
