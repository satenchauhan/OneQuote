import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {color} from '../../../theme';
import {Icon} from '../../icons';
import {HorizontalLine} from '../../lines';
import {CustomText} from '../../text';
import {itemIcons} from '../item-icons';
import {
  CARDCONTAINER,
  TOPSTYLE,
  TEXT,
  MIDDLE,
  BUSINESS_TEXT,
  QUOTE_NO_TEXT,
  AMOUNT_TEXT,
  STYLE,
  FOOTER,
  ICONS,
  ITEM_STYLE,
} from './styles';

export const QuoteCardView = ({item}) => {
  return (
    <View style={CARDCONTAINER}>
      <TouchableOpacity style={{}} onPress={() => console.log(item)}>
        <View style={[TOPSTYLE, {backgroundColor: item.status[1]}]}>
          <CustomText style={TEXT}>{item.status[0]}</CustomText>
          <CustomText
            style={
              TEXT
            }>{`${item.created_on[0]}, ${item.created_on[1]}, ${item.created_on[3]}`}</CustomText>
        </View>
        <View style={MIDDLE}>
          <View style={ITEM_STYLE}>
            {ICONS[0]}
            <CustomText style={BUSINESS_TEXT}>{item.business}</CustomText>
          </View>
          <View style={[ITEM_STYLE, {marginVertical: 5}]}>
            {ICONS[1]}
            <CustomText style={QUOTE_NO_TEXT}>{item.quote_no}</CustomText>
          </View>
          <View style={ITEM_STYLE}>
            {ICONS[2]}
            <CustomText style={AMOUNT_TEXT}>{item.amount}.00</CustomText>
          </View>
        </View>
      </TouchableOpacity>
      <View style={{paddingHorizontal: 5}}>
        <HorizontalLine style={{margin: 0}} />
      </View>
      <View style={FOOTER}>
        {itemIcons.map(({icon, onPress}) => (
          <TouchableOpacity onPress={onPress}>
            <Icon
              type={icon.type.length > 1 ? icon.type[1] : icon.type[0]}
              name={icon.name.length > 1 ? icon.name[1] : icon.name[0]}
              size={icon.size.length > 1 ? icon.size[1] : icon.size[0]}
              color={icon.color}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
