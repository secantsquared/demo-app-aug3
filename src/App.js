import React from 'react'
import Numbers from './Numbers'
import Operators from './Operators'
import Specials from './Specials'
import styled from 'styled-components'

const Container = styled.div`
  background: mediumturquoise;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  div.numbers {
    grid-area: 1 / 1 / 1 / 1;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    height: 500px;
  }

  div.specials {
    grid-area: 2 / 1 / 2 / 1;
  }

  div.operators {
    grid-area: 3 / 1 / 3 / 1;
  }
`

function App() {
  return (
    <Container>
      <div className="numbers">
        <Numbers />
      </div>
      <div className="specials">
        <Specials />
      </div>
      <div className="operators">
        <Operators />
      </div>
    </Container>
  )
}

export default App
