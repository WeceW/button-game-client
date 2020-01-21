import React from 'react';
import styled from 'styled-components';

const TooltipWrapper = styled.div`
  position: absolute;
  left: 30px;
  top: 0px;
  border-radius: 10px;
  background-color: rgba(255,255,255,0.9);
  color: black;
  font-size: 70%;
  white-space: nowrap;
  padding: 5px;
  cursor: default;
`

const Tooltip: React.FC<{text: string}> = ({text}) => (
  <TooltipWrapper>
    {text}
  </TooltipWrapper>
)

export default Tooltip;
