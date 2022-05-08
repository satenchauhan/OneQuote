import React from 'react';
import {StyleSheet, ImageStyle, TextStyle, ViewStyle} from 'react-native';
import {color} from '../../theme/color';

export const PHOTO: ImageStyle = {
  width: '100%',
  height: '100%',
  resizeMode: 'cover',
};

export const TITLE: TextStyle = {
  marginBottom: 10,
  color: color.dark,
};
export const MAIN: ViewStyle = {
  flex: 1,
  paddingHorizontal: 10,
  marginTop: 20,
  top: 20,
};

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  imgCircle: {
    width: 34,
    height: 34,
    borderRadius: 100,
    overflow: 'hidden',
    marginRight: 30,
  },
  heading: {
    marginBottom: 10,
    fontSize: 24,
    lineHeight: 30,
  },
  flatStyle: {
    flex: 1,
    flexDirection: 'row',
  },
});
