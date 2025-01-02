import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import ContactDetailsBar from "@/components/contactDetailsBar"
import Header from "@/components/header"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Tumble Studio",
  description:
    "Tumble Studio is your premier destination for innovative interior, exterior, and landscape design solutions. Serving clients worldwide with a special focus on the UAE, we bring your vision to life with tailored, elegant, and sustainable designs. Our expert team combines creativity and precision to craft unique spaces that inspire and elevate lifestyles. Discover a world of design excellence with Tumble Studio.",
  icons: [
    { media: "(prefers-color-scheme: light)", url: "/favicon-light.png" },
    { media: "(prefers-color-scheme: dark)", url: "/favicon-dark.png" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased z-1`}
      >
        <div className="bg-[url('/bg2.jpg')] bg-opacity-20 z-[-1] fixed w-screen h-screen top-0 start-0 opacity-20"></div>
        <div className="640:block hidden">
          <div className="fixed z-30 top-0 left-0 w-full">
            <ContactDetailsBar />
          </div>
        </div>
        <div className="fixed 768:z-10 z-30 768:top-8 top-0 left-0 w-full">
          <Header />
        </div>
        <div className="640:hidden fixed bottom-0 w-full start-0 z-30">
          <ContactDetailsBar />
        </div>
        {children}
      </body>
    </html>
  )
}
