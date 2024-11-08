"use client";
import { ArrowBtn } from "@/src/app/app-constants"
import VideoModal from "@/src/app/home/components/videomodal"
import { useState } from "react"

const CommonButton = ({ color }) => {
    const [modalShow, setModalShow] = useState(false);

    const handlePlayClick = () => {
        setModalShow(true);
    };
    return (
        <>
            <VideoModal show={modalShow} onHide={() => setModalShow(false)} />
            <div className={`readMoreBtn ${color ? 'bgColor' : ''}`} onClick={() => handlePlayClick()}>
                <div>
                    <span>Dive in now</span> <ArrowBtn />
                </div>
            </div>
        </>


    )
}

export default CommonButton