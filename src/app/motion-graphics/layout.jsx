//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Motion Graphics Services - Video Animation",
  description:
    "Video Animation Studio providing Motion Graphics and Design Services. Discover the art of visual storytelling. Explore our professional services to create captivating 2D and 3D motion graphics Services. ",
  //===== OG Tags =====
  openGraph: {
    title: "Motion Graphics Services - Video Animation",
    description:
      "Video Animation Studio providing Motion Graphics and Design Services. Discover the art of visual storytelling. Explore our professional services to create captivating 2D and 3D motion graphics Services. ",
    url: "https://videoanimation.us/motion-graphics",
    siteName: "Video Animation",
    locale: "en_US",
    type: "website",
    images: "",
  },
  //===== Canonical =====
  alternates: {
    canonical: "/motion-graphics",
    languages: {
      "x-default": "https://videoanimation.us/motion-graphics",
      "en-US": "https://www.videoanimation.us/motion-graphics",
    },
  },
  other: {
    "DC.title": "Motion Graphics Services - Video Animation Company USA",
    "geo.region": ["US-FL", "US-TX"],
    "geo.placename": ["Orlando", "Austin"],
    "geo.position": ["28.542111;-81.37903", "30.271129;-97.743699"],
    ICBM: ["28.542111, -81.37903", "30.271129, -97.743699"],
  },
}

export default function RootLayout({ children }) {
  return children
}
