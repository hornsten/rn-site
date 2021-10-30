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
        clipPath: 'polygon(57.73% 36.14%, 88.35% 21.03%, 108.98% 15.1%, 107.44% 40.65%, 106.45% 57.1%, 105.18% 78.16%, 103.85% 100.11%, 88.59% 99.97%, 67.44% 94.89%, 45.99% 89.74%, 9.06% 92.01%, 8.08% 85.94%, 24.19% 75.19%, 28.86% 72.52%, 35.22% 66.99%, 37.5% 63.05%, 36.72% 60.65%, 41.32% 53.57%, 45.66% 43.01%)',
        height: '5vh',
        width: '12vh',
      },
      {
        id:'2', 
        clipPath: 'polygon(17.56% -5.57%, 35.35% -3.55%, 57.75% -1.01%, 73.29% 0.75%, 99.9% 3.77%, 96.13% 13.66%, 89.99% 29.79%, 80.5% 38.16%, 69.77% 47.62%, 59.93% 56.29%, 51.24% 63.95%, 36.08% 77.32%, 31.23% 67.39%, 26.9% 58.52%, 20.4% 45.22%, 14.81% 33.78%, 9.67% 23.28%, 12.58% 12.62%, 14.59% 5.29%)',
        height: '21vh',
        width: '12vh'
      },
      {
        id:'3', 
        clipPath: 'polygon(-9.7% 4.59%, 11.74% 3.69%, 35.69% 2.69%, 58.41% 1.74%, 78.78% 0.89%, 100% 0%, 99.5% 12.28%, 98.79% 29.73%, 98.01% 48.8%, 97.38% 64.21%, 96.54% 84.72%, 63.22% 81.41%, 42.93% 79.39%, 25.16% 77.62%, 11.96% 76.31%, 9.11% 66.86%, 4.27% 50.83%, 0.06% 36.9%, -4.06% 23.26%)',
        height: '18vh',
        width: '8vh'
      },
      {
        id:'4', 
        clipPath: 'polygon(37.54% -16.87%, 57.08% -10.51%, 70.3% -6.2%, 99.74% 3.39%, 93.11% 15.58%, 87.23% 26.39%, 81% 37.85%, 74.4% 49.99%, 68.04% 61.69%, 62.49% 71.89%, 55.3% 61.18%, 47.38% 51.3%, 28.16% 40.98%, 17.01% 37.27%, -0.83% 29.78%, -7.7% 22.48%, -0.52% 16.24%, 6.56% 10.08%, 15.55% 2.26%, 24.51% -5.54%)',
        height: '23vh',
        width: '8vh'
      },
      {
        id:'5', 
        clipPath: 'unset',
        height: '10vh',
        width: '17vh'
      },
      {
        id:'6', 
        clipPath: 'unset',
        height: '8vh',
        width: '17vh'
      },
      {
        id:'7', 
        clipPath: 'unset',
        height: '10vh',
        width: '17vh'
      },
      {
        id:'8', 
        clipPath: 'unset',
        height: '10vh',
        width: '17vh'
      },
      {
        id:'ISYIMD',
        backgroundImage: `url(${isyimd})`,
        clipPath: 'polygon(43.71% 3.55%, 60.89% 5.36%, 78.94% 6.03%, 93.66% 10.84%, 91.16% 24.55%, 82.34% 40.59%, 71.88% 57.1%, 54.94% 74.99%, 38.29% 71.26%, 17.84% 65.67%, 2.41% 55.13%, 5.14% 38.36%, 16px 20.43%, 24.93% 5.25%)',
        height: '13vh',
        width: '17vh'
      },
      {
        id:'MOY', 
        backgroundImage: `url(${moy})`,
        clipPath: 'polygon(69.36% 5.64%, 87.49% 7.75%, 101.38% 10.31%, 95.32% 17.79%, 88.97% 24.29%, 79.51% 30.51%, 67.69% 36.37%, 53.4% 41.64%, 39.52% 36.58%, 12.73% 32.69%, 24.41% 25.54%, 43px 19.56%, 45.1% 12.12%, 52.71% 3.31%)',
        height: '10vh',
        width: '17vh'
      },
      {
        id: 'EV',
        backgroundImage: `url(${everything})`,
        clipPath: 'polygon(38.16% 1.56%, 57.23% 4.94%, 71.82% 7.22%, 85.84% 9.25%, 95.44% 11.42%, 92.33% 27.05%, 86.89% 46.06%, 83.21% 60.76%, 63.5% 59.47%, 42.04% 56.07%, 22.15% 51.68%, 3.71% 43.56%, -5px 23.57%, 7.64% 14.08%, 20.77% 2.12%)',
        height: '8vh',
        width: '17vh'
      }, 
      {
        id:'BRIGHT',
        backgroundImage: `url(${bright})`,
        clipPath: 'polygon(54.27% 24.23%, 76.08% 29.62%, 91.18% 33.65%, 89.96% 44.81%, 89.49% 55.7%, 87.85% 67.46%, 71.36% 63.63%, 47.36% 59.17%, 22.95% 55.02%, 0.12% 54.87%, 8.79% 41.94%, 14.57% 28.40%, 19.89% 15.13%, 36.84% 19.8%)',
        height: '10vh',
        width: '17vh'
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
        <div className="Brain">
          {buttons}
        </div>
    </div>
  );
}

export default Head;