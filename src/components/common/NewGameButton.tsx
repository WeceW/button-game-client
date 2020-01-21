import React from 'react';
import styled from 'styled-components';
import Tooltip from './Tooltip';
import ICON from '../../assets/icons';

const NewGameButtonWrapper = styled.div`
  position: relative;
  cursor: pointer;
  font-size: 120%;
`

interface NewGameButtonProps {
  onClick: Function
}

const NewGameButton: React.FC<NewGameButtonProps> = ({onClick}) => {
  const [showTooltip, setShowTooltip] = React.useState<boolean>(false);

  return (
    <NewGameButtonWrapper
      onClick={() => onClick()} 
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {showTooltip && <Tooltip text="New Game" />}
      {ICON.newgame}
    </NewGameButtonWrapper>
  )
}

export default NewGameButton;
