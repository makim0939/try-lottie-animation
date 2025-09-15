import { useEffect, useState } from "react"
import {  DotLottieReact} from "@lottiefiles/dotLottie-react"
import {DotLottie} from "@lottiefiles/dotlottie-web"

function App() {
  const [dotLottie, setDotLottie] = useState<DotLottie | null>(null)
  
  const handleOnclick = () => {
    if(!dotLottie) return;
    dotLottie.play();
  };
  
  useEffect (() => {
    if(!dotLottie) return;
    dotLottie.play();

  }, [dotLottie])

  return (
    <>
      <DotLottieReact
        dotLottieRefCallback={(ref) => setDotLottie(ref)}
        src="./firework.lottie"
        className=" w-64 h-64"
        autoplay
        />
    <button onClick={handleOnclick}>click me</button>
    </>
  )
}

export default App
