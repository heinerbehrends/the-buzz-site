import { useEffect, useState } from "react"

export default function useBodySize() {
  const [bodyHeight, setBodyHeight] = useState(0)
  const [bodyWidth, setBodyWidth] = useState(0)
  useEffect(() => {
    setBodyHeight(document.getElementById("foreground").offsetHeight / 1.38)
    setBodyWidth(document.body.offsetWidth)
  }, [])
  return { bodyWidth, bodyHeight }
}
