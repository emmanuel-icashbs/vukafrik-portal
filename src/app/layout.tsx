import Providers from "@/layouts/Providers";
import "../styles/index.scss";
import { Poppins, Unbounded } from "next/font/google";
import { vukafrik_event_data } from "@/data/VukAfrikData";

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
    <html lang="en" suppressHydrationWarning={isDev}>
      <head>
        <meta
          name="keywords"
          content={vukafrik_event_data.keywords.join(", ")}
        />
        <meta
          name="description"
          content={vukafrik_event_data.shortDescription}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* For IE  */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body
        className={`${poppins.variable} ${unbounded.variable}`}
        suppressHydrationWarning={true}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
