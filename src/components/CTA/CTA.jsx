"use client"
import { ArrowBtn, LiveChatIcon, ChatIcon } from "@/src/app/app-constants"
import VideoModal from "@/src/app/home/components/videomodal"
import { useState } from "react"
import styles from "./style.module.scss"

const CTA = ({ css, color, LiveChat = true }) => {
  const [modalShow, setModalShow] = useState(false)

  const handlePlayClick = () => {
    setModalShow(true)
  }

  return (
    <>
      {LiveChat ? (
        <div className={`${styles.twoButton} ${css}`}>
          <VideoModal show={modalShow} onHide={() => setModalShow(false)} />
          <div
            className={`readMoreBtn ${color ? "bgColor" : ""}`}
            onClick={() => handlePlayClick()}
          >
            <div>
              <span>Dive in now</span> <ArrowBtn />
            </div>
          </div>
          <div className={`readMoreBtn ${color ? "bgColor" : ""}`}>
            <a href="javascript:parent.LC_API.open_chat_window();">
              <span>Live Chat</span> <ChatIcon />
            </a>
          </div>
        </div>
      ) : (
        <>
          <VideoModal show={modalShow} onHide={() => setModalShow(false)} />
          <div
            className={`readMoreBtn ${color ? "bgColor" : ""}`}
            onClick={() => handlePlayClick()}
          >
            <div>
              <span>Dive in now</span> <ArrowBtn />
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default CTA
