import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import ButtonBar from './components/ButtonBar';

const GameBoardWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  width: 400px;
`

const ADD_COUNTER_VALUE = gql`
  mutation {
    addCounter
  }
`

const INITIAL_POINTS = 20;

const GameBoard: React.FC = () => {
  const p = localStorage.getItem('POINTS');
  const [ points, setPoints ] = useState<number>(p ? parseInt(p) : INITIAL_POINTS);
  const [ reward, setReward] = useState<number|null>(null);
  const [ nextRewardCount, setNextRewardCount ] = useState<number|null>(null);
  const [ gameover, setGameover ] = useState<boolean>(points <= 0);

  const [ addCounter, { error, /* data */ } ] = useMutation(
    ADD_COUNTER_VALUE,
    {
      onCompleted({ addCounter }) {
        setNextRewardCount( 10 - (addCounter % 10) );
        if (addCounter % 500 === 0)      addPoints(250);
        else if (addCounter % 100 === 0) addPoints(40);
        else if (addCounter % 10 === 0)  addPoints(5);
        else setReward(null);
      }
    }
  );

  const addPoints = (p: number) => {
    const curPoints = points+p;
    setPoints(curPoints);
    localStorage.setItem('POINTS', String(curPoints));
    if (p > 0) {
      setReward(p);
      setGameover(false);
    } else if (curPoints === 0) {
      setGameover(true);
    }
  }
  
  const handleTheButton = () => {
    if (gameover) {
      handleRestart();
    } else if (points > 0) {
      addPoints(-1);  
      addCounter();
    } else {
      setGameover(true);
    }
  }

  const handleRestart = () => {
    setPoints(INITIAL_POINTS);
    localStorage.setItem('POINTS', String(INITIAL_POINTS));
    setNextRewardCount(null);
    setReward(null);
    setGameover(false);
  }

  return (
    <GameBoardWrapper>
      {error ? <p>Sorry, error. :( {error.message}</p> : null}
      {/* {data && data.addCounter} */}

      <TopBar 
        score={points} 
        reward={reward} 
        nextReward={nextRewardCount} 
        gameover={gameover}
        handleRestart={handleRestart}
      />

      <ButtonBar 
        onButtonPress={handleTheButton} 
        onRestart={handleRestart} 
        gameover={gameover} 
      />

      <BottomBar 
        reward={reward} 
        nextReward={nextRewardCount} 
        gameover={gameover} 
      />

    </GameBoardWrapper>
  )
}

export default GameBoard;
