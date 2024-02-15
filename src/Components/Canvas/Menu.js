import React from "react";
import Slider from '@mui/material/Slider'
import { HexColorPicker } from 'react-colorful'
const Menu = ({ lineColor, setLineColor, lineWidth, setLineWidth , clearPaint}) => {
    return (
        <div className="Menu">
            <div className="menu-controls">
                <label>Brush Color </label>
                <HexColorPicker color={lineColor} onChange={setLineColor} />
            </div>
            <div className="menu-controls">
                <label>Brush Width </label>
                <Slider
                    defaultValue={5} 
                    aria-label="Color" 
                    value={lineWidth}
                    onChange={(e, lineWidth)=>setLineWidth(lineWidth)}
                    min={1} max={10}
                    step={0.1}
                    // valueLabelDisplay="auto"
                />
            </div>
            <button onClick={clearPaint}>Clear</button>
        </div>
    )
}

export default Menu