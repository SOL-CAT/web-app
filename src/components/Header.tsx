import { FC } from "react"
import useBreakPoint from "../hooks/useBreakpoint"
import { HeaderDesktop } from "./HeaderDesktop"
import { HeaderMobile } from "./HeaderMobile"
import "../App.css"

const Header: FC = () => {
  const { isMobile, isTablet } = useBreakPoint()

  return (
    <div className="w-screen flex items-center fixed top-0 z-[10] px-20 py-10">
      {isMobile || isTablet ? <HeaderMobile /> : <HeaderDesktop />}
    </div>
  )
}

export default Header;