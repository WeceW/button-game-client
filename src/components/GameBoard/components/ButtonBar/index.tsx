import React from 'react';
import styled from 'styled-components';
import TheButton from '../../../common/TheButton';

const ButtonBarWrapper = styled.div`
  padding: 10px;
  text-align: center;
  color: white;
`

interface ButtonBarProps {
  onButtonPress: Function
  onRestart: Function
  gameover: boolean
}

const ButtonBar: React.FC<ButtonBarProps> = ({onButtonPress, onRestart, gameover}) => (
  <ButtonBarWrapper>
    <TheButton 
      onClick={gameover ? onRestart : onButtonPress} 
    />
  </ButtonBarWrapper>
)

export default ButtonBar;
