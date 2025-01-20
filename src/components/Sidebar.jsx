"use client"
// React
import { useState } from "react"
// Css
import styles from "@/styles/layout/sidebar.module.scss"
// SVG Icon
import { FooterPhone } from "../app/app-constants"
// Component
import VideoModal from "../app/home/components/videomodal"

const SidebarCTA = () => {
  const [modalShow, setModalShow] = useState(false)

  const handlePlayClick = () => {
    setModalShow(true)
  }
  return (
    <div className={styles.sidebarSec}>
      <VideoModal show={modalShow} onHide={() => setModalShow(false)} />
      <button
        className={styles.getFrom}
        type="button"
        onClick={() => handlePlayClick()}
      >
        <span className="text-light">Get A Quote</span>
      </button>
      <div className={styles.phoneNumber}>
        <a href="tel:800-253-1448">
          <FooterPhone />
        </a>
      </div>
    </div>
  )
}

export default SidebarCTA
