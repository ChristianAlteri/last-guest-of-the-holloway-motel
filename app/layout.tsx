import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Last Guest of the Holloway Motel (2025) | Official Documentary",
  description: "The documentary follows Tony Powell, a former British soccer star who played for Norwich City Football Club in the 1970s before mysteriously disappearing from public life. Now managing the Holloway Motel in West Hollywood, he must confront long-buried truths when the motel faces closure.",
  keywords: ["documentary", "Tony Powell", "Holloway Motel", "Norwich City", "LGBTQ", "soccer", "football"],
  openGraph: {
    title: "The Last Guest of the Holloway Motel",
    description: "An important entry in the queer canon. A documentary about a beloved closeted sports figure who survived the only way he knew how.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-neutral-950 text-neutral-50">
        {children}
      </body>
    </html>
  );
}
