import React from "react"

interface timeDisplayProps {
  time: number
  style?: any
}

export default function TimeDisplay({
  time,
  style,
}: timeDisplayProps): JSX.Element {
  function makeDisplayString(timeArg) {
    return `${Math.floor(timeArg / 60) % 60 < 10 ? "0" : ""}${
      Math.floor(timeArg / 60) % 60
    }:${Math.floor(timeArg % 60) < 10 ? "0" : ""}${Math.floor(timeArg % 60)}`
  }
  return (
    <span style={{ marginRight: "16px", ...style }}>
      {makeDisplayString(time)}
    </span>
  )
}
