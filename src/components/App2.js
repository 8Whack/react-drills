import React from 'react'

function App2() {
    let arr = ['Food', 'Drink', 'Battle', 'Mead']
  return <>
    {arr.map((item, index) => (<h1 key={index}>{item}</h1>))}
  </>
}

export default App2