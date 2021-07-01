import fedUp from "./mp3/Fed-Up.mp3"
import lifeguard from "./mp3/Lifeguard.mp3"
import billyRidesAWave from "./mp3/Billy-Rides-A-Wave.mp3"
import theRace from "./mp3/The-Race.mp3"
import blackBox from "./mp3/Black-Box.mp3"
import gender from "./mp3/Gender.mp3"
import { song } from "./components/MultiplePlayers"

export const songs: song[] = [
  {
    title: "Black Box",
    mp3: blackBox,
    credits: "Leon van de Vendel and Heiner Behrends",
  },

  {
    title: "Fed up (with machine guns)",
    mp3: fedUp,
    credits: "Heiner Behrends and Leon van de Vendel",
  },
  {
    title: "Lifeguard",
    mp3: lifeguard,
    credits: "Heiner Behrends and Leon van de Vendel",
  },
  {
    title: "Billy rides a wave",
    mp3: billyRidesAWave,
    credits: "Heiner Behrends and Leon van de Vendel",
  },
  {
    title: "The Race",
    mp3: theRace,
    credits: "Leon van de Vendel and Heiner Behrends",
  },
  {
    title: "Gender",
    mp3: gender,
    credits: "Simon Theodorus and Heiner Behrends",
  },
]
