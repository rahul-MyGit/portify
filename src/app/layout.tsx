import type { Metadata } from "next";
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
    "Rahul Gujjar",
    "Kovachii",
    "Rahul Gujjar Portfolio",
    "Rahul Gujjar Projects",
    "Rahul Gujjar Blogs",
    "Rahul Gujjar Resume",
    "Rahul Gujjar Contact",
    "Rahul Gujjar Instagram",
    "Rahul Gujjar Youtube",
    "Rahul Gujjar Email",
    "Rahul Gujjar LinkedIn",
    "Rahul Gujjar GitHub",
    "Rahul Gujjar Twitter",
    "Rahul Gujjar",
    "kovachi",
    "KOVACHI",
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
      <ThemeProvider attribute="class" defaultTheme="dark" >
        <TooltipProvider delayDuration={0}>
          <div className="hidden md:block">
            <TopNavbar />
          </div>
        {children}
        <div className="block md:hiden">
          <BottomNavbar />
        </div>
        {/* <ScheduleCallFloat /> */}
        {/* <Analytics /> */}
        <Toaster />
        </TooltipProvider>
      </ThemeProvider>
      </body>
    </html>
  );
}
