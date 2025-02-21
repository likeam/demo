import React, { useState } from 'react'
import "./style.css";

const ToggleBgColors = () => {
    const [bgClolor, setBgClolor] = useState("white");
    const [textClolor, setTextClolor] = useState("#1b1b1b");
    const [btnStyle, setBtnStyle] = useState("white");


    function handleClick() {
        setBgClolor(bgClolor === "white" ? "#1b1b1b" : "white");
        setTextClolor(textClolor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
        setBtnStyle(btnStyle === "white" ? "#1b1b1b" : "white");
    }

  return (
    <div style={{backgroundColor: bgClolor, color: textClolor}}>
        <button onClick={handleClick} style={{btnStyle, color: textClolor, border: `2px solod ${textClolor}`}}>
            {bgClolor === "#1b1b1b" ? "Black Theme" : "White Theme"}
        </button>
        <section className="content">
            <h1>Welcome To A <br /> Real World...</h1>
        </section>
    </div>
  )
}

export default ToggleBgColors