/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */

import styled from 'styled-components'

const StyledTitle = styled.div`
  color: ${(props) => props.color || '29e823'};
  font-size: 14px;
`

const Line = (props) => {
  console.log(props.color)
  return <StyledTitle {...props} />
}
export default Line
