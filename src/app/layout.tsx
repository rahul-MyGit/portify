import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "sonner";
import { DATA } from "@/data/config/site.config";
import { TopNavbar } from "@/components/top-navbar";
import BottomNavbar from "@/components/bottom-navbar";


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  // metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s - ${DATA.name}`,
  },
  description: DATA.description,
  keywords: [
    "Saidev Dhal",
    "SkidGod",
    "Saidev Dhal Portfolio",
    "Saidev Dhal Projects",
    "Saidev Dhal Blogs",
    "Saidev Dhal Resume",
    "Saidev Dhal Contact",
    "Saidev Dhal Instagram",
    "Saidev Dhal Youtube",
    "Saidev Dhal Email",
    "Saidev Dhal LinkedIn",
    "Saidev Dhal GitHub",
    "Saidev Dhal Twitter",
    "saidevdhal",
    "skidgod",
    "skidgod4444",
  ],
  authors: [
    {
      name: `${DATA.name}`,
      url: DATA.url,
    },
  ],
  creator: `${DATA.name}`,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    images: [
      {
        url: DATA.prevImage,
      },
    ],
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
    site: DATA.url,
    creator: `${DATA.name}`,
    description: DATA.description,
    images: [
      {
        url: DATA.prevImage,
        width: 1200,
        height: 630,
        alt: `${DATA.name}`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable,
        )}
      >
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
        <TooltipProvider delayDuration={0}>
          <div className="hidden md:block">
            <TopNavbar />
          </div>
        {children}
        {/* <div className="block md:hiden">
          <BottomNavbar />
        </div> */}
        {/* <ScheduleCallFloat /> */}
        {/* <Analytics /> */}
        <Toaster />
        </TooltipProvider>
      </ThemeProvider>
      </body>
    </html>
  );
}
