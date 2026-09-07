import Providers from "@/layouts/Providers";
import "../styles/index.scss";
import { Poppins, Unbounded } from "next/font/google";
import { getPageMetadata, siteUrl } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...getPageMetadata("/"),
  metadataBase: siteUrl,
  icons: { icon: "/favicon.png" },
};

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--td-ff-poppins",
});
const unbounded = Unbounded({
  weight: ["200", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--td-ff-body",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDev = process.env.NODE_ENV === "development";

  return (
    <html lang="fr" suppressHydrationWarning={isDev}>
      <body
        className={`${poppins.variable} ${unbounded.variable}`}
        suppressHydrationWarning={true}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
