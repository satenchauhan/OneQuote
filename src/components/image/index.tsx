import {StyleSheet, Image} from 'react-native';
import React from 'react';

export const CustomImage = props => {
  const {source, style} = props || {};
  return <Image style={[style]} source={source} />;
};
