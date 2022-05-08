import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {color} from '../../theme';

export const homeFooterButtonItems = [
  {
    icon: {type: 'fa', name: 'unsorted', size: 25, color: color.dark},
    name: `Customize\nLayout`,
    onPress: () => {
      console.log('Layout');
    },
  },
  {
    icon: {type: 'ant', name: 'exclamationcircle', size: 25, color: color.dark},
    name: 'Learn\nMore',
    onPress: () => {
      console.log('More');
    },
  },
  {
    icon: {
      type: 'material',
      name: 'chat-bubble-outline',
      size: 25,
      color: color.dark,
    },
    name: 'Chat With\nSupport',
    onPress: () => {
      console.log('Chat');
    },
  },
];
