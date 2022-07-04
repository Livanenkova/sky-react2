import  {useState} from "react";

function ColorSquad() {
  const [colorGreen, greenSquad] = useState('visible');
  const [colorRed,redSquad] = useState('hidden')

  function submitGreenButton() {
    if(colorGreen === 'visible' ) {
      greenSquad('hidden')
      redSquad('visible')

    } else if(colorGreen === 'hidden') {
      greenSquad('visible')
      redSquad('hidden')
    }
  }

  function submitRedButton() {
    if(colorRed === 'visible' ) {
      redSquad('hidden')
      greenSquad('visible')
    } else if(colorRed === 'hidden') {
      redSquad('visible')
      greenSquad('hidden')
    }
  }
  
    return (
      <div>
        <button className="squad green-squad" onClick={submitGreenButton} type="button" style={{ width: "100px", height: "100px", background: `green`, margin:"auto", visibility:`${colorGreen}`}}>1</button>
        <button className="squad red-squad" onClick={submitRedButton} type="button" style={{ width: "100px", height: "100px", background: `red`, margin:"auto", visibility:`${colorRed}`}}>1</button>
      </div>
    )
}

export default ColorSquad