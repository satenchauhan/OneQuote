import React from 'react';
import {Icon} from '../icons';
import {color} from '../../theme';

export const LeftArrowButton = () => {
  return (
    <Icon
      type="ant"
      name="left"
      size={15}
      color={color.dark}
      style={{margin: 5}}
      onPress={() => console.log('clicked')}
    />
  );
};
