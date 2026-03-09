import React from 'react'
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className='foot-container'>
        <p className="f1"><span className='flogo'>Spoorjith</span> &copy; 2026</p>
        <div className="flinks">
          <a href="https://github.com/spoorjith1" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/spoorjith-malebalu-3545763b0/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:spoorjith1@gmail.com">Gmail</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;