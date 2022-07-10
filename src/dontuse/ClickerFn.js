import { useState } from "react"

function ClickerFn(){
  const [counter, setCounter] = useState(1000)
  return (
    <button type="button" onClick={() => setCounter(counter + 1000)}>
      {counter} clicks 
    </button>
  )
}
export default ClickerFn