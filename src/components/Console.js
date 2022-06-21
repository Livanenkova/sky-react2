/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import nextId from "react-id-generator";
import Line from './Line'

const circlePit = keyframes`
transform : rotateZ()
`

const StyledConsole = styled.textarea`
  width: 100%;
  height: 70vh;
  background: black;
  font-size: 24px;
  border: none;
  resize: none;
  color:#29e823;
  &:focus{
    outline:none
  }
  animation : ${circlePit} 2s
`

const Button = styled.button`
  color: ${(props) => props.color || 'green'};
  padding: 0;
  border: 2px solid green;
  font: inherit;
  color: inherit;
  background: inherit;
  padding: 10px 20px;
  border-radius:10px;
  &:hover,
  &:focus {
    border: 3px solid #29e823;
    font-size: 20px;
    color:#29e823;
  }
  &:active {
    color: red;
  }
  &:disabled {
    color: #8fc7af;
    border: 2px solid #8fc7af;
    font: inherit;
  }
`

function Console(color, ...props) {
  console.log(props)
  const [lines, setLines] = useState(['C/users/SKYPRO_REACT>'])
  const [disable, setDisable] = useState(true)



  const onKeyPress = (e) => {
    if (e.charCode === 13) {
      setLines([...lines, `C/users/SKYPRO_REACT> ${e.target.value}`])
      setDisable(false)
    }
  }

  const setButton = (e) => {
    console.log(e.target.value,lines)

    setLines([...lines])
  }

  const setTheme = () => {
    console.log(props)
    changeTheme('blue')
  }

  return (
    
    <div>
      {lines.map((line) => (
        
        <Line key={nextId()} >{line}</Line>
      ))}
      <StyledConsole color={color} onKeyPress={onKeyPress} {...props} />
      <Button onClick={setButton} disabled={disable}>Кнопка</Button>
      <Button onClick={setTheme} >Кнопка Theme</Button>
    </div>
  )
}
export default Console
