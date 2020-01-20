import React from 'react';
import styled from 'styled-components';
import buttonUrl from '../../assets/btn-white.svg';
import buttonPressedUrl from '../../assets/btn-prssd-white.svg';

const Button = styled.img`
  cursor: pointer;
`

interface TheButtonProps {
  onClick: Function
}

const TheButton: React.FC<TheButtonProps> = ({onClick}) => {
  const [isPressed, setIsPressed] = React.useState<boolean>(false);

  return (
    <Button 
      src={isPressed ? buttonPressedUrl : buttonUrl} 
      onClick={() => onClick()}
      onMouseDown={() => setIsPressed(true)} 
      onMouseUp={() => setIsPressed(false)}
      width="100px;"
    />
  )
}

export default TheButton;
