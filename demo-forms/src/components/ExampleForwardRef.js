import { forwardRef } from 'react'

const ExampleInputForwardRef = (props, ref) => {
  const { label, name, id, value, onChange } = props

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        ref={ref}
        name={name}
        value={value}
        type="text"
        onChange={onChange} />
    </div>
  )
}

export default forwardRef(ExampleInputForwardRef)
