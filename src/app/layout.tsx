import Providers from "@/layouts/Providers";
import "../styles/index.scss";
import { Montserrat } from 'next/font/google'

const montserratBody = Montserrat({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--td-ff-body',
});

const montserratUi = Montserrat({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--td-ff-poppins',
});

export const metadata = {
  title: "VUK'AFRIK 2026 | Foire de l'Innovation et de l'Entrepreneuriat",
  description:
    "Premium event microsite for VUK'AFRIK 2026 in Kinshasa, focused on innovation, entrepreneurship, investment and economic transformation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isDev = process.env.NODE_ENV === 'development'

  return (
    <html lang="en" suppressHydrationWarning={isDev}>
      <head>
        <meta name="keywords" content="VUK'AFRIK 2026, innovation, entrepreneurship, Kinshasa, Africa, investment, CCC" />
        <meta name="description" content="VUK'AFRIK 2026 is a premium African innovation and entrepreneurship event in Kinshasa." />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className={`vukafrik-site ${montserratBody.variable} ${montserratUi.variable}`} suppressHydrationWarning={true}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
