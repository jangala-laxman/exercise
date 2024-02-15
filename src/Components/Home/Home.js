import React from "react";
import './Home.css'
const Home = ()=>{
    return (
        <div className="Home">
            <a href="/upload"><button style={styled}>Get Started</button></a>
           
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