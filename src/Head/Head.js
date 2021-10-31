import './Head.css';
import everything from '../images/Everything.png';
import isyimd from '../images/ISYIMD.jpg';
import moy from '../images/moy.jpg';
import bright from '../images/bright.jpg';
import React from 'react';
import SongButton from '../SongButton/SongButton';
import ReactSpring, {useSpring, animated, config} from 'react-spring';
import styled from "styled-components";

function Head() {
    const numbers = [
      {
        id:'muse', 
        clipPath: 'polygon(23.76% 1.52%, 20.51% 18.84%, 19.32% 31.08%, 18.10% 43.66%, 16.19% 63.26%, 13.74% 83.28%, 13.07% 93.89%, 32.23% 98.82%, 48.9% 99.09%, 66.83% 99.38%, 87.1% 99.71%, 104.75% 100%, 98.35% 89.53%, 91.28% 77.97%, 82.91% 66.98%, 74.76% 56.28%, 64.78% 45.58%, 54.64% 34.72%, 45.98% 26.43%, 37.77% 18.56%)',
        height: '22%',
        width: '21%',
        top: '9%',
        right: '14%',
        name: 'Muse'
      },
      {
        id:'isyimd', 
        clipPath: 'polygon(11.5% 5.15%, 49.06% 5.69%, 62.61% 5.89%, 71.81% 6.02%, 83.1% 6.18%, 86.56% 25.8%, 89.32% 41.45%, 91.68% 54.81%, 94.58% 71.27%, 98.38% 92.78%, 89.64% 90.96%, 80.21% 89%, 69.22% 86.71%, 59.88% 84.76%, 50.14% 82.73%, 41.12% 80.85%, 31.68% 78.88%, -0.54% 72.17%, 4.77% 42.62%, 8.15% 23.8%)',
        height: '22%',
        width: '32%',
        top: '31%',
        right: '6%',
        name: 'I See You in My Dreams'
      }
    ]
    const buttons = numbers.map((number, index) =>
    <SongButton 
    key={number.id}
    clipPath={number.clipPath} 
    name={number.name}
    id={number.id}
    height={number.height}
    top={number.top}
    right={number.right}
    width={number.width}>
    </SongButton>
    );

  return (
    
    <div className="Head">
      <div className="BrainContainer">
        <div className="Brain">
          {buttons}
        </div>
        </div>
    </div>
  );
}

export default Head;