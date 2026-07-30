import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://venomedia.in"),

  title: {
    default: "Veno Media | Premium Creative Marketing Agency",
    template: "%s | Veno Media",
  },

  description:
    "Veno Media helps ambitious brands grow through influencer marketing, social media management, branding, premium content creation, video production, and performance marketing.",

  keywords: [
    "Veno Media",
    "Marketing Agency",
    "Influencer Marketing",
    "Social Media Agency",
    "Branding Agency",
    "Video Production",
    "Performance Marketing",
    "Creative Agency India",
    "Digital Marketing",
    "Content Creation",
  ],

  authors: [
    {
      name: "Salman Khan",
    },
  ],

  creator: "Salman Khan",

  publisher: "Veno Media",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Veno Media | Premium Creative Marketing Agency",
    description:
      "Helping ambitious brands grow through influencer marketing, branding, premium content, and performance-driven campaigns.",

    url: "https://venomedia.in",

    siteName: "Veno Media",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Veno Media",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Veno Media",
    description:
      "Premium Creative Marketing Agency helping brands scale.",
    images: ["/og-image.jpg"],
  },

  icons: {
  icon: [
    { url: "/favicon.ico" },
    {
      url: "/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
    },
    {
      url: "/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
    {
      url: "/favicon-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
  shortcut: "/favicon.ico",
  apple: [
    {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
    },
  ],
},
};

export const viewport: Viewport = {
  themeColor: "#123D9A",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable}`}
      suppressHydrationWarning 
    >
      <Script id="gtm" strategy="afterInteractive">
  {`
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;
    f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-MSDX9L2P');
  `}
</Script>
      <body 
      className="font-sans antialiased bg-background text-foreground">
        <noscript>
  <iframe
    src="https://www.googletagmanager.com/ns.html?id=GTM-MSDX9L2P"
    height="0"
    width="0"
    style={{ display: "none", visibility: "hidden" }}
  />
</noscript>
<Script id="meta-pixel" strategy="afterInteractive">
  {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)
    }(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');

    fbq('init', '1743940543483822');
    fbq('track', 'PageView');
  `}
</Script>
<noscript>
  <img
    height="1"
    width="1"
    style={{ display: "none" }}
    src="https://www.facebook.com/tr?id=1743940543483822&ev=PageView&noscript=1"
    alt=""
  />
</noscript>

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Veno Media",
        url: "https://venomedia.in",
        logo: "https://venomedia.in/veno-media-logo.png",
        sameAs: [
          "https://www.linkedin.com/company/veno-media/",
          "https://www.instagram.com/venomedia.in"
        ]
      }),
    }}
  />

  {children}

  {process.env.NODE_ENV === "production" && <Analytics />}
</body>
    </html>
  );
}