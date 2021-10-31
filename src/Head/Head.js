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
        id:'isyimd', 
        clipPath: 'polygon(20.71% 6.02%, 30.07% 4.7%, 39.24% 4.9%, 48.01% 7.33%, 55.2% 10.86%, 62.16% 18.9%, 59.82% 32.68%, 55.6% 48.68%, 50.47% 65.38%, 44.04% 81.8%, 37.06% 100.24%, 32.15% 95.96%, 24.97% 96.72%, 16.65% 92.86%, 7.64% 83.78%, 5.19% 69.82%, 5.82% 55.71%, 7.94% 42.33%, 11.05% 28.62%, 15.3% 16.47%)',
        height: '31%',
        width: '40%',
        top: '28%',
        left: '0%',
        name: 'I See You in My Dreams'
      },
      {
        id:'moy', 
        clipPath: 'polygon(20.71% 6.02%, 30.07% 4.7%, 39.24% 4.9%, 48.01% 7.33%, 55.2% 10.86%, 62.16% 18.9%, 59.82% 32.68%, 55.6% 48.68%, 50.47% 65.38%, 44.04% 81.8%, 37.06% 100.24%, 32.15% 95.96%, 24.97% 96.72%, 16.65% 92.86%, 7.64% 83.78%, 5.19% 69.82%, 5.82% 55.71%, 7.94% 42.33%, 11.05% 28.62%, 15.3% 16.47%)',
        height: '39%',
        width: '44%',
        top: '31%',
        left: '14%',
        name: 'Memories of You'
      },
      {
        id:'muse', 
        clipPath: 'polygon(23.76% 1.52%, 20.51% 18.84%, 19.32% 31.08%, 18.10% 43.66%, 16.19% 63.26%, 13.74% 83.28%, 13.07% 93.89%, 32.23% 98.82%, 48.9% 99.09%, 66.83% 99.38%, 87.1% 99.71%, 104.75% 100%, 98.35% 89.53%, 91.28% 77.97%, 82.91% 66.98%, 74.76% 56.28%, 64.78% 45.58%, 54.64% 34.72%, 45.98% 26.43%, 37.77% 18.56%)',
        height: '22%',
        width: '21%',
        top: '8%',
        left: '65%',
        name: 'Muse'
      },
      {
        id:'isyimd2', 
        clipPath: 'polygon(11.5% 5.15%, 49.06% 5.69%, 62.61% 5.89%, 71.81% 6.02%, 83.1% 6.18%, 86.56% 25.8%, 89.32% 41.45%, 91.68% 54.81%, 94.58% 71.27%, 98.38% 92.78%, 89.64% 90.96%, 80.21% 89%, 69.22% 86.71%, 59.88% 84.76%, 50.14% 82.73%, 41.12% 80.85%, 31.68% 78.88%, -0.54% 72.17%, 4.77% 42.62%, 8.15% 23.8%)',
        height: '22%',
        width: '32%',
        top: '31%',
        left: '62%',
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
    left={number.left}
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