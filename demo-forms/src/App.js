import './App.css';

function App() {
  const onSubmit = (e) => {
    e.preventDefault()
    console.log('on submit')
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
          <input type="text" />
        </div>
        <div>
          <label>Apellidos</label>
          <input type="text" />
        </div>
        <button type="button" onClick={onSubmit}>Enviar</button>
        <button onClick={(e) => handleButtonClick(e)}>Quiero tener suerte</button>
      </form>
    </div>
  );
}

export default App;
