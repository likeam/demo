import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import "./style.css";

const SearchIcon = () => {


    const [showInput, setShowInput] = useState(false);
    const [bgColor, setBgColor] = useState("white");

    const handleClick = (e) => {
        setBgColor("#1b1b1b");
        if (e.target.className === "container") {
            setShowInput(false);
            setBgColor("#fff");
            
        }
    }

  return (
    <>
    <section className="container"
     onClick={handleClick}
     style={{backgroundColor: bgColor}}
     >
        {
            showInput ? (
                <input type="text" placeholder="Search..." />
            ) : (
                <FaSearch onClick={() => setShowInput(true)} />)
        }
     </section>
    </>
  )
}

export default SearchIcon