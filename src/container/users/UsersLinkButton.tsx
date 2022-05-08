import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ADD_USERS, PHOTO, TEXT} from './styles';
import {CustomImage, CustomText} from '../../components';
import {VECTOR} from '../../assets';

export const UsersLinkButton = () => {
  return (
    <View>
      <TouchableOpacity style={ADD_USERS} onPress={() => console.log('user')}>
        <CustomImage source={VECTOR.base} style={PHOTO} />
      </TouchableOpacity>
      <CustomText style={TEXT}>{'Saten'}</CustomText>
    </View>
  );
};
