"use client"
import { usePathname } from "next/navigation"
import SidebarCTA from "../components/Sidebar"
import Footer from "./layout/footer"
import Header from "./layout/header"
import Scripts from "./Scripts"

const ConditionalLayout = ({ children }) => {
  const pathname = usePathname()

  const noHeaderFooterPaths = ["/explainer-animated-videos"]

  const shouldHideHeaderFooter = noHeaderFooterPaths.some((path) =>
    pathname.startsWith(path)
  )
  return (
    <>
      <Scripts />
      {!shouldHideHeaderFooter && <Header />}
      <SidebarCTA />
      {children}
      {!shouldHideHeaderFooter && <Footer />}
    </>
  )
}

export default ConditionalLayout
