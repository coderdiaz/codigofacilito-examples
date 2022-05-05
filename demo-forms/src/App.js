import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('on submit', name, lastName)
  }

  const handleButtonClick = (e) => {
    // e.stopPropagation()
    e.preventDefault()

    console.log('Hello guys!')
  }

  return (
    <div className="App">
      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          <label>Nombre</label>
          <input value={name} type="text" onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Apellidos</label>
          <input value={lastName} type="text" onChange={(e) => setLastName(e.target.value)} />
        </div>
        <button type="button" onClick={onSubmit}>Enviar</button>
        <button onClick={(e) => handleButtonClick(e)}>Quiero tener suerte</button>
      </form>
    </div>
  );
}

export default App;
