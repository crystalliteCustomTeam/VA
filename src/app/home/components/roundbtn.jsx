"use client";
import VideoModal from "@/src/app/home/components/videomodal"
import { useState } from "react"
import { FavIcon } from "@/src/app/app-constants"
import Link from 'next/link'

const RoundBtn = () => {
    const [modalShow, setModalShow] = useState(false);

    const handlePlayClick = () => {
        setModalShow(true);
    };


    return (
        <>
            <VideoModal show={modalShow} onHide={() => setModalShow(false)} />
            <div className="buttonCommon">
                <Link href="" onClick={() => handlePlayClick()} >
                    <FavIcon />
                </Link>
            </div>
        </>
    )
}

export default RoundBtn