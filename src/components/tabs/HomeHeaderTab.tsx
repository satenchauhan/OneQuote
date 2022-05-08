import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icon} from '..';
import {styles, TABS, HEADER_TABS, HEAEDR_TAB_NAME} from './styles';

export const HomeHeaderTab = ({item}) => {
  const {icon, name, onPress} = item || {};
  return (
    <TouchableOpacity style={TABS} onPress={onPress}>
      <View style={HEADER_TABS}>
        <Icon
          type={icon.type}
          name={icon.name}
          size={icon.size}
          color={icon.color}
        />
      </View>
      <Text style={HEAEDR_TAB_NAME}>{name}</Text>
    </TouchableOpacity>
  );
};
