import type { Metadata } from "next";
import localFont from "next/font/local";
import { Cormorant_Garamond } from "next/font/google"
import "./globals.css";
import Footer from "./components/footer";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--cormorant"

})
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Somos - Hospedagem Exclusiva em Curitiba",
  description: "Somos transforma apartamentos em hotspots atraindo hóspedes com experiências exclusivas e design icônico.",
  icons: "/favicon.png",
  metadataBase: new URL("https://www.somos.host"),
  openGraph: {
    title: "Somos - Hospedagem Exclusiva em Curitiba",
    description: "Somos transforma apartamentos em hotspots atraindo hóspedes com experiências exclusivas e design icônico.",
    url: "https://www.somos.host",
    siteName: "Somos - Hospedagem Exclusiva",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: 'https://sa-east-1.graphassets.com/clyz1o74z04sr07kke1he7vlp/cm1iajjxj0hsv07kidotd7j0q',
        width: 1250,
        height: 1250,
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
  keywords: [
    "hospedagem exclusiva", "apartamentos decorados", "curadoria de experiências", "design icônico", "parceiros de hospedagem",
    "hospedagem em Curitiba", "imóveis para temporada", "experiências exclusivas", "curadoria de cervejas artesanais",
    "pub crawl", "check-in personalizado", "anúncios poderosos", "gestão de hospedagem", "preços competitivos",
    "turismo em Curitiba", "organização impecável", "reservas diretas", "gestão multiplataforma", "manutenção de imóveis",
    "fotografia profissional", "atendimento ao hóspede", "serviços de hospedagem", "parceria em hospedagem", "vivência em Curitiba"
  ]
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cormorantGaramond.variable} bg-neutral-50 text-gray-950 antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
