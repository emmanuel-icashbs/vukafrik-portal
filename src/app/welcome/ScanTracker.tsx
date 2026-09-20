"use client";

import { useEffect, useRef } from "react";

export default function ScanTracker() {
  const sent = useRef(false);
  useEffect(() => {
    if (sent.current) return;
    sent.current = true;
    // A short per-tab cooldown avoids counting immediate refreshes again.
    const day = new Intl.DateTimeFormat("en-CA", { timeZone: "Africa/Kinshasa" }).format(new Date());
    const key = `vukafrik:last-scan:${day}`;
    const now = Date.now();
    try {
      const previous = Number(sessionStorage.getItem(key));
      if (previous && now - previous < 30_000) return;
      sessionStorage.setItem(key, String(now));
    } catch { /* Tracking still works when browser storage is disabled. */ }
    void fetch("/api/scan", { method: "POST", keepalive: true }).catch(() => {
      // The welcome page remains usable if the network is unavailable.
    });
  }, []);
  return null;
}
