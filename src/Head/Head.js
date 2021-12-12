import './Head.css';
import React from 'react';
import SongButton from '../SongButton/SongButton';
import ReactSpring, {useSpring, animated, config} from 'react-spring';
import styled from "styled-components";
import audio from '../mp3s/Everything-Sample.mp3';
import { useIdleTimer } from 'react-idle-timer'


function Head() {
  // const { useState } = React;
  // const [isHeadToggled, setIsHeadToggled] = useState(false);
  // function handleClick() {
  //     setIsHeadToggled(!isHeadToggled);  
  // }

    const numbers = [
      {
        id:'isyimd', 
        clipPath: 'polygon(19.54% 7.01%, 28.91% 6.67%, 37.5% 6.87%, 46.84% 8.32%, 55.2% 12.84%, 63.33% 20.87%, 61.57% 34.65%, 56.18% 50.65%, 51.05% 66.37%, 44.63% 83.77%, 38.23% 101.23%, 31.57% 97.93%, 24.39% 96.72%, 16.65% 91.87%, 8.22% 85.75%, 5.19% 69.82%, 5.82% 56.70%, 7.94% 42.33%, 9.88% 28.62%, 14.13% 17.45%)',
        height: '31%',
        width: '40%',
        top: '28%',
        left: '0%',
        name: 'I See You in My Dreams',
        audioClip: new Audio('/ISYIMD-Sample.mp3')
      },
      {
        id:'moy', 
        clipPath: 'polygon(27.23% 14.77%, 29.53% 2.51%, 38.15% 7.82%, 46.38% 10.24%, 54.12% 13.77%, 63.79% 19.63%, 60.91% 33.41%, 56.15% 47.22%, 51.01% 61.74%, 45.67% 71.6%, 38.69% 82.02%, 32.15% 90.13%, 27.69% 81.42%, 21.54% 75.37%, 13.62% 73.58%, 4.65% 72.01%, 10.17% 57.9%, 15.55% 46.7%, 19.2% 35.91%, 23.45% 25.21%)',
        height: '42%',
        width: '43%',
        top: '32%',
        left: '14%',
        name: 'Memories of You',
        audioClip: new Audio('/MemoriesOfYou-Sample.mp3')        
      },
      {
        id:'everything', 
        clipPath: 'polygon(36.3% 11.27%, 25.07% 11.8%, 18.18% 22.97%, 10.69% 34.4%, 3.65% 45.92%, 8.04% 66.56%, 19.34% 79.97%, 31.66% 87.71%, 44.91% 91.48%, 56.57% 93.59%, 66.58% 97.81%, 77.96% 99.75%, 81.25% 81.19%, 83.87% 62.71%, 86.33% 46.4%, 89.58% 28.39%, 81.31% 24.97%, 70.6% 21.22%, 60.23% 18.11%, 49.17% 13.87%)',
        height: '38%',
        width: '41%',
        top: '56%',
        left: '27%',
        name: 'Everything',
        audioClip: new Audio('/Everything-Sample.mp3')
      },
      {
        id:'brightside', 
        clipPath: 'polygon(42.02% 23.52%, 31.47% 18.84%, 28.82% 32.99%, 24.67% 47.49%, 20.57% 61.35%, 14.47% 77.54%, 27.68% 77.64%, 40.99% 78.73%, 53.28% 82.83%, 66.1% 86.94%, 80.53% 91.10%, 93.79% 95.22%, 95.43% 79.96%, 96.39% 68.4%, 97.52% 57.41%, 98.86% 46.71%, 86.7% 42.71%, 75.82% 37.59%, 63.51% 32.17%, 52.37% 27.18%)',
        height: '32%',
        width: '32%',
        top: '34%',
        left: '33%',
        name: 'Bright Side',
        audioClip: new Audio('/BrightSide-Sample.mp3')
      },     
      {
        id:'muse', 
        clipPath: 'polygon(30.63% -2.42%, 30.08% 7.68%, 28.89% 20.17%, 27.6% 32.18%, 26.59% 42.54%, 24.21% 53.11%, 21.16% 66.33%, 31.06% 66.98%, 42.81% 67.25%, 54.75% 67.65%, 66.55% 67.98%, 78.24% 68.27%, 90.39% 68.11%, 87.75% 58.35%, 81.45% 47.11%, 73.99% 36.1%, 66.94% 26.43%, 58.53% 18.47%, 49.6% 10.93%, 40.61% 3.73%)',
        height: '30%',
        width: '28%',
        top: '9%',
        left: '61%',
        name: 'Muse',
        audioClip: new Audio('/Muse-Sample.mp3')
      }, 
      {
        id:'pcbh', 
        clipPath: 'polygon(53.69% 33.6%, 45.74% 44.26%, 38.01% 54.15%, 31.19% 64.46%, 23.67% 76.52%, 16.56% 88.88%, 29.9% 89.17%, 40.65% 90.18%, 50.76% 90.65%, 61.23% 93.39%, 73.09% 95.21%, 84.19% 100.7%, 85.27% 86.31%, 85.67% 69.54%, 85.70% 54.74%, 85.03% 40.01%, 84.41% 25.56%, 82.69% 11.86%, 71.23% 18.69%, 62.08% 26.22%)',
        height: '26%',
        width: '25%',
        top: '5%',
        left: '4%',
        name: 'Please Come Back Home',
        audioClip: new Audio('/PCBH-Sample.mp3')
      },
      {
        id:'ata', 
        clipPath: 'polygon(14.42% 8.82%, 26.42% 9.35%, 39.28% 9.56%, 53.57% 9.69%, 66.34% 9.85%, 78.57% 11.11%, 84.23% 29.21%, 88.78% 51.64%, 92.45% 74.39%, 94.04% 98.85%, 82.34% 96.86%, 70.71% 96.46%, 58.26% 94.17%, 46.73% 92.22%, 34.07% 88.8%, 22.13% 85.69%, 10.5% 81.28%, -0.54% 75.45%, 6.23% 52.58%, 10.34% 30.59%)',
        height: '22%',
        width: '32%',
        top: '29%',
        left: '62%',
        name: 'Above the Atmosphere',
        audioClip: new Audio('/ATA-Sample.mp3')
      },
      {
        id:'highwaysigns', 
        clipPath: 'polygon(37.12% 12.65%, 47.13% 17%, 57.31% 23.33%, 69.6% 30.35%, 80.36% 38.93%, 90.58% 44.78%, 84.9% 56.75%, 78.76% 66.18%, 69.75% 78.21%, 61.99% 91.96%, 50.29% 89.97%, 40.66% 87.28%, 32.21% 85.75%, 22.69% 83.04%, 16.05% 78.85%, 18.12% 64.26%, 21.19% 50.68%, 22.83% 37.2%, 25.6% 24.27%, 28.37% 9.16%)',
        height: '40%',
        width: '35%',
        top: '63%',
        left: '55%',
        name: 'Highway Signs',
        audioClip: new Audio('/HighwaySigns-Sample.mp3')
      },
      {
        id:'righton', 
        clipPath: 'polygon(1.22% 11.41%, 19.6% 7.94%, 39.89% 4.46%, 59.53% 1.7%, 78.36% -0.11%, 84.24% 12.42%, 92.16% 27.85%, 98.22% 43.78%, 101.56% 58.32%, 100.88% 72.53%, 98.88% 86.42%, 95.85% 100.64%, 67.71% 94.36%, 44.91% 89.6%, 25.9% 85.28%, 4.06% 80.84%, 4.9% 68.92%, 5.9% 54.17%, 5.7% 39.75%, 4.16% 25.45%)',
        height: '35%',
        width: '16%',
        top: '3%',
        left: '26%',
        name: 'Right On',
        audioClip: new Audio('/RightOn-Sample.mp3')
      },
      {
        id:'imready', 
        clipPath: 'polygon(23.55% 4.57%, 33.7% 8.71%, 44.15% 14.38%, 55.73% 20.44%, 66.97% 26.52%, 77.99% 33.11%, 89.45% 39.96%, 87.38% 53.78%, 83.4% 68.3%, 78.56% 82.53%, 72.59% 95.14%, 62.04% 93.41%, 51.23% 89.79%, 39.07% 83.75%, 24.64% 77.96%, 11.16% 72.74%, 13.68% 50.98%, 14.89% 33.23%, 14.69% 16.24%, 12.93% -1.39%)',
        height: '28%',
        width: '28%',
        top: '18%',
        left: '40%',
        name: "I'm Ready",
        audioClip: new Audio('/ImReady-Sample.mp3')
      },
      {
        id:'lazyriver', 
        clipPath: 'polygon(17.71% 14.26%, 35.37% 15.08%, 53.32% 18.52%, 67.42% 21.38%, 79.5% 25.32%, 92.18% 29.71%, 100.31% 37.67%, 99.07% 55.78%, 97.59% 68.31%, 95.25% 84.75%, 90.95% 100.68%, 78.74% 95.55%, 66.27% 88.66%, 51.59% 79.38%, 37.17% 72.46%, 22.85% 65.09%, 10.35% 56.44%, 6.55% 41.97%, 3.84% 27.17%, 1.25% 15.92%)',
        height: '29%',
        width: '28%',
        top: '-2%',
        left: '40%',
        name: 'Lazy River',
        audioClip: new Audio('/LazyRiver-Sample.mp3')
      },
      {
        id:'procrastinator', 
        clipPath: 'polygon(8.79% 16.1%, 22.91% 18.48%, 38.61% 21.33%, 54.22% 23.32%, 70.46% 25.19%, 88.27% 26.45%, 88.81% 37.42%, 87.53% 50.22%, 85.71% 60.97%, 82.91% 73.02%, 79.24% 83.15%, 74.1% 92.28%, 65.86% 88.02%, 54.89% 81.81%, 42.22% 73.75%, 30.28% 66.92%, 17.28% 59.87%, 4.79% 54.97%, 5.75% 41.9%, 6.96% 28.1%)',
        height: '39%',
        width: '34%',
        top: '43%',
        left: '63%',
        name: 'Procrastinator',
        audioClip: new Audio('/Procrastinator-Sample.mp3')
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
    width={number.width}
    audioClip={number.audioClip}>
    </SongButton>
    );

    const handleOnIdle = event => {
      console.log('user is idle', event)
      console.log('last active', getLastActiveTime())
    }
  
    const handleOnActive = event => {
      console.log('user is active', event)
      console.log('time remaining', getRemainingTime())
    }
  
    const handleOnAction = event => {
      console.log('user did something', event)
    }
  
    const { getRemainingTime, getLastActiveTime } = useIdleTimer({
      timeout: 1000 * 10,
      onIdle: handleOnIdle,
      onActive: handleOnActive,
      onAction: handleOnAction,
      debounce: 500
    })

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