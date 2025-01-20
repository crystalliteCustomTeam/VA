//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "Explainer Video Production Services - Explainer Videos LLC",
    description: "Explainer Videos LLC expertly crafted explainer videos that simplify complex ideas precisely. We transform ideas into engaging visual stories that captivate audiences and amplify your brand’s impact.",
   
    //===== Canonical =====
    alternates: { canonical: '/explainer-animated-videos' },

    //===== GEO Tags =====
    other: {
        robots: {
            index: false,
            follow: false,
            nocache: true,
            googleBot: {
                index: false,
                follow: false,
                noimageindex: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        }, // Close the robots object properly here
    }, // Close the other object properly here
};


export default function RootLayout({ children }) {
    return (children);
}