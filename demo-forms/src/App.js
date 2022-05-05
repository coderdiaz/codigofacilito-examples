import { useState, useRef } from 'react';
import './App.css';
import ExampleRefs from './components/ExampleRefs'
import ExampleInputForwardRef from './components/ExampleForwardRef';

function App() {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const nameInputRef = useRef(null)

  const onSubmit = (e) => {
    e.preventDefault()
    nameInputRef.current.focus()
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
        <ExampleInputForwardRef
          ref={nameInputRef}
          label="Nombre"
          id="name"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)} />
        <ExampleInputForwardRef
          label="Apellido"
          id="last_name"
          value={lastName}
          name="last_name"
          onChange={(e) => setLastName(e.target.value)} />
        <button type="button" onClick={onSubmit}>Enviar</button>
        <button onClick={(e) => handleButtonClick(e)}>Quiero tener suerte</button>
      </form>

      <ExampleRefs />
    </div>
  );
}

export default App;
