import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import ClientProviders from '../components/ClientProviders';

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Venym Labs",
  description: "Blockchain Development and Web3 Solutions",
  icons: {
    icon: '/venymgreen.png',
    apple: '/venymgreen.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<body
  className={`${roboto.variable} ${robotoMono.variable} antialiased`}
>
  <ClientProviders>
    {children}
  </ClientProviders>
</body>
    </html>
  );
}
