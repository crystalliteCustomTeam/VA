//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "3D Animation Services - Video Animation",
  description:
    "Video Animation Studio is your one-stop shop for professional 3D animation services. Get premium 3D Animation Services that bring your imagination to life We craft stunning visuals, immersive environments, and dynamic characters.",
  //===== OG Tags =====
  openGraph: {
    title: "3D Animation Services - Video Animation",
    description:
      "Video Animation Studio is your one-stop shop for professional 3D animation services. Get premium 3D Animation Services that bring your imagination to life We craft stunning visuals, immersive environments, and dynamic characters.",
    url: "https://videoanimation.us/3d-animation",
    siteName: "Video Animation",
    locale: "en_US",
    type: "website",
    images: "",
  },
  //===== Canonical =====
  alternates: {
    canonical: "/3d-animation",
    languages: {
      "x-default": "https://videoanimation.us/3d-animation",
      "en-US": "https://www.videoanimation.us/3d-animation",
    },
  },
  other: {
    "DC.title": "3D Animation Services - Video Animation Company USA",
    "geo.region": ["US-FL", "US-TX"],
    "geo.placename": ["Orlando", "Austin"],
    "geo.position": ["28.542111;-81.37903", "30.271129;-97.743699"],
    ICBM: ["28.542111, -81.37903", "30.271129, -97.743699"],
  },
}

export default function RootLayout({ children }) {
  return children
}
