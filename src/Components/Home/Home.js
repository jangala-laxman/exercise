import React from "react";
import './Home.css'
const Home = ({setgetStarted})=>{
    const handleClick=()=>{
        setgetStarted(true)
    }
    return (
        <div className="Home">
            <button style={styled} onClick={handleClick}>Get Started</button>
        </div>
    )
}

const styled = {
    width: 100,
    height: 40,
    inset: 0,
    backgroundColor: "#ff0021c4",
    borderRadius: 8,
    border: 0,
    fontSize: 'medium',
    margin: 'auto',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute'
}
export default Home