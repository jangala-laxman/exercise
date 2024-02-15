import React, { useState, useRef, useEffect } from 'react';
import Menu from './Menu';
import './canvas.css'
import puppy from '../../puppy.jpg'
const Canvas = ({image}) => {
    const canvasRef = useRef(null); 
    const ctxRef = useRef(null); 
    const [isDrawing, setIsDrawing] = useState(false); 
    const [lineWidth, setLineWidth] = useState(5); 
    const [lineColor, setLineColor] = useState("black"); 
   
  
    // Initialization when the component 
    // mounts for the first time 
    useEffect(() => { 
        const canvas = canvasRef.current; 
        const ctx = canvas.getContext("2d"); 
        ctx.lineCap = "round"; 
        ctx.lineJoin = "round"; 
        ctx.strokeStyle = lineColor; 
        ctx.lineWidth = lineWidth; 
        ctxRef.current = ctx; 
    }, [lineColor, lineWidth]); 
  
    // Function for starting the drawing 
    const startDrawing = (e) => { 
        ctxRef.current.beginPath(); 
        ctxRef.current.moveTo( 
            e.nativeEvent.offsetX, 
            e.nativeEvent.offsetY 
        ); 
        setIsDrawing(true); 
    }; 
  
    // Function for ending the drawing 
    const endDrawing = () => { 
        ctxRef.current.closePath(); 
        setIsDrawing(false); 
    }; 
  
    const draw = (e) => { 
        if (!isDrawing) { 
            return; 
        } 
        ctxRef.current.lineTo( 
            e.nativeEvent.offsetX, 
            e.nativeEvent.offsetY 
        ); 
  
        ctxRef.current.stroke(); 
    }; 
        const clearPaint=()=>{
            ctxRef.current.clearRect(0,0,canvasRef.current.width, canvasRef.current.height)
        }
        
        return (
            <div className="canvas-container">
            <Menu
                lineColor={lineColor}
                lineWidth={lineWidth}
                setLineColor={setLineColor}
                setLineWidth={setLineWidth}
                clearPaint={clearPaint}
            />
            <canvas className='canvass'
                onMouseDown={startDrawing}
                onMouseUp={endDrawing}
                onMouseMove={draw}
                ref={canvasRef}
                width={`1024px`}
                height={`600px`}
            />
        </div>
    );
}
export default Canvas;
