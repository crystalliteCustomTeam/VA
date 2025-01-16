//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Our Work - Video Animation Portfolio",
  description:
    "Look at our portfolio of excellence and see the videos of our amazing projects we've created at Video Animation Studio.",
  //===== OG Tags =====
  openGraph: {
    title: "Our Work - Video Animation Portfolio",
    description:
      "Look at our portfolio of excellence and see the videos of our amazing projects we've created at Video Animation Studio.",
    url: "https://videoanimation.us/portfolio",
    siteName: "Video Animations",
    locale: "en_US",
    type: "website",
    images: "",
  },
  //===== Canonical =====
  alternates: {
    canonical: "/portfolio",
    languages: {
      "x-default": "https://videoanimation.us/portfolio",
      "en-US": "https://www.videoanimation.us/portfolio",
    },
  },
  other: {
    "DC.title": "Our Work - Video Animation Portfolio",
    "geo.region": ["US-FL", "US-TX"],
    "geo.placename": ["Orlando", "Austin"],
    "geo.position": ["28.542111;-81.37903", "30.271129;-97.743699"],
    ICBM: ["28.542111, -81.37903", "30.271129, -97.743699"],
  },
}

export default function RootLayout({ children }) {
  return children
}
