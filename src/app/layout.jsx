import { Poppins } from "next/font/google"
import "bootstrap/dist/css/bootstrap.min.css"
import "@/src/app/globals.scss"
import ConditionalLayout from "./ConditionalLayout"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export const metadata = {
  metadataBase: new URL("https://videoanimation.us"),
  title: "Video Animation Studio - Official Site",
  description:
    "The official site of Animation Studios. Transform your ideas into stunning animations with our video animation company. We responsible for creating some of the most beloved films and animations ever made.",
  //===== Google Varification =====
  verification: {
    other: {
      "google-site-verification": [
        "btqt1QyuPBr3EkUgOcgoKk46tz6ZrUfJ53kiCjQj7fA",
      ],
    },
  },
  // Canonical
  alternates: {
    canonical: "/",
    languages: {
      "x-default": "https://videoanimation.us/ ",
      "en-US": "https://www.videoanimation.us/",
    },
  },
  other: {
    "DC.title": "Video Animation Studio - Official Site",
    "geo.region": ["US-FL", "US-TX"],
    "geo.placename": ["Orlando", "Austin"],
    "geo.position": ["28.542111;-81.37903", "30.271129;-97.743699"],
    ICBM: ["28.542111, -81.37903", "30.271129, -97.743699"],
  },
  //===== No-Index =====
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  )
}
