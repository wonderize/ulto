import type { Metadata } from "next"
import { config } from "@fortawesome/fontawesome-svg-core"

import { Roboto, Open_Sans } from "next/font/google"

import "./globals.css"
import "@fortawesome/fontawesome-svg-core/styles.css"

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  style: ["normal"],
  subsets: ["latin", "cyrillic"],
  variable: "--roboto",
})
const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin", "cyrillic"],
  variable: "--open-sans",
})

export const metadata: Metadata = {
  title: "ulto",
  description: "A schedule manager",
}

config.autoAddCss = false

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${openSans.variable}`}>
        {children}
      </body>
    </html>
  )
}
