import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  font-size: 30px;
  color: white;
  box-shadow: 0 0 10px black;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Loader = ({text}) => <Container>{text}</Container>