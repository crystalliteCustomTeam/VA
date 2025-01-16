//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Hybrid Animation Services - Video Animation",
  description:
    "Discover our innovative hybrid animation services that combine 2D and 3D Animations techniques, offering dynamic solutions for films, games, and digital media projects.",
  //===== OG Tags =====
  openGraph: {
    title: "Hybrid Animation Services - Video Animation",
    description:
      "Discover our innovative hybrid animation services that combine 2D and 3D Animations techniques, offering dynamic solutions for films, games, and digital media projects.",
    url: "https://videoanimation.us/hybrid-animation",
    siteName: "Video Animations",
    locale: "en_US",
    type: "website",
    images: "",
  },
  //===== Canonical =====
  alternates: {
    canonical: "/hybrid-animation",
    languages: {
      "x-default": "https://videoanimation.us/hybrid-animation",
      "en-US": "https://www.videoanimation.us/hybrid-animation",
    },
  },
  other: {
    "DC.title": "Hybrid Animation Services - Video Animation Company USA",
    "geo.region": ["US-FL", "US-TX"],
    "geo.placename": ["Orlando", "Austin"],
    "geo.position": ["28.542111;-81.37903", "30.271129;-97.743699"],
    ICBM: ["28.542111, -81.37903", "30.271129, -97.743699"],
  },
}

export default function RootLayout({ children }) {
  return children
}
