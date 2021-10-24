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
  const brainClipPath = 'polygon(46.44% -0.8%, 76.03% 13.96%, 92.56% 41.83%, 93.33% 76.67%, 75.42% 106.08%, 38.13% 95.53%, 28.57% 79.44%, 25.53% 72.58%, 18.03% 68.12%, 13.46% 64.66%, 6.48% 60.7%, 0.55% 49.69%, 2.85% 36.28%, 11.55% 20.56%, 20% 10%)';

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