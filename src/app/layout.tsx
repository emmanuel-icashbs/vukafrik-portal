import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";

import Providers from "@/layouts/Providers";
import { createVukafrikMetadata, getVukafrikEventStructuredData } from "@/lib/vukafrik-route";
import "../styles/index.scss";

const montserratBody = Montserrat({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--td-ff-body",
});

const montserratUi = Montserrat({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--td-ff-poppins",
});

export const metadata: Metadata = {
  ...createVukafrikMetadata("/"),
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.congocs.org"),
  applicationName: "VUK'AFRIK 2026",
  keywords: [
    "VUK'AFRIK 2026",
    "innovation",
    "entrepreneuriat",
    "Kinshasa",
    "Afrique",
    "investissement",
    "Congolese Computer Community",
    "CCC",
  ],
  category: "event",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDev = process.env.NODE_ENV === "development";

  return (
    <html lang="fr" suppressHydrationWarning={isDev}>
      <body
        className={`vukafrik-site ${montserratBody.variable} ${montserratUi.variable}`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getVukafrikEventStructuredData()),
          }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
