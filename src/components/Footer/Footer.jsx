import "./Footer.css";
import logo from "../../assets/chanikya_logo.png"

import React from 'react'

const Footer = () => {
  return (
    <div className="Footer-container">
        <hr />
        <div className="footer">
            <div className="logo-f">
                <img src={logo} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer
