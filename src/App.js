import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [numbers, setNumbers] = useState([])
  const [operators, setOperators] = useState([])
  const [specials, setSpecials] = useState([])

  useEffect(() => {
    axios
      .get('https://my-json-server.typicode.com/ryanboris/demo-app-aug3/db')
      .then(response => {
        setNumbers(response.data.numbers)
        setOperators(response.data.operators)
        setSpecials(response.data.specials)
      })
      .catch(err => console.error(err))
  }, [])

  console.log('numbers', numbers)
  console.log('operators', operators)
  console.log('specials', specials)
  return <div className="App">App is rendering!</div>
}

export default App
