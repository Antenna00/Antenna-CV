import React from 'react'
import styled from 'styled-components'
import Loader from './LoadingBar.tsx'

function BackgroundImg() {
  return (
    <Container>
    <Img>
    <Loader />
   </Img>
   </Container>
  )
}

export default BackgroundImg

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
  position: fixed;
`
const Img = styled.div`
    height: 90vh;
    width: 95vw;
    display: flex;
  align-items: center;
  position: fixed;
    background: url('/denen.jpg') no-repeat center center;
    background-size: cover;
    @media (max-width: 700px) {
      background: url('logo512.png')
    }
    margin-top: 40px;
    border-radius: 30px;
    z-index: 0;
`
