import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from './Button'

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

  return (
    <div>
      {operators.map(operator => (
        <Button key={operator.char} children={operator.value} />
      ))}
    </div>
  )
}

export default Operators
