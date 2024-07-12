import React, {useState} from "react";

const App = () => {
  const [name, setName] = useState();
  setName("이창현");
  return (
    <div>
      <h1>Hello World!</h1>
      <h1>안녕 나는 {name}</h1>
    </div>
  )
}
export default App;