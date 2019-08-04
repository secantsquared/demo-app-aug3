import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from './Button'

function Numbers() {
  const [numbers, setNumbers] = useState([])

  useEffect(() => {
    axios
      .get('https://my-json-server.typicode.com/ryanboris/demo-app-aug3/db')
      .then(response => {
        setNumbers(response.data.numbers)
      })
      .catch(err => console.error(err))
  }, [])

  console.log('numbers', numbers)

  return (
    <div>
      {numbers.map(number => {
        return <Button key={number} children={number} />
      })}
    </div>
  )
}

export default Numbers
