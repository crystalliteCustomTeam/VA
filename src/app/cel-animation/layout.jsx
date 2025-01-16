//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Cel Animation Services - Video Animation",
  description:
    "Get high-quality Cel animation services for your project. Video Animation Skilled animators bring your vision to life with traditional hand-drawn techniques.",
  //===== OG Tags =====
  openGraph: {
    title: "Cel Animation Services - Video Animation",
    description:
      "Get high-quality Cel animation services for your project. Video Animation Skilled animators bring your vision to life with traditional hand-drawn techniques.",
    url: "https://videoanimation.us/cel-animation",
    siteName: "Video Animations",
    locale: "en_US",
    type: "website",
    images: "",
  },
  //===== Canonical =====
  alternates: {
    canonical: "/cel-animation",
    languages: {
      "x-default": "https://videoanimation.us/cel-animation",
      "en-US": "https://www.videoanimation.us/cel-animation",
    },
  },
  other: {
    "DC.title": "Cel Animation Services - Video Animation Company USA",
    "geo.region": ["US-FL", "US-TX"],
    "geo.placename": ["Orlando", "Austin"],
    "geo.position": ["28.542111;-81.37903", "30.271129;-97.743699"],
    ICBM: ["28.542111, -81.37903", "30.271129, -97.743699"],
  },
}

export default function RootLayout({ children }) {
  return children
}
