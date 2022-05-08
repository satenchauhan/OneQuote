import React from 'react';
import {Icon} from '../icons';
import {color} from '../../theme';

export const CaratDownButton = () => {
  return (
    <Icon
      type="ant"
      name="caretdown"
      size={18}
      color={color.dark}
      style={{margin: 5, lineHeight: 14}}
      onPress={() => console.log('clicked')}
    />
  );
};
