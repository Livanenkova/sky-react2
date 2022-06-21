/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import { useState } from 'react'

import styled, { createGlobalStyle } from 'styled-components'
import Console from '../components/Console'
import Title from '../components/Title'
import FontStyles from '../components/FontStyle'
import FlexWrap from '../components/Flex'
// import ConsoleButton from '../components/ConsoleButton'

// const [colorTheme, setThemeColor] = useState('green')


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: "Roboto", sans-serif;
    box-sizing: border-box;
    color:green;
  }
  body,
h1{
  margin: 0;
}
`

const AppWrapper = styled.div`
  background: black;
  width: 100%;
  padding: 2rem;
  min-height: 100vh;
`

function changeTheme(color) {
  setThemeColor(color)
}

function ConsoleApp() {
  return (
    <>
      <FontStyles />
      <GlobalStyle />
      <FlexWrap/>
      <AppWrapper>
        <Title>Console CMD. SKYPRO_REACT</Title>
        <Console />
      </AppWrapper>
    </>
  )
}

export default ConsoleApp
