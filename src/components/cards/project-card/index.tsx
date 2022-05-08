import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {VECTOR} from '../../../assets';
import {Icon} from '../../icons';
import {HorizontalLine} from '../../lines';
import {CustomText} from '../../text';
import {CustomTitle} from '../../title';
import {itemIcons} from '../item-icons';
import {CARDCONTAINER, CARDIMAGE, FOOTER, TEXT} from './styles';

export const ProjectCardView = ({item}) => {
  return (
    <View style={CARDCONTAINER}>
      <TouchableOpacity style={{}} onPress={() => console.log(item)}>
        <Image source={VECTOR.house} style={CARDIMAGE} />
        <View style={{marginTop: 3, padding: 5}}>
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
        {itemIcons.map(({icon, onPress}) => (
          <TouchableOpacity onPress={onPress}>
            <Icon
              type={icon.type[0]}
              name={icon.name[0]}
              size={icon.size[0]}
              color={icon.color}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
