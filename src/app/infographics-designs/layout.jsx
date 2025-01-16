//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Infographics Design Services - Video Animation",
  description:
    "Transform data into engaging visuals with our infographic design services. We create clear, eye-catching infographics to boost understanding and engagement.",
  //===== OG Tags =====
  openGraph: {
    title: "Infographics Design Services - Video Animation",
    description:
      "Transform data into engaging visuals with our infographic design services. We create clear, eye-catching infographics to boost understanding and engagement.",
    url: "https://videoanimation.us/infographics-designs",
    siteName: "Video Animations",
    locale: "en_US",
    type: "website",
    images: "",
  },
  //===== Canonical =====
  alternates: {
    canonical: "/infographics-designs",
    languages: {
      "x-default": "https://videoanimation.us/infographics-design",
      "en-US": "https://www.videoanimation.us/infographics-design",
    },
  },
  other: {
    "DC.title": "Infographics Design Services - Video Animation Company USA",
    "geo.region": ["US-FL", "US-TX"],
    "geo.placename": ["Orlando", "Austin"],
    "geo.position": ["28.542111;-81.37903", "30.271129;-97.743699"],
    ICBM: ["28.542111, -81.37903", "30.271129, -97.743699"],
  },
}

export default function RootLayout({ children }) {
  return children
}
