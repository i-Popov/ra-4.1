import React, { useState } from 'react';
import {hexToRGB} from "../helpers";

const ShowColor = () => {
    const [rgb, setRgb] = useState({color: ''});
  
    const showTextAndBack = (color) => {
      setRgb({color});
      document.body.style.backgroundColor = color;
    }
  
    const handleInput = ({ target }) => {
      if (target.value.length < 7) {
        setRgb({color: ''});
        return null;
      } else if (!target.value.startsWith('#') || target.value.length > 7) {
        setRgb({color: 'Ошибка!'});
        return null;
      }
  
      const value = target.value.slice(1);
      const converted = hexToRGB(value);
      converted !== null ? showTextAndBack(converted) : setRgb({color: 'Ошибка!'});
    };
  
    return (
      <div className="input-output-div">
        <input type="text" onChange={handleInput} />
        <div>{rgb.color}</div>
      </div>
    );
  }

export default ShowColor;