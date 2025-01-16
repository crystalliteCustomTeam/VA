
//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "2D Animation Services - Video Animation",
  description: "Video Animation Studio is your one-stop shop for professional 2D animation services. Our expert 2D animators craft engaging, fluid animations with expressive characters and vibrant visuals, perfect for your brand or project.",
  //===== OG Tags =====
  openGraph: {
    title: "2D Animation Services - Video Animation",
    description: "Video Animation Studio is your one-stop shop for professional 2D animation services. Our expert 2D animators craft engaging, fluid animations with expressive characters and vibrant visuals, perfect for your brand or project.",
    url: 'https://videoanimation.us/2d-animation',
    siteName: 'Video Animation',
    locale: 'en_US',
    type: 'website',
    images: "",
  },
  //===== Canonical =====
  alternates: { canonical: '/2d-animation',
    languages: {
      "x-default": "https://videoanimation.us/2d-animation",
      "en-US": "https://www.videoanimation.us/2d-animation",
    },
   },
  other: {
    "DC.title": "2D Animation Services - Video Animation Company USA",
    "geo.region": ["US-FL", "US-TX"],
    "geo.placename": ["Orlando", "Austin"],
    "geo.position": ["28.542111;-81.37903", "30.271129;-97.743699"],
    ICBM: ["28.542111, -81.37903", "30.271129, -97.743699"],
  },
}


export default function RootLayout({ children }) {
  return (children)
}
