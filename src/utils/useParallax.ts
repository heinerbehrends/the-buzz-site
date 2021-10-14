import { useEffect } from "react"

export default function useParallax() {
  if (typeof window === "undefined") return
  useEffect(() => {
    function getScrollTop() {
      return window.pageYOffset
    }
    const background = document.getElementById("background")
    const foreground = document.getElementById("foreground")
    function updateScroll() {
      if (background === null || foreground === null) {
        console.error(
          `UseParallax needs elements with id="foreground" and id="background"`
        )
        return
      }
      // the ratio between the scrolling speed of the foreground vs the background layer
      const scrollSpeedDifference = 1.6
      background.style.transform = `translateY(${getScrollTop() * -1}px)`
      foreground.style.transform = `translateY(${
        getScrollTop() * -scrollSpeedDifference
      }px)`
    }

    function handleScrollAnimation() {
      requestAnimationFrame(updateScroll)
    }
    window.addEventListener("scroll", handleScrollAnimation)

    return () => window.removeEventListener("scroll", handleScrollAnimation)
  }, [])
}
