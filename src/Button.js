import styled, { css } from 'styled-components'

const Button = styled.button`
  width: 50px;
  height: 25px;
  border: 2px solid black;

  ${props =>
    props.number &&
    css`
      font-size: 20px;
      border-radius: 20px;
    `}

  ${props =>
    props.special &&
    css`
      border: 2px solid red;
    `}
`

export default Button
