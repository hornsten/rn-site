import React from 'react';
import ReactSpring, {useSpring, useTransition,animated, config} from 'react-spring';
import './SongButton.css';
import styled from "styled-components";

function SongButton(props) {
    const { useState, useEffect } = React;
  const [isExpanded, setisExpanded] = useState(false);
  function handleClick(e) {
      //console.log("do nothing")
      
      setisExpanded(!isExpanded);
      handleAudio();
  }

  function handleAudio() {
    const start = () => {
      props.audioClip.play()
    }
    const stop = () => {
      props.audioClip.pause();
      props.audioClip.currentTime = 0;
    }
    isExpanded ? stop() : start();
  }

  const brainClipPath = 'polygon(68.22% 6.37%, 81.8% 18.75%, 89.5% 32.59%, 93.66% 46.79%, 93.22% 62.53%, 90.97% 73.8%, 85.3% 87.35%, 76.62% 99.69%, 62.72% 97.31%, 45.48% 93.27%, 31.89% 85.2%, 27.64% 71.38%, 19.53% 62.11%, 6.48% 59.84%, 1.24% 50.07%, 4.09% 36.21%, 11.41% 19.4%, 23.01% 7.17%, 38.52% 1.89%, 54.88% 2.04%)';

  const fade = useSpring({
      config: config.slow,
      immediate: isExpanded ? key => key === 'zIndex' : key => key === '',
      zIndex: isExpanded ? '12' : '1',
      clipPath: isExpanded ?  brainClipPath : props.clipPath,
      height: isExpanded ? '100%' : props.height,
      width: isExpanded ? '100%' : props.width,
      position: isExpanded ? 'relative' : 'absolute',
      top: isExpanded ? '0%' : props.top,
      left: isExpanded ? '0%' : props.left,
      color: isExpanded ? '#fff' : 'transparent'

    });
    return (
        <>
        <animated.button id={props.id} className={isExpanded? "item toggled" : "item"} style={fade} onClick={handleClick}>
            {props.name}
        </animated.button>
        </>
      );
    }
    
    export default SongButton;