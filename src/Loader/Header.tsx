import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Container />
  )
}

export default Header

const Container = styled.div`
    height: 90px;
    width: 100%;
    position: fixed;
    margin-left: 90px;
    background: url('/Name1.png') no-repeat;
    background-size: contain;
    display: flex;
    z-index: 0.5;
    cursor: pointer;
`