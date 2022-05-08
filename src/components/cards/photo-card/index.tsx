import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {PHOTO, PHOTOCONTAINER} from './styles';

export const PhotoCardView = ({item}) => {
  return (
    <View style={PHOTOCONTAINER}>
      <TouchableOpacity style={{}} onPress={() => console.log('item')}>
        <Image source={item} style={PHOTO} />
      </TouchableOpacity>
    </View>
  );
};
