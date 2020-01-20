import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const InfoPopupWrapper = styled.div`
  cursor: pointer;
  font-size: 120%;
`

const InfoPopup: React.FC = () => (
  <InfoPopupWrapper>
    <FontAwesomeIcon 
      icon={faInfoCircle} 
      onClick={() => console.log("TODO: Show some info/instructions in a popup.")} 
    />
  </InfoPopupWrapper>
)

export default InfoPopup;
