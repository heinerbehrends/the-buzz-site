import React from "react"
import VolumeUp from "../icons/volume_up.svg"
import VolumeDown from "../icons/volume_down.svg"
import VolumeOff from "../icons/volume_mute.svg"
import VolumeMute from "../icons/volume_off.svg"

export interface volumeIconProps {
  volume: number
  muted: boolean
  mute: Function
  unmute: Function
}

export function VolumeIcon({ volume, muted }: volumeIconProps) {
  if (muted) {
    return <VolumeMute />
  }
  if (volume < 0.2) {
    return <VolumeOff />
  }
  if (volume < 0.8) {
    return <VolumeDown />
  }
  return <VolumeUp />
}

interface volumeButtonProps {
  volume: number
  muted: boolean
  mute: Function
  unmute: Function
  className?: string
}

export default function VolumeButton({
  muted,
  mute,
  unmute,
  volume,
  className,
}: volumeButtonProps) {
  return (
    <button
      style={{ padding: "1rem" }}
      onClick={() => (muted ? unmute() : mute())}
      className={className}
    >
      <VolumeIcon volume={volume} muted={muted} unmute={unmute} mute={mute} />
    </button>
  )
}
