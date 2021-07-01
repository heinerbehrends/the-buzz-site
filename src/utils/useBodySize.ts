import { useEffect, useState } from "react"

export default function useBodySize() {
  const [bodyHeight, setBodyHeight] = useState(0)
  const [bodyWidth, setBodyWidth] = useState(0)
  useEffect(() => {
    const foregroundElement = document.getElementById("foreground")
    if (foregroundElement === null) {
      console.error(`useBodyWidth needs an element with id="foreground"`)
      return
    }
    setBodyHeight(foregroundElement.offsetHeight / 1.38)
    setBodyWidth(document.body.offsetWidth)
  }, [])
  return { bodyWidth, bodyHeight }
}
