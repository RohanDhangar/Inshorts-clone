import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone made by -{" "}
        <a href="https://www.linkedin.com/in/rohan-dhangar-02bb131b9/" target="__blank">
          Rohan Dhangar
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.instagram.com/rohan_s_dhangar/" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/rohan-dhangar-02bb131b9/" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://github.com/RohanDhangar" target="__blank">
        <i class="fa-brands fa-github fa-2x"></i>
        </a>
        <a href="https://www.facebook.com/rohan.dhangar.77770" target="__blank">
        <i class="fa-brands fa-facebook fa-2x"></i>
        </a>
      </div>
    </div>
  )
}

export default Footer