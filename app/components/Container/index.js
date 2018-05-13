import React, { Children } from 'react'
import StyledContainer from './styles/container'

export default function Container (props) {
  return (<StyledContainer>
    {Children.toArray(props.children)}
  </StyledContainer>)
}
