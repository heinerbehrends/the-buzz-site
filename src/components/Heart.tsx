import React, { useEffect, useState } from "react"
import HeartIcon from "../icons/heart.svg"
import { HeartButton } from "../styles/playerStyles"
import { HeartType } from "./MultiplePlayers"

export default function Heart({ title, count }: HeartType) {
  const [hearts, setHearts] = useState(0)
  // update hearts after MultiplePlayers fetches them
  useEffect(() => {
    setHearts(count)
  }, [count])
  // click function calls serverless funtion that updates the hasura db
  function updateHearts(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault()
    fetch("/.netlify/functions/add-heart", {
      method: "POST",
      body: JSON.stringify({ title }),
    })
  }
  const heartColors = [
    "#fff",
    "#fff8dafe",
    "#fff1b9fe",
    "#ffea98fe",
    "#ffe478fe",
    "#ffdd57fe",
    "#ffc745fe",
    "#ffae34fe",
    "#ff9723fe",
    "#ff7e11fe",
    "#ff6701fe",
    "#ff5b27fe",
    "#ff4f52fe",
    "#ff437cfe",
    "#ff37a7fe",
    "#ff2bd0cf",
  ]
  const color =
    hearts - count > heartColors.length - 1
      ? heartColors.length - 1
      : hearts - count
  return (
    <HeartButton
      title={"Add a heart"}
      onClick={(event: React.MouseEvent<HTMLElement>) => {
        // allow user to add up to 16 hearts
        if (hearts - count < 17) {
          updateHearts(event)
          setHearts(hearts + 1)
        }
        return
      }}
    >
      <HeartIcon
        style={{
          fill: heartColors[color],
          transform: `scale(1.${hearts - count < 10 ? "0" : ""}${
            hearts - count
          })`,
          marginRight: "8px",
          opacity: 0.75,
        }}
      />
      <span style={{ fontSize: "18px", color: "white" }}>{hearts}</span>
    </HeartButton>
  )
}
