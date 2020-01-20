import React from 'react';
import styled from 'styled-components';
import InfoPopup from '../../../common/InfoPopup';
import NewGameButton from '../../../common/NewGameButton';

const TopBarWrapper = styled.div<{reward: number|null, gameover: boolean}>`
  display: flex;
  justify-content: space-between;
  padding: 10px;

  .score {
    color: ${props => 
      props.reward 
        ? props.theme.colors.winning 
        : props.gameover 
          ? props.theme.colors.gameover 
          : props.theme.colors.primary};
    font-size: 180%;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: ${props => props.gameover ? "line-through" : "none"};
  }
`

const SecondaryBar = styled.div`
  text-align: center;
`

interface TopBarProps {
  score: number
  reward: number|null
  nextReward: number|null
  gameover: boolean
  handleRestart: Function
}

const TopBar: React.FC<TopBarProps> = ({score, reward, nextReward, gameover, handleRestart}) => (
  <>
    <TopBarWrapper reward={reward} gameover={gameover}>
      <NewGameButton onClick={handleRestart} />
      <div className="score">Score {score}</div>
      <InfoPopup />
    </TopBarWrapper>

    <SecondaryBar>
      {nextReward && !gameover ?
        <p>Next reward after {nextReward} pushes...</p>
        : gameover ? 
          <p>Start a new game?</p> 
          :
          <p>Welcome! Start/Continue the game:</p>
      }
    </SecondaryBar>
  </>
)

export default TopBar;
