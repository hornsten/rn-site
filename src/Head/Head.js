import './Head.css';
import everything from '../images/Everything.png'
import React from 'react';
import ReactSpring, {useSpring, animated, config} from 'react-spring';
import styled from "styled-components";

function Head() {

  function expandImage() {
    console.log("Woah, it grew!");
  }
  const { useState, useEffect } = React;
  const [isToggled, setIsToggled] = useState(false);
  const fade = useSpring({
      config: config.molasses,
      top: isToggled ? '0' : '25vh',
      clipPath: isToggled ? 'polygon(46.44% -0.8%, 77.81% 10.08%, 97.15% 37.24%, 97.66% 70.32%, 80% 94.8%, 55.45% 92%, 28.57% 79.44%, 29.35% 69.41%, 23.38% 64.24%, 17.54% 59.72%, 11.07% 60.35%, 2.59% 58.16%, 2.85% 36.28%, 11.55% 20.56%, 20% 10%)' : 'polygon(38.16% 1.56%, 57.23% 4.94%, 71.82% 7.22%, 85.84% 9.25%, 95.44% 11.42%, 92.33% 27.05%, 86.89% 46.06%, 83.21% 60.76%, 63.5% 59.47%, 42.04% 56.07%, 22.15% 51.68%, 3.71% 43.56%, -5px 23.57%, 7.64% 14.08%, 20.77% 2.12%)',
      height: isToggled ? '100%' : '55%',
      width: isToggled ? '100%' : '55%',
      backgroundSize: isToggled ? 'cover' : 'contain',
      marginLeft: isToggled ? '2vh' : '0vh'
    });

  return (
    
    <div className="Head">
        <div className="Brain arrowBg">
            <animated.button className="ev-panel" style={fade} onClick={() => setIsToggled(!isToggled)}>
            </animated.button>
            <div className="isyimd-panel"></div> 
            <div className="moy-panel"></div> 
            <div className="bright-panel"></div>            
      </div>
    </div>
  );
}

export default Head;