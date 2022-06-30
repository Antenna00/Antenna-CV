import React from 'react';
import styled from 'styled-components';

function Home() {
  return (
    <Container>
    <div>
      <h1>Title</h1>
      <p>Lorem ipsum dolor sit （省略） anim id est laborum.</p>
      <div>
        <button>NO</button>
        <button>YES</button>
      </div>
    </div>
  </Container>
  )
}

export default Home

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  div{
    width: 40%;
    h1{
      color: #646464;
    }
    p{
      color: #646464;
    }
    div{
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 2rem;
      button{
        font-size: 1rem;
        box-sizing: border-box;
        width: 45%;
        padding: 10px;
        background: #f5f5f5;
        color: #646464;
        border: 1px solid #666;
      }
    }
  }
`;