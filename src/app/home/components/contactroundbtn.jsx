"use client";
import { FavIcon } from "@/src/app/app-constants"

const ContactRoundBtn = ({ popup, footerIcn }) => {


    return (
        <>
            <div className={`buttonCommon ${popup ? 'popupActive' : ''} ${footerIcn ? 'footerActive' : ''}`}>
                <div>
                    <FavIcon />
                </div>
            </div>
        </>
    )
}

export default ContactRoundBtn