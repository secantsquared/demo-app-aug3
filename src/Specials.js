import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from './Button'

function Specials() {
  const [specials, setSpecials] = useState([])

  useEffect(() => {
    axios
      .get('https://my-json-server.typicode.com/ryanboris/demo-app-aug3/db')
      .then(response => {
        setSpecials(response.data.specials)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      {specials.map(special => (
        <Button key={special} children={special} />
      ))}
    </div>
  )
}

export default Specials
