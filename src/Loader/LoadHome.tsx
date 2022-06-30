import React from 'react'
import styled from 'styled-components'
import BackgroundImg from './BackgroundImg.tsx'
import Header from './Header.tsx'

function LoadHome() {
  return (
    <Container>
      <Header />
      <BackgroundImg />
    </Container>
    
  )
}

export default LoadHome
 
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    display: flex;
    flex-direction: column;
    background-color:	#313131;
`
