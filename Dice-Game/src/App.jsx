import StartGame from "./Components/StartGame"
import GamePlay from "./Components/GamePlay";
import { useState } from "react";

function App() {
   const [isGameStart, setIsGameStart] = useState(true)

  const toggleGamePlay = ()=>{
    setIsGameStart((prev) => !prev)
  }
 
  return (
    <>
    {
      isGameStart ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />
    }
     
    </>
  )
}

export default App
