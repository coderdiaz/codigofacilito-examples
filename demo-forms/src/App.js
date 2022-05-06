import { useState, useRef } from 'react';
import './App.css';
import ExampleRefs from './components/ExampleRefs'
import ExampleInputForwardRef from './components/ExampleForwardRef';
import { Slider, Slide } from './components/Slider';

function App() {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const nameInputRef = useRef(null)
  const sliderRef = useRef(null)

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

  const handleSlider = (direction) => {
    console.log(direction)
    if (direction == 'next') {
      sliderRef.current.next()
    } else {
      sliderRef.current.prev()
    }
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
      <div style={{ marginTop: 50 }}>
        <Slider ref={sliderRef} options={{
          slides: {
            perView: 1,
          },
        }}>
          <Slide>1</Slide>
          <Slide>2</Slide>
          <Slide>3</Slide>
        </Slider>
      </div>
      <button onClick={() => handleSlider('prev')}>Anterior</button>
      <button onClick={() => handleSlider('next')}>Siguiente</button>
    </div>
  );
}

export default App;
