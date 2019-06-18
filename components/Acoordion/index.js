import React, { useState, useRef, useEffect } from 'react'
import CSSModules from 'react-css-modules'
import style from './style.css'

const Acoordion = ({ text }) => {
  const [expands, setExpands] = useState(false)
  const [noExpands, setNoExpands] = useState(true)
  const [textHeight, setTextHeight] = useState(undefined)
  const accordion = useRef(null)
  const textbox = useRef(null)

  useEffect(() => {
    setNoExpands(accordion.current.getBoundingClientRect().height < Number.parseInt(window.getComputedStyle(textbox.current, null).getPropertyValue('max-height')))
  }, [text])
  useEffect(() => {
    if (expands) {
      setTimeout(() => {
        setTextHeight(textbox.current.getBoundingClientRect().height)
      }, 1200)
    }
  }, [expands])

  return (
    <div styleName={"accordion"} ref={accordion}>
      <div ref={textbox} style={expands ? {maxHeight: textHeight} : {}} styleName={`text ${expands ? '' : 'collapse'}`}>{text}</div>
      { !noExpands && <button styleName="expands-button" onClick={() => setExpands(!expands)}>
        <div styleName="button-text">
          { expands ?
            <><i className="material-icons" styleName="material-icons">keyboard_arrow_up</i><span>close</span></> :
            <><i className="material-icons" styleName="material-icons">keyboard_arrow_down</i><span>read more</span></>
          }
        </div>
      </button>}
    </div>
  )
}

export default CSSModules(Acoordion, style, { allowMultiple: true })
