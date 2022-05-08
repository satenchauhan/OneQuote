import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {ROW_SPACE} from '../../utils';
import {Icon} from '../icons';
import {ADD_BUTTON, CAMERA_BTN, FLOAT_BUTTON} from './styles';

export const FloatButton = ({add, addDoc}) => {
  return (
    <View style={FLOAT_BUTTON}>
      <TouchableOpacity style={ADD_BUTTON} onPress={add}>
        <Icon type="ant" name="plus" color={'#10B0B0'} size={25} />
      </TouchableOpacity>
      <TouchableOpacity style={CAMERA_BTN} onPress={addDoc}>
        <Icon type="fa" name="camera" color={'#FFFFFF'} size={35} />
      </TouchableOpacity>
    </View>
  );
};
