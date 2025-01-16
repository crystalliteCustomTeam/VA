//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Logo Animation Services - Video Animation",
  description:
    "Video Animation have professional logo animation services, we offer top-notch animations for your company with unlimited revisions to ensure your complete satisfaction.",
  //===== OG Tags =====
  openGraph: {
    title: "Logo Animation Services - Video Animation",
    description:
      "Video Animation have professional logo animation services, we offer top-notch animations for your company with unlimited revisions to ensure your complete satisfaction.",
    url: "https://videoanimation.us/logo-animation",
    siteName: "Video Animation",
    locale: "en_US",
    type: "website",
    images: "",
  },
  //===== Canonical =====
  alternates: {
    canonical: "/logo-animation",
    languages: {
      "x-default": "https://videoanimation.us/logo-animation",
      "en-US": "https://www.videoanimation.us/logo-animation",
    },
  },
  other: {
    "DC.title": "Logo Animation Services - Video Animation Company USA",
    "geo.region": ["US-FL", "US-TX"],
    "geo.placename": ["Orlando", "Austin"],
    "geo.position": ["28.542111;-81.37903", "30.271129;-97.743699"],
    ICBM: ["28.542111, -81.37903", "30.271129, -97.743699"],
  },
}

export default function RootLayout({ children }) {
  return children
}
