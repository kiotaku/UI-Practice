import React, { useState, useRef, useEffect } from 'react'
import CSSModules from 'react-css-modules'
import style from './style.css'

const Acoordion = ({ text }) => {
  const [expands, setExpands] = useState(false)
  const [noExpands, setNoExpands] = useState(false)
  const accordion = useRef(null)
  const collapse = useRef(null)

  useEffect(() => {
    setNoExpands(accordion.current.getBoundingClientRect().height < Number.parseInt(window.getComputedStyle(collapse.current, null).getPropertyValue('max-height')))
  })

  return (
    <div styleName={"accordion"} ref={accordion}>
      <div styleName="collapse" ref={collapse} hidden={true}/>
      <div styleName={`text ${expands ? '' : 'collapse'}`}>{text}</div>
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