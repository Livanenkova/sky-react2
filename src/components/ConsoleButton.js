/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components'

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
`

function ConsoleButton(props) {
  return <Button {...props}>Кнопка </Button>
}

export default ConsoleButton