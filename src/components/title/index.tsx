import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {TITLE} from '../../utils';

export const CustomTitle = ({children, style}) => {
  return <Text style={[styles.activeTxt, style]}>{children}</Text>;
};

export const HeaderTitle = ({children, style}) => {
  return <Text style={[styles.activeTxt, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  activeTxt: {
    ...TITLE,
  },
});
