import { useRef } from 'react'

const ExampleRefs = () => {
  const inputRef = useRef(null)

  const handleFocusInput = () => {
    console.log(inputRef) // show input reference
    if (inputRef) { // If element exists
      inputRef.current.focus()
    }

    console.log(inputRef.current.value)
  }

  return (
    <>
      <p>Example Refs</p>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocusInput}>Focus Input</button>
    </>
  )
}

export default ExampleRefs
