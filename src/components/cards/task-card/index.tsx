import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {VECTOR} from '../../../assets';
import {HorizontalLine} from '../../lines';
import {CustomText} from '../../text';
import {CustomTitle} from '../../title';
import {
  BACKGROUND,
  CARDCONTAINER,
  CARDIMAGE,
  FOOTER,
  STATUS,
  TASK_TEXT,
  TEXT,
} from './styles';

export const MyTaskCardView = ({item}) => {
  return (
    <View style={CARDCONTAINER}>
      <TouchableOpacity style={{}} onPress={() => console.log(item)}>
        <Image source={VECTOR.thumb} style={CARDIMAGE} />
        <View style={{marginTop: 0, padding: 5}}>
          <CustomTitle style={{fontSize: 14}}>
            {'Project Name - Goes here'}
          </CustomTitle>
          <CustomText style={TEXT}>
            {'123 rimington St, Ottawa, O...'}
          </CustomText>
        </View>
      </TouchableOpacity>
      <View style={{paddingHorizontal: 5}}>
        <HorizontalLine style={{margin: 0}} />
      </View>
      <View style={FOOTER}>
        <CustomText style={TASK_TEXT}>5 / 20 Tasks Completed</CustomText>
        <View style={BACKGROUND}>
          <View style={[STATUS, {width: '20%'}]}></View>
        </View>
      </View>
    </View>
  );
};
