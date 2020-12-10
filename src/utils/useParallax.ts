import { useState, useEffect } from "react";

export default function useParallax() {
  const [scrollTop, setScrollTop] = useState(0)
  function handleScroll() {
    setScrollTop(window.pageYOffset)
  }
  useEffect(() => {
    const isBrowser = typeof window !== `undefined`
    if (isBrowser) {
      window.addEventListener("scroll", handleScroll)
    }
    const background = document.getElementById("background")
    const foreground = document.getElementById("foreground")
    function updateScroll() {
      background.style.transform = `translate3d(0, ${scrollTop * -1}px, 0)`
      foreground.style.transform = `translate3d(0, ${scrollTop * -1.6}px, 0)`
      requestAnimationFrame(updateScroll)
    }
    requestAnimationFrame(updateScroll)
  }, [scrollTop])
}