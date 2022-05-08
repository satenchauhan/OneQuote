import {StyleSheet, View} from 'react-native';
import React from 'react';

export const HorizontalLine = ({style}) => {
  return <View style={[styles.hrLine, style]} />;
};

const styles = StyleSheet.create({
  hrLine: {
    width: '100%',
    alignSelf: 'center',
    margin: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#b2bec3',
  },
});
