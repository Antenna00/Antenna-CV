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
  const [loadSC, setLoad] = useState(false); //ロード画面自体消す用

  useEffect(() => {
    setLoading(true)
    setChocobo(true)
    setLoad(true)
    setTimeout(() => {
    setLoading(false)
    setChocobo(false)
    setLoad(false)
    }, 5000)
  }, [])

  return (
  <div className="sweet-loading">
    <Container show2={loadSC}>       
      <Wrapper >   
          <Chocobo show={chocobo}/>  
        <BarWrapper >
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

const Container = styled.div<{ show2: boolean }>`
  height: 90vh;
  width: 25vw;
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-left: 70vw;
  background-color: #25262599;
  z-index: 1000;
  border-radius: 100px;
  border-bottom-right-radius: 30px;
  border-top-right-radius: 30px;
  z-index: 1;

  ${props => {
    if(props.show2 === false){
      return `
      transform: translateX(100%);`
    }
  }} //animation にする
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

const Chocobo = styled.div<{ show: boolean }>`
  ${props => {
    if(props.show === true){
      return `  height: 160px;
                width: 210px;  
              `
    }else if(props.show === false) {
      return `  height: 0px;
                width: 0px;  `
    }
  }}
  background: url('/chocobo2steps.png') no-repeat;
  display: flex;
  position: fixed;
  justify-content: center;
  z-index: 1500;  
  animation: ChocoboRun 1s steps(2) infinite, forward 6s linear;
  
  @keyframes ChocoboRun {
  0%{
    background-position: 0px;
  }
  100%{
    background-position: -420px;
  }
}

 @keyframes forward {
    0%{
      transform: translateX(-100px);
    }
    100%{
      transform:translateX(160px);
    }
 }
`