import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {color} from '../../theme';

export const itemIcons = [
  {
    icon: {
      type: ['material'],
      name: ['star-border'],
      size: [25],
      color: color.icon,
    },
    onPress: () => console.log('cliked start'),
  },
  {
    icon: {
      type: ['fa5', 'ionicon'],
      name: ['camera', 'eye'],
      size: [20, 28],
      color: color.icon,
    },
    onPress: () => console.log('cliked camera'),
  },
  {
    icon: {
      type: ['entypo'],
      name: ['dots-three-horizontal'],
      size: [20],
      color: color.icon,
    },
    onPress: () => console.log('cliked dots'),
  },
];
