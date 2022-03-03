import React, { useState } from 'react'

function App4() {
    const [pass, setPass] = useState();
    const [user, setUser] = useState();

    const login = () => {
        alert(`Username: ${user}, Password: ${pass}`)
    }
    
  return <>
  <div>
  <input placeholder='Username' onChange={e=> setUser(e.target.value) }/>
  <input placeholder='Password' onChange={e=> setPass(e.target.value)}/>
  <button onClick={()=> login()}>Submit</button>
  </div>
  </>
  
}

export default App4