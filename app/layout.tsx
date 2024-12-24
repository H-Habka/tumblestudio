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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon-light.png"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="640:block hidden">
          <div className="fixed z-30 top-0 left-0 w-full">
            <ContactDetailsBar />
          </div>
        </div>
        <div className="fixed 768:z-10 z-30 768:top-8 top-0 left-0 w-full">
          <Header />
        </div>
        <div className="640:hidden fixed bottom-0 w-full start-0 z-10">
          <ContactDetailsBar />
        </div>
        {children}
      </body>
    </html>
  )
}
