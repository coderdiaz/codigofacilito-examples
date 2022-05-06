import 'keen-slider/keen-slider.min.css'
import { forwardRef, useImperativeHandle } from 'react'
import { useKeenSlider } from 'keen-slider/react'

const Slide = (props) => {
  const { children } = props
  return (
    <div className="keen-slider__slide">
      {children}
    </div>
  )
}

const ForwardedSlider = (props, ref) => {
  const { children, options } = props
  const [refCallback, slider,] = useKeenSlider(options)

  useImperativeHandle(ref, () => {
    return {
      next: slider.current.next,
      prev: slider.current.prev,
    }
  })

  return (
    <div ref={refCallback} className="keen-slider">
      {children}
    </div>
  )
}

const Slider = forwardRef(ForwardedSlider)
export {
  Slider,
  Slide
}
