import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Operators() {
  const [operators, setOperators] = useState([])

  useEffect(() => {
    axios
      .get('https://my-json-server.typicode.com/ryanboris/demo-app-aug3/db')
      .then(response => {
        setOperators(response.data.operators)
      })
      .catch(err => console.error(err))
  }, [])

  console.log('operators', operators)

  return <div>Operators!</div>
}

export default Operators
