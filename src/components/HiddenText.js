import  {useState} from "react";
import ColorSquad from "./ColorSquad";

const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, in quo! Itaque excepturi magnam in ipsum odit aperiam harum? Consequatur corrupti quisquam dolores recusandae eligendi aut, ipsum aperiam repellendus cumque.'

function HiddenText() {
  const [textContent, changeText] = useState(text);
  const [textButton,ChangeTextButton] = useState('Скрыть')

  function submitButton(){
    if(textButton === 'Скрыть'){
      ChangeTextButton('Показать')
    } else if (textButton === 'Показать') {
      ChangeTextButton('Скрыть')
    }
    
    if(textContent === text) {
      changeText('')
    } else if(textContent === '') {
      changeText(text)
    }
  }
  
    return (
      <div>
        
        <button type="button" onClick={submitButton}>{textButton}</button>
        <p>{textContent}</p>
        <ColorSquad/>

      </div>
    )
}

export default HiddenText