import React, {useState} from 'react';

const App = () => {
  const [state, useState] = useState('')
  const [number, setNumber] = useState(0)

  return (
    <div>
      <h1>Hello World!</h1>
      <button onClick={()=> setNumber(number + 1)}>+</button>
      <h1>{number}</h1>
    </div>
  )
}
export default App;