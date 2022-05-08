import React from 'react';
import {Circle} from 'react-native-svg';

export const NegativePart = ({color}) => {
  return (
    <Circle
      cx="50%"
      cy="50%"
      stroke={color}
      strokeWidth={12}
      r={40}
      fill="transparent"
      strokeOpacity={1}
    />
  );
};
