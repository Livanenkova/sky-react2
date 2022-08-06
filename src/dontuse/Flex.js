/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components'


const Flex = styled.div`
  color: ${(props) => props.color || '#2ff581'};
  flex-direction:column;
`

function FlexWrap(props) {
  return <Flex {...props} />
}

export default FlexWrap