import { useState } from "react"
import StartGame from "./components/StartGame"
import GameStart from "./components/GameStart";

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGameplay = () =>{
    setIsGameStarted((prev) => !prev);
  }
  return (
    <>{isGameStarted ? <GameStart /> : <StartGame toggle={toggleGameplay} />}
    </>
  )
}

export default App



