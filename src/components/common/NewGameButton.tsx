import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndo } from '@fortawesome/free-solid-svg-icons';

const NewGameButtonWrapper = styled.div`
  cursor: pointer;
  font-size: 120%;
`

interface NewGameButtonProps {
  onClick: Function
}

const NewGameButton: React.FC<NewGameButtonProps> = ({onClick}) => (
  <NewGameButtonWrapper>
    <FontAwesomeIcon icon={faUndo} onClick={() => onClick()} />
  </NewGameButtonWrapper>
)

export default NewGameButton;
