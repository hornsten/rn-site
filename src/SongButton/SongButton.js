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
  const brainClipPath = 'polygon(63.04% 9.27%, 76.9% 19.33%, 90.91% 29.06%, 98.52% 41.27%, 100.22% 57.75%, 99.05% 75.1%, 91.61% 96.09%, 75.19% 104.41%, 45.34% 90.16%, 35.56% 82.46%, 30.34% 69.56%, 21.53% 63.09%, 10.98% 59.17%, 4.94% 56.27%, 1.02% 47.28%, 4.48% 30.57%, 11.81% 14.8%, 26.4% 4.12%, 47.08% 2.29%)';

  const fade = useSpring({
      config: config.molasses,
      zIndex: isToggled ? 100 : 'revert',
      clipPath: isToggled ?  brainClipPath : props.clipPath || 'unset',
      height: isToggled ? '43vh' : props.height || '10vh',
      width: isToggled ? '53vh' : props.width || '13vh',
      position: isToggled ? 'absolute' : 'relative',
      backgroundSize: isToggled ? 'cover' : 'contain',
      backgroundImage: props.backgroundImage ? props.backgroundImage : 'none',
      backgroundColor: props.backgroundImage ? 'none' : 'tomato',
      opacity: isToggled ? '1' : '0.5'
    });
    return (
        <>
        <animated.button className={isToggled? "item toggled" : "item arrowBg"} style={fade} onClick={handleClick}>
            {props.name}
        </animated.button>
        </>
      );
    }
    
    export default SongButton;