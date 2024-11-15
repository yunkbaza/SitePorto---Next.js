import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Porto Seguro",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Porto Seguros</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
    integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
    crossOrigin="anonymous" referrerPolicy="no-referrer" />
    </head>
  
      <body>
        {children}
      </body>
    </html>
  );
}
