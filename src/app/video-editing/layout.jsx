//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Video Editing Animation Services - Video Animation",
  description:
    "Get high-quality Video Editing services tailored to your needs. We create polished, engaging videos that bring your story to life. Start your project today with us.",
  //===== OG Tags =====
  openGraph: {
    title: "Video Editing Animation Services - Video Animation",
    description:
      "Get high-quality Video Editing services tailored to your needs. We create polished, engaging videos that bring your story to life. Start your project today with us.",
    url: "https://videoanimation.us/video-editing",
    siteName: "Video Animation",
    locale: "en_US",
    type: "website",
    images: "",
  },
  //===== Canonical =====
  alternates: {
    canonical: "/video-editing",
    languages: {
      "x-default": "https://videoanimation.us/video-editing",
      "en-US": "https://www.videoanimation.us/video-editing",
    },
  },
  other: {
    "DC.title":
      "Video Editing Animation Services - Video Animation Company USA",
    "geo.region": ["US-FL", "US-TX"],
    "geo.placename": ["Orlando", "Austin"],
    "geo.position": ["28.542111;-81.37903", "30.271129;-97.743699"],
    ICBM: ["28.542111, -81.37903", "30.271129, -97.743699"],
  },
}

export default function RootLayout({ children }) {
  return children
}
