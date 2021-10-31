import React from 'react';
import ReactSpring, {useSpring, useTransition,animated, config} from 'react-spring';
import './SongButton.css';
import styled from "styled-components";

function SongButton(props) {
    const { useState, useEffect } = React;
  const [isToggled, setIsToggled] = useState(false);
  function handleClick(e) {
      setIsToggled(!isToggled);
  }
  const brainClipPath = 'polygon(67.29% 7.59%, 80.4% 19.67%, 88.57% 34.12%, 92.49% 46.48%, 93.22% 62.53%, 90.97% 73.8%, 82.03% 92.86%, 68.44% 99.38%, 55.71% 96.70%, 43.84% 94.19%, 33.06% 85.81%, 28.34% 72.91%, 19.53% 62.42%, 6.48% 59.84%, 1.94% 51.91%, 5.02% 36.21%, 13.98% 18.49%, 25.82% 8.09%, 40.16% 3.11%, 55.58% 2.96%';

  const fade = useSpring({
      config: config.slow,
      immediate: isToggled ? key => key === 'zIndex' : key => key === '',
      zIndex: isToggled ? '12' : '1',
      clipPath: isToggled ?  brainClipPath : props.clipPath,
      height: isToggled ? '100%' : props.height,
      width: isToggled ? '100%' : props.width,
      position: isToggled ? 'relative' : 'absolute',
      top: isToggled ? '0%' : props.top,
      left: isToggled ? '0%' : props.left,
      color: isToggled ? '#fff' : 'transparent'
    });
    return (
        <>
        <animated.button id={props.id} className={isToggled? "item toggled" : "item"} style={fade} onClick={handleClick}>
            {props.name}
        </animated.button>
        </>
      );
    }
    
    export default SongButton;