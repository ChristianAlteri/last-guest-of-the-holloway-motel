import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Last Guest of the Holloway Motel | Documentary 2025",
  description: "The untold story of Tony Powell, a former British soccer star who vanished from public life only to resurface decades later as the sole resident of the Holloway Motel in West Hollywood.",
  keywords: ["documentary", "Tony Powell", "Holloway Motel", "Norwich City", "queer cinema", "football", "LGBTQ"],
  openGraph: {
    title: "The Last Guest of the Holloway Motel",
    description: "A former football star. A fading motel. One last chance at the truth.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Last Guest of the Holloway Motel",
    description: "Documentary feature premiering June 2025",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col bg-stone-950 text-stone-200 antialiased">
        {children}
      </body>
    </html>
  );
}
