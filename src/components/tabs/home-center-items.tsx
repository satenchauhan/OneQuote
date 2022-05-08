import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {color} from '../../theme';

export const homeCenterTabItems = [
  {
    id: 1,
    icon: {
      type: 'ant',
      name: 'plus',
      color: color.dark,
      size: 25,
      border: color.quote,
    },
    name: 'Quotes',
  },
  {
    id: 2,
    icon: {
      type: 'feather',
      name: 'users',
      color: color.dark,
      size: 25,
      border: color.invoice,
    },
    name: 'Invoices',
  },
  {
    id: 3,
    icon: {
      type: 'material',
      name: 'calculate',
      color: color.dark,
      size: 25,
      border: color.project,
    },
    name: 'Projects',
  },
];
