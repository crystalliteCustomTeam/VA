//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "CGI & VFX Services - Video Animation",
  description:
    "Enhance your visual storytelling with our CGI and VFX services. We deliver high-quality animations and effects that captivate and engage your audience.",
  //===== OG Tags =====
  openGraph: {
    title: "CGI & VFX Services - Video Animation",
    description:
      "Enhance your visual storytelling with our CGI and VFX services. We deliver high-quality animations and effects that captivate and engage your audience.",
    url: "https://videoanimation.us/cgi-and-vfx-services",
    siteName: "Video Animations",
    locale: "en_US",
    type: "website",
    images: "",
  },
  //===== Canonical =====
  alternates: {
    canonical: "/cgi-and-vfx-services",
    languages: {
      "x-default": "https://videoanimation.us/cgi-and-vfx-services",
      "en-US": "https://www.videoanimation.us/cgi-and-vfx-services",
    },
  },
  other: {
    "DC.title": "CGI and VFX Services - Video Animation Company USA",
    "geo.region": ["US-FL", "US-TX"],
    "geo.placename": ["Orlando", "Austin"],
    "geo.position": ["28.542111;-81.37903", "30.271129;-97.743699"],
    ICBM: ["28.542111, -81.37903", "30.271129, -97.743699"],
  },
}

export default function RootLayout({ children }) {
  return children
}
