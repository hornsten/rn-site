import React from 'react';
import ReactSpring, {useSpring, animated, config} from 'react-spring';
import styled from "styled-components";

// Styled component named StyledButton
const StyledButton = styled.button`
  /* background-color: black; */
  font-size: 32px;
  color: white;
  /* clip-path: 'polygon(0 0, 50% 0, 60.00% 100.00%, 0 100%)'; */
`;

function Toggle() {
    const { useState, useEffect } = React;
    const [isToggled, setIsToggled] = useState(false);
    const fade = useSpring({
        config: config.molasses,
        clipPath: isToggled ? 'polygon(0 0, 50% 0, 60.00% 100.00%, 0 100%)' : 'polygon(48% 0, 100% 0, 100% 100%, 25% 100%)',
      });
      
    return (
      
      <div className="Toggle">
          <animated.button  style={fade} onClick={() => setIsToggled(!isToggled)}>
              <img src='https://images.unsplash.com/photo-1455145914126-c357157e2db0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''></img>
            </animated.button>
      </div>
    );
  };

  export default Toggle;