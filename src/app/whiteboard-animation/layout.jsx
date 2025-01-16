//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Whiteboard Animation Services - Video Animation",
  description:
    "Stand out with our Whiteboard Animation Services, transform your Ideas into Engaging Stories. We create captivating visuals that simplify complex ideas into engaging and memorable stories.",
  //===== OG Tags =====
  openGraph: {
    title: "Whiteboard Animation Services - Video Animation",
    description:
      "Stand out with our Whiteboard Animation Services, transform your Ideas into Engaging Stories. We create captivating visuals that simplify complex ideas into engaging and memorable stories.",
    url: "https://videoanimation.us/whiteboard-animation",
    siteName: "Video Animations",
    locale: "en_US",
    type: "website",
    images: "",
  },
  //===== Canonical =====
  alternates: {
    canonical: "/whiteboard-animation",
    languages: {
      "x-default": "https://videoanimation.us/whiteboard-animation",
      "en-US": "https://www.videoanimation.us/whiteboard-animation",
    },
  },
  other: {
    "DC.title": "Whiteboard Animation Services - Video Animation Company USA",
    "geo.region": ["US-FL", "US-TX"],
    "geo.placename": ["Orlando", "Austin"],
    "geo.position": ["28.542111;-81.37903", "30.271129;-97.743699"],
    ICBM: ["28.542111, -81.37903", "30.271129, -97.743699"],
  },
}

export default function RootLayout({ children }) {
  return children
}
