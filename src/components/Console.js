/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react'
import styled from 'styled-components'
import nextId from 'react-id-generator'
import Line from './Line'
import Title from "./Title"

const StyledConsole = styled.textarea`
color: ${(props) => props.color || '#29e823'};
  width: 100%;
  height: 70vh;
  background: black;
  font-size: 24px;
  border: none;
  resize: none;
  &:focus {
    outline: none;
  }
`

const Button = styled.button`
  color: ${(props) => props.color || '#29e823'};
  padding: 0;
  border: 2px solid green;
  font: inherit;
  color: inherit;
  background: inherit;
  padding: 10px 20px;
  border-radius: 10px;
  &:hover,
  &:focus {
    border: 3px solid #29e823;
    font-size: 20px;
    color: #29e823;
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
  const [colorTheme, setThemeColor] = useState('green')

  const onKeyPress = (e) => {
    if (e.charCode === 13) {
      setLines([...lines, `C/users/SKYPRO_REACT> ${e.target.value}`])
      setDisable(false)
    }
  }

  const setButton = () => {

    setLines([...lines])
  }

  const setTheme = () => {
    if(colorTheme === 'green' || colorTheme === '#29e823'){
      setThemeColor('blue')
    } else {
      setThemeColor('#29e823')
    }
  }

  return (
    <div>
    <Title color={colorTheme}>Console CMD. SKYPRO_REACT</Title>
    <div>
      {lines.map((line) => (
        <Line key={nextId()} color={colorTheme}>{line}</Line>
      ))}
      <StyledConsole color={colorTheme} onKeyPress={onKeyPress} {...props} />
      <Button onClick={setButton} disabled={disable} color={colorTheme} >
        Кнопка
      </Button>
      <Button onClick={setTheme} color={colorTheme}>
        Кнопка Theme
      </Button>
    </div>
    </div>
  )
}
export default Console
