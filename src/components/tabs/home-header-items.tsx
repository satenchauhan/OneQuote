import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {color} from '../../theme';

export const homeHeaderTabItems = [
  {
    icon: {type: 'ant', name: 'plus', color: color.dark, size: 25},
    name: 'Project',
    onPress: () => {
      console.log('Project');
    },
  },
  {
    icon: {type: 'feather', name: 'users', color: color.dark, size: 25},
    name: 'Users',
    onPress: () => {
      console.log('Users');
    },
  },
  {
    icon: {type: 'material', name: 'calculate', color: color.dark, size: 25},
    name: 'Calculate',
    onPress: () => {
      console.log('Calculate');
    },
  },
  {
    icon: {type: 'material', name: 'photo-filter', color: color.dark, size: 25},
    name: 'Quote',
    onPress: () => {
      console.log('Quote');
    },
  },
];
