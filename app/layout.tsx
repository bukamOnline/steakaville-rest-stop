import type { Metadata } from "next";
import { headers } from "next/headers";
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

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const baseUrl = `${protocol}://${host}`;

  return {
    title: "Steakaville Rest Stop | Restaurant, Bar & Catering",
    description: "Fire-grilled Jamaican flavour, a welcoming bar, and catering for every celebration in Claremont, St. Ann.",
    openGraph: {
      title: "Steakaville Rest Stop",
      description: "Restaurant, bar, and catering in Claremont, St. Ann. Road To Bob Marley.",
      url: baseUrl,
      siteName: "Steakaville Rest Stop",
      images: [{ url: `${baseUrl}/og.png`, width: 1536, height: 1024, alt: "Steakaville Rest Stop — Road To Bob Marley" }],
      locale: "en_JM",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Steakaville Rest Stop",
      description: "Restaurant, bar, and catering in Claremont, St. Ann.",
      images: [`${baseUrl}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
