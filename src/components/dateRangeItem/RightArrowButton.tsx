import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Icon} from '../icons';
import {color} from '../../theme';

export const RightArrowButton = () => {
  return (
    <Icon
      type="ant"
      name="right"
      size={15}
      color={color.dark}
      style={{margin: 5}}
      onPress={() => console.log('clicked')}
    />
  );
};
