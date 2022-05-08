import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {NORMAL, SIZE_12} from '../../utils';

export const CustomText = ({children, style}) => {
  return <Text style={[styles.Txt, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  Txt: {
    ...NORMAL,
    ...SIZE_12,
    color: '#666666',
  },
});
