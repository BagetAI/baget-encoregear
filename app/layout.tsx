import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EncoreGear | The Professional Instrument Marketplace",
  description: "Marketplace for secondhand musical instruments with mandatory luthier authentication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-roboto bg-brand-white text-brand-black antialiased">
        {children}
      </body>
    </html>
  );
}