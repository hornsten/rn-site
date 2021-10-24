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
        id:'1', 
        clipPath: 'polygon(57.73% 36.14%, 88.35% 21.03%, 108.98% 15.1%, 106.67% 104.19%, 75.42% 106.08%, 8.36% 97.89%, 9.06% 92.01%, 8.08% 85.94%, 24.19% 75.19%, 28.86% 72.52%, 35.22% 66.99%, 37.5% 63.05%, 36.72% 60.65%, 41.32% 53.57%, 45.66% 43.01%)',
        height: '16vh',
        width: '10vh',
      },
      {
        id:'2', 
        clipPath: 'unset',
        height: '19vh',
        width: '10vh'
      },
      {
        id:'3', 
        clipPath: 'unset',
        height: '19vh',
        width: '10vh'
      },
      {
        id:'4', 
        clipPath: 'unset',
        height: '10vh',
        width: '10vh'
      },
      {
        id:'5', 
        clipPath: 'unset',
        height: '10vh',
        width: '13vh'
      },
      {
        id:'6', 
        clipPath: 'unset',
        height: '8vh',
        width: '13vh'
      },
      {
        id:'7', 
        clipPath: 'unset',
        height: '10vh',
        width: '13vh'
      },
      {
        id:'8', 
        clipPath: 'unset',
        height: '10vh',
        width: '13vh'
      },
      {
        id:'ISYIMD',
        backgroundImage: `url(${isyimd})`,
        // clipPath: 'polygon(43.71% 3.55%, 60.89% 5.36%, 78.94% 6.03%, 93.66% 10.84%, 91.16% 24.55%, 82.34% 40.59%, 71.88% 57.1%, 54.94% 74.99%, 38.29% 71.26%, 17.84% 65.67%, 2.41% 55.13%, 5.14% 38.36%, 16px 20.43%, 24.93% 5.25%)',
        height: '10vh',
        width: '13vh'
      },
      {
        id:'MOY', 
        backgroundImage: `url(${moy})`,
        // clipPath: 'polygon(69.36% 5.64%, 87.49% 7.75%, 101.38% 10.31%, 95.32% 17.79%, 88.97% 24.29%, 79.51% 30.51%, 67.69% 36.37%, 53.4% 41.64%, 39.52% 36.58%, 12.73% 32.69%, 24.41% 25.54%, 43px 19.56%, 45.1% 12.12%, 52.71% 3.31%)',
        height: '10vh',
        width: '13vh'
      },
      {
        id: 'EV',
        backgroundImage: `url(${everything})`,
        // clipPath: 'polygon(38.16% 1.56%, 57.23% 4.94%, 71.82% 7.22%, 85.84% 9.25%, 95.44% 11.42%, 92.33% 27.05%, 86.89% 46.06%, 83.21% 60.76%, 63.5% 59.47%, 42.04% 56.07%, 22.15% 51.68%, 3.71% 43.56%, -5px 23.57%, 7.64% 14.08%, 20.77% 2.12%)',
        height: '8vh',
        width: '13vh'
      }, 
      {
        id:'BRIGHT',
        backgroundImage: `url(${bright})`,
        // clipPath: 'polygon(54.27% 24.23%, 76.08% 29.62%, 91.18% 33.65%, 89.96% 44.81%, 89.49% 55.7%, 87.85% 67.46%, 71.36% 63.63%, 47.36% 59.17%, 22.95% 55.02%, 0.12% 54.87%, 8.79% 41.94%, 14.57% 28.40%, 19.89% 15.13%, 36.84% 19.8%)',
        height: '10vh',
        width: '13vh'
      },
      
    ]
    const buttons = numbers.map((number, index) =>
    <SongButton 
    key={number.id} 
    clipPath={number.clipPath} 
    name={number.id} 
    backgroundImage={number.backgroundImage} 
    height={number.height}
    width={number.width}>
    </SongButton>
    );

  return (
    
    <div className="Head">
        <div className="Brain">{buttons}</div>
    </div>
  );
}

export default Head;