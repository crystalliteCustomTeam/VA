

// KeyPoint  
import ByNumber from "@/src/app/home/components/bynumber";
import ByAwards from "@/src/app/home/components/byawards";
import ByClients from "@/src/app/home/components/byclients";

// CtaImage Images
import bannerImg from "media/services/imagecta/bannerImg.webp"

// Why Choose Image
import why01 from "media/home/whychoose/why01.webp"
import why02 from "media/home/whychoose/why02.webp"
import why03 from "media/home/whychoose/why03.webp"
import why04 from "media/home/whychoose/why04.webp"

export const BannerData = {
    title: "Find Endless Engaging 2D Animations Here That Suit Your Taste.",
    desc: "Discover a world of attractive 2D animations tailored to your preferences at Video Animation. From humorous shorts to mesmerizing art pieces, a 2D animation company that caters everyone. Explore our vast collections and find your next favorite animated masterpiece.",
    video: "https://player.vimeo.com/progressive_redirect/playback/1025443442/rendition/1080p/file.mp4?loc=external&signature=e0c207671c377c1abecfff87bfdd1c4211d201cfdc35c2e8eed3d67dd60dfe89",
    videoId: "1025443442"
}



export const keyPointsData = [
    {
        title: "By the Numbers",
        content: <ByNumber />,
    },
    {
        title: "Our Awards",
        content: <ByAwards />,
    },
    {
        title: "Our Clients",
        content: <ByClients />,
    }
];

export const ProcessContent = {
    title: "Process",
    text: "Our 2D animation process transforms your vision into dynamic, engaging visuals. We guide you through every step, ensuring a seamless journey from concept to completion.",
}

export const ProcessList = [
    {
        title: "Ideation",
        text: "We begin by conceptualizing your ideas, developing a narrative that aligns with your brand’s message. Our creative team collaborates with you to outline the structure, tone, and style of your 2D animation, ensuring it captures your vision."
    },
    {
        title: "Development",
        text: "Once the concept is set, we move to scriptwriting and storyboarding. Each scene is sketched, detailing character movements, backgrounds, and transitions, ensuring smooth animation and clear communication of the message."
    },
    {
        title: "Animation Production",
        text: "Our animators bring the storyboard to life with precise, frame-by-frame work. Expressive characters, fluid motion, and vibrant settings are crafted. At this stage, we add motion, sound effects, and voiceovers to finalize the 2D animation."
    },
    {
        title: "Finalization",
        text: "In the final stage, we fine-tune the animation, ensuring it meets the highest quality standards. After thorough reviews and final tweaks, we deliver a polished, captivating 2D animation ready to engage your audience."
    },
]

export const ImageCtaContent = {
    title: (<>Hire Top-Rated 2D <br /> Animation Agency</>),
    ctaLink: "#",
    ctaText: "Let’s Discuss",
    bannerImg: bannerImg
}



export const WhyOption = { align: 'center', loop: true }
export const WhyItems = [
    {
        Img: why01.src,
        title: "Tailored Animation Solution",
        txt: "Lorem ipsum dolor sit amet consectetur. Fringilla orci vitae vel cursus. Quis dolor lectus mauris ut velit sit Quis dolor lectus.",
        link: "#"
    },
    {
        Img: why02.src,
        title: "Tailored Animation Solution",
        txt: "Lorem ipsum dolor sit amet consectetur. Fringilla orci vitae vel cursus. Quis dolor lectus mauris ut velit sit Quis dolor lectus.",
        link: "#"
    },
    {
        Img: why03.src,
        title: "Tailored Animation Solution",
        txt: "Lorem ipsum dolor sit amet consectetur. Fringilla orci vitae vel cursus. Quis dolor lectus mauris ut velit sit Quis dolor lectus.",
        link: "#"
    },
    {
        Img: why04.src,
        title: "Tailored Animation Solution",
        txt: "Lorem ipsum dolor sit amet consectetur. Fringilla orci vitae vel cursus. Quis dolor lectus mauris ut velit sit Quis dolor lectus.",
        link: "#"
    },
    {
        Img: why02.src,
        title: "Tailored Animation Solution",
        txt: "Lorem ipsum dolor sit amet consectetur. Fringilla orci vitae vel cursus. Quis dolor lectus mauris ut velit sit Quis dolor lectus.",
        link: "#"
    },

]

export const FaqList = [
    {
        title: "How much does a 30 second 2D animation cost?",
        txt: (
            <p>
                It would cost you around $2000-$4500 for a 30-seconds 2D animation video.
                Factors like numbers of revision and project complexity can influence the final price.
            </p>
        ),
    },
    {
        title: "How long does a 2D animation company take to produce a 2D video?",
        txt: (
            <p>
                Creating a 5–10-minute 2D animation can take at least 4-6 months.
                The exact timeline depends on factors like team size, project’s complication and custom requirements.
            </p>
        ),
    },
    {
        title: "Why should we get a 2D animated video?",
        txt: (
            <p>
                2D animation simplifies the complex. By combining visual storytelling with clear explanations, we transform highly anticipated ideas into engaging content. Our animations combine the power of motion graphics, graphic design, and character animation to create mind blowing and informative videos.
            </p>
        ),
    },
    {
        title: "Why is 2D animation service good?",
        txt: (
            <p>
                2D animation offers unmatched efficiency, affordability and versatility. It’s the ideal choice for businesses who are looking for impactful video content that delivers results.
            </p>
        ),
    },

]