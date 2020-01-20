import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faSkull, faFrog } from '@fortawesome/free-solid-svg-icons'

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
      <p className="winning">
        <FontAwesomeIcon icon={faStar} />
        You won {reward}!
        <FontAwesomeIcon icon={faStar} />
      </p>
      : 
      gameover ? 
        <p className="gameover">
          <FontAwesomeIcon icon={faSkull} />
          Game over
          <FontAwesomeIcon icon={faSkull} />
        </p> 
        : nextReward ?
          <p>
            <FontAwesomeIcon icon={faFrog} />
            No reward this time, sorry.
            <FontAwesomeIcon icon={faFrog} />
          </p>
          :
            <p>&nbsp;</p>
    }
  </BottomBarWrapper>
)

export default BottomBar;
