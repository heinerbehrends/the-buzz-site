import React from "react"

interface timeDisplayProps {
  time: number
  className?: string
}

export default function TimeDisplay({
  time,
  className,
}: timeDisplayProps): JSX.Element {
  function makeDisplayString(timeArg) {
    return `${Math.floor(timeArg / 60) % 60 < 10 ? "0" : ""}${
      Math.floor(timeArg / 60) % 60
    }:${Math.floor(timeArg % 60) < 10 ? "0" : ""}${Math.floor(timeArg % 60)}`
  }
  return <span className={className}>{makeDisplayString(time)}</span>
}
