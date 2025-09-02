import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FloatingDock } from "@/components/ui/floating-dock";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Run Club For-MFS-That Don't Run Orlando",
  description: "Join our running community",
  icons: {
    icon: "/Icons/android-chrome-192x192.png",
  },
};

export default function RootLayout({ children }) {
  const navItems = [
    {
      title: "Home",
      icon: <Image src="/Icons/house.png" alt="Home" width={24} height={24} />,
      href: "/"
    },
    { 
      title: "About Us", 
      icon: <Image src="/Icons/about.png" alt="About" width={24} height={24} />, 
      href: "/about" 
    },
    { 
      title: "Sponsors", 
      icon: <Image src="/Icons/closure.png" alt="Sponsors" width={24} height={24} />, 
      href: "/sponsors" 
    },
    { 
      title: "Get In Touch", 
      icon: <Image src="/Icons/instagram-3.png" alt="Social" width={24} height={24} />, 
      href: "https://www.instagram.com/runclub4mfsthatdontrunorlando?igsh=YmluYmF5dWZnYWcy",
      target: "_blank",
      rel: "noopener noreferrer"
    },
  ];

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="/Icons/favicon-16x16.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        <div className="relative min-h-screen">
          {children}
          <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 transform">
            <FloatingDock items={navItems} />
          </div>
        </div>
      </body>
    </html>
  );
}
