import { useState, useEffect, useCallback } from 'react'

const MOBILE_BREAKPOINT = 500
const TABLET_BREAKPOINT = 1200

function useBreakPoint() {
  const [breakpoints, setBreakpoints] = useState(() => ({
    isMobile: document.documentElement.clientWidth <= MOBILE_BREAKPOINT,
    isTablet: document.documentElement.clientWidth > MOBILE_BREAKPOINT && document.documentElement.clientWidth <= TABLET_BREAKPOINT,
    isDesktop: document.documentElement.clientWidth > TABLET_BREAKPOINT
  }))

  const handleResize = useCallback(() => {
    setBreakpoints({
      isMobile: document.documentElement.clientWidth <= MOBILE_BREAKPOINT,
      isTablet: document.documentElement.clientWidth > MOBILE_BREAKPOINT && document.documentElement.clientWidth <= TABLET_BREAKPOINT,
      isDesktop: document.documentElement.clientWidth > TABLET_BREAKPOINT
    })
  }, [])

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])
  
  return breakpoints
}

export default useBreakPoint