# QR scan statistics

After deployment, generate the QR code using **https://vukafrik.org/welcome**.
Read totals at **https://vukafrik.org/scan-stats**. This is an unlisted, noindex
public page, not an authenticated admin page. Refresh it to retrieve current totals.

The server uses the Amplify Compute role through the AWS SDK's default credential
provider. No access keys or extra environment variables are needed on Amplify.
The role needs `s3:GetObject` and `s3:PutObject` on
`arn:aws:s3:::vukafrik-storage/scan-stats-2026.json` in `ca-central-1`.
Keep the bucket private and use SSE-S3 encryption (a KMS key needs additional permissions).

Before use, ensure the existing object contains this JSON (preserve any real counts):

```json
{
  "2026-09-23": 0,
  "2026-09-24": 0,
  "2026-09-25": 0
}
```

The file must already exist. Missing, inaccessible or malformed files display an
unavailable message rather than misleading zero counts, and are never overwritten.
Missing date keys in a valid object are treated as zero.

Only visits during 23–25 September 2026, using Africa/Kinshasa time, count.
The date is determined by the server when the tracking request arrives. Only daily
totals are stored, without visitor details. The browser sends one POST per page
mount and suppresses immediate repeat visits in the same tab for 30 seconds.
This is a visit counter, not unique attendance: shared URLs and later visits can count.
The landing page remains usable when tracking fails; failed requests are not replayed.

Updates use S3 If-Match and retry conflicts against fresh data to avoid losing
concurrent increments. This small-file design is intended for modest event traffic;
after ten conflicts a request fails without blocking the visitor's page.

Local verification: `node scan-stats.test.mjs`. Tests use mocked S3 and fixed dates;
they do not modify the live object. Production permissions can be checked by opening
the statistics page. Opening the welcome page before the event does not write to S3.
