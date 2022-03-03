import React, { useState } from 'react'

function App3() {
    const [arr, setArr] = useState(['Food', 'Drink', 'Battle', 'Mead'])
    const [filterWord, setFilterWord] = useState();

    const search = word => {
        setFilterWord(word);
    }
    let toDisplay = arr
    .filter(element =>{
        return element.includes(filterWord)
    })
    .map((element, index) =>{
        return <h2 key={index}>{element}</h2>
    })
  return <>
  <input onChange={(e)=> search(e.target.value)} />
  {toDisplay}
  </>
}

export default App3