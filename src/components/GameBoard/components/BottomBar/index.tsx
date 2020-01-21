import React from 'react';
import styled from 'styled-components';
import ICON from '../../../../assets/icons';
import BottomText from './components/BottomText';

const BottomBarWrapper = styled.div`
  padding: 10px;
  text-align: center;
  font-size: 120%;

  svg {
    margin: 0 10px;
  }

  .winning, .gameover {
    font-weight: bold;
    text-transform: uppercase;
  }

  .winning {
    color: ${props => props.theme.colors.winning};
  }

  .gameover {
    color: ${props => props.theme.colors.gameover};
  }
`

interface BottomBarProps {
  reward: number|null
  nextReward: number|null
  gameover: boolean
}

const BottomBar: React.FC<BottomBarProps> = ({reward, nextReward, gameover}) => (
  <BottomBarWrapper>
    {reward ? 
      <BottomText 
        text={`You won ${reward}!`} 
        className="winning" 
        icon={ICON.reward} 
      />
      : gameover ? 
        <BottomText 
          text={`Game over`} 
          className="gameover" 
          icon={ICON.gameover} 
        />
        : nextReward ?
          <BottomText 
            text={`No reward this time, sorry.`} 
            className="" 
            icon={ICON.noreward} 
          />
          : <p>&nbsp;</p>
    }
  </BottomBarWrapper>
)

export default BottomBar;
