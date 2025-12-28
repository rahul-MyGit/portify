import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "sonner";
import { DATA } from "@/data/config/site.config";
import { TopNavbar } from "@/components/top-navbar";
import BottomNavbar from "@/components/bottom-navbar";
import Script from "next/script";


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  keywords: [
    DATA.name,
    ...DATA.skills,
    "Full Stack Developer",
    "Web Developer",
    "Software Engineer",
    "Kovachi",
    "kovachi",
    "irahul",
    `${DATA.name} Portfolio`,
    `${DATA.name} Projects`,
    `${DATA.name} Blogs`,
    `${DATA.name} About`,
    `${DATA.name} Skills`,
    `${DATA.name} Experience`,
    `${DATA.name} Education`,
    `${DATA.name} Contact`,
    `${DATA.name} Resume`,
    `${DATA.name} Blog`,
    `${DATA.name} Project`,
    `${DATA.name} News`,
    `${DATA.name} Newsletter`,
    `${DATA.location} Developer`,
    "Open Source Contributor",
  ],
  authors: [
    {
      name: DATA.name,
      url: DATA.url,
    },
  ],
  creator: DATA.name,
  publisher: DATA.name,
  category: "Technology",
  classification: "Portfolio",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: DATA.url,
  },
  openGraph: {
    title: DATA.name,
    description: DATA.description,
    url: DATA.url,
    images: [
      {
        url: DATA.prevImage,
        width: 1200,
        height: 630,
        alt: DATA.name,
      },
    ],
    siteName: DATA.name,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: DATA.name,
    card: "summary_large_image",
    site: DATA.contact.social.X.url,
    creator: DATA.contact.social.X.url,
    description: DATA.description,
    images: [
      {
        url: DATA.prevImage,
        width: 1200,
        height: 630,
        alt: DATA.name,
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: DATA.name,
  url: DATA.url,
  image: `${DATA.url}${DATA.avatarUrl}`,
  sameAs: [
    DATA.contact.social.GitHub.url,
    DATA.contact.social.LinkedIn.url,
    DATA.contact.social.X.url,
  ],
  jobTitle: "Full Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  description: DATA.description,
  email: DATA.contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: DATA.location.split(",")[0].trim(),
    addressCountry: "India",
  },
  knowsAbout: DATA.skills,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${DATA.name} Portfolio`,
  url: DATA.url,
  description: DATA.description,
  author: {
    "@type": "Person",
    name: DATA.name,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: `${DATA.url}/blog?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href={DATA.url} />
        <Script
          id="json-ld-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="json-ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
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
