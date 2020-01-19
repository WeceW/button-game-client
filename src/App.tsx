import React, { useState } from 'react';
import './App.css';

import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const ADD_COUNTER_VALUE = gql`
  mutation {
    addCounter
  }
`

const INITIAL_POINTS = 20;

const App: React.FC = () => {
  const p = localStorage.getItem('POINTS');
  const [ points, setPoints ] = useState<number>(p ? parseInt(p) : INITIAL_POINTS);
  const [ earnedPoints, setEarnedPoints] = useState<number|null>(null);
  const [ nextWinCount, setNextWinCount ] = useState<number|null>(null);
  const [ gameOver, setGameOver ] = useState<boolean>(points <= 0);


  const [ addCounter, { error, data } ] = useMutation(
    ADD_COUNTER_VALUE,
    {
      onCompleted({ addCounter }) {
        setNextWinCount(10-(addCounter % 10));
        if (addCounter % 500 === 0) {
          addPoints(250);
        }
        else if (addCounter % 100 === 0) {
          addPoints(40);
        }
        else if (addCounter % 10 === 0) {
          addPoints(5);
        }
        else {
          setEarnedPoints(null);
        }
      }
    }
  );

  const addPoints = (p: number) => {
    const curPoints = points+p;
    setPoints(curPoints);
    localStorage.setItem('POINTS', String(curPoints));
    if (p > 0) {
      setEarnedPoints(p);
    }
  }
  
  const handleButton = () => {
    if (points > 0) {
      addPoints(-1);
      addCounter();
    } else {
      setGameOver(true);
    }
  }

  const handlePlayAgain = () => {
    setPoints(INITIAL_POINTS);
    localStorage.setItem('POINTS', String(INITIAL_POINTS));
    setGameOver(false);
  }

  return (
    <div>
      {error ? <p>Sorry, error. :( {error.message}</p> : null}

      {!gameOver ?
        <button onClick={() => handleButton()}>{"Press the button!"}</button>
        : 
        <button onClick={() => handlePlayAgain()}>{"Play again"}</button>
      }
      
      {data && data.addCounter}
      
      <div>Points: {points}</div>
      
      {earnedPoints && 
        <div>You earned {earnedPoints} points!</div>
      }
      
      {nextWinCount && 
        <div>Next win after {nextWinCount} presses.</div>
      }

    </div>
  );
}

export default App;
