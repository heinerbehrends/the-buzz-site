import { useState, useEffect } from "react";

export function useScroll() {
  const [scrollTop, setScrollTop] = useState(0)
  function handleScroll() {
    setScrollTop(window.pageYOffset || document.documentElement.scrollTop)
  }
  useEffect(() => {
    const isBrowser = typeof window !== `undefined`
    if (isBrowser) {
      window.addEventListener("scroll", handleScroll)
    }
  })
  return scrollTop
}
