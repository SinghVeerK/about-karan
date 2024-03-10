import React from 'react'
import "./style.css";

const Dot = ({shade = "black"}) => {
  return (
    <div className={`dot ${shade}`}></div>
  )
}

export default Dot