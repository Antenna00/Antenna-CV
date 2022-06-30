import React, { useState, useEffect, CSSProperties } from "react";
import BarLoader from "react-spinners/BarLoader";
import styled from 'styled-components'

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  backgroundColor: "lightgreen",
};

function LoadingBar() {

  const [loading, setLoading] = useState(false); //ロードバー消す用
  const [chocobo, setChocobo] = useState(false); //チョコボ消す用
  
  useEffect(() => {
    setLoading(true)
    setChocobo(true)
    setTimeout(() => {
    setLoading(false)
    setChocobo(false)
    }, 10000)
  }, [])

  useEffect(() => {
    if(loading){
      setChocobo(true)
    }else if (!loading){
      setChocobo(false)
    }
  })

  return (
  <div className="sweet-loading">
    <Container>       
      <Wrapper>   
          <Chocobo show={chocobo}/>  
        <BarWrapper>
          <BarLoader 
              loading={loading} 
              cssOverride={override} 
              width={300}
              height={15}
              speedMultiplier={0.3}
            />
        </BarWrapper>
      </Wrapper>  
    </Container>

  </div>
  )
}

export default LoadingBar

const Container = styled.div`
  height: 90vh;
  width: 25vw;
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-left: 70vw;
  background-color: #25262599;
  
  z-index: 1000;
  border-radius: 100px;
  z-index: 1;
`
const Wrapper = styled.div`
 height: 100vh;
 width: 20vw;
 position: fixed;
 display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding-right: 5%;
  padding-bottom: 10%;

`

const BarWrapper = styled.div`
 position: fixed;
 margin-top: 5%;
`
var percentage:string = '0%';
var percentage2:string = '100%';

const Chocobo = styled.div<{ show: boolean, percentage: string }>`
  ${props => {
    if(props.show === true){
      return `  height: 80px;
                width: 350px;  
              `
    }else if(props.show === false) {
      return `  height: 0px;
                width: 0px;  `
    }
  }}
  background: url('/chocobos.png') no-repeat;
  background-size: contain;
  display: flex;
  position: fixed;
  justify-content: center;
  z-index: 1500;  
  animation: Chocobo-run infinite 11000ms;


  ${props => {
    return `
    @keyframes Chocobo-run {
      
    percentage {
      transform: translateX(0px);
    }
    20% {
      
    }
    40% {
      
    }
    50% {
      
    }
    50% {
      
    }
    50% {

    }
    100% {
      transform: translateX(270px);
    }
    }
    `
  }}

`