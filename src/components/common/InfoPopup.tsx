import React from 'react';
import styled from 'styled-components';
import ICON from '../../assets/icons';

const InfoPopupWrapper = styled.div`
  position: relative;
  cursor: pointer;
  font-size: 120%;
`

const PopupWindow = styled.div`
  position: absolute;
  width: 300px;
  left: -320px;
  top: -3px;
  border-radius: 10px;
  background-color: rgba(255,255,255,0.9);
  color: black;
  font-size: 70%;
  padding: 20px;
  cursor: default;
`

const InfoPopup: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  const popup = () => (
    <PopupWindow onMouseLeave={() => setOpen(false)}>
      {/* TODO: 
          The following info-list should be imported from somewhere else. 
          It's not supposed to be inside this component, but to come from props instead. 
          Should be done, later...
      */}
      <b>BUTTON GAME IN A NUTSHELL:</b>
      <ul>
        <li><b>Each button push costs one point</b> but also increases the <u>magical secret counter.</u></li>
        <li>Every now and then <b><u>magical secret counter</u> rewards a player with 5, 40 or 250 points</b> (Big rewards are rare!)</li>
        <li>Game tells you in how many pushes next reward is expexted, but be warned: <b>All players around the world deals with the very same <u>magical secret counter</u>.</b></li>
        <li><b>If player's points drops down to zero, the game is over.</b> :(</li>
      </ul>
      <i>Made by Toni Weckroth</i>
    </PopupWindow>
  )

  return (
    <InfoPopupWrapper onMouseEnter={() => setOpen(true)}>
      {ICON.info}
      {open && popup()}
    </InfoPopupWrapper>
  )
}

export default InfoPopup;
