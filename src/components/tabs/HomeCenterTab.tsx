import React, {useContext} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {BOLD, NORMAL} from '../../utils';
import {styles, TABBORDER} from './styles';
import {GlobalContext} from '../../context/Provider';

export const HomeCenterTab = ({item}) => {
  const {id, icon, name} = item || {};
  const {tabKey, setTabKey}: any = useContext(GlobalContext);
  const onBtnPress = val => {
    setTabKey(val);
  };

  return (
    <TouchableOpacity style={styles.btn} onPress={() => onBtnPress(id)}>
      <Text style={[styles.label, id == tabKey ? BOLD : NORMAL]}>{name}</Text>
      <View
        style={
          id == tabKey ? [TABBORDER, {borderBottomColor: icon.border}] : {}
        }></View>
    </TouchableOpacity>
  );
};
