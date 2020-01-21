import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUndo, 
  faInfoCircle, 
  faStar, 
  faSkull, 
  faFrog  } from '@fortawesome/free-solid-svg-icons';

const ICON = {
  info:     <FontAwesomeIcon icon={faInfoCircle} />,
  newgame:  <FontAwesomeIcon icon={faUndo} />,
  gameover: <FontAwesomeIcon icon={faSkull} />,
  reward:   <FontAwesomeIcon icon={faStar} />,
  noreward: <FontAwesomeIcon icon={faFrog} />,
}

export default ICON;
