import React from 'react';

interface BottomTextProps {
  text: string
  className: string
  icon: JSX.Element
}

const BottomText: React.FC<BottomTextProps> = ({text, className, icon}) => (
  <p className={className}>
    {icon}
    {text}
    {icon}
  </p>
)

export default BottomText;
