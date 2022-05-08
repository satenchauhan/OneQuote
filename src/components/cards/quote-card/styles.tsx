import React from 'react';
import {TextStyle, ImageStyle, ViewStyle} from 'react-native';
import {color, size, typography} from '../../../theme';
import {BOLD, ROW_SPACE, SIZE_14} from '../../../utils';
import {Icon} from '../../icons';

const ORG = 'construction';

export const CARDIMAGE: ImageStyle = {
  width: 199,
  height: 92,
  resizeMode: 'cover',
};
export const PHOTO: ImageStyle = {
  width: 90,
  height: '100%',
  resizeMode: 'cover',
};

export const TEXT: TextStyle = {
  ...BOLD,
  ...SIZE_14,
  color: color.white,
  textTransform: 'capitalize',
  marginTop: 3,
};
export const BUSINESS_TEXT: TextStyle = {
  ...BOLD,
  ...SIZE_14,
  textTransform: 'capitalize',
  marginTop: 5,
  marginLeft: 5,
};

export const QUOTE_NO_TEXT: TextStyle = {
  ...BOLD,
  ...SIZE_14,
  textTransform: 'capitalize',
  marginTop: 5,
  marginLeft: 5,
  lineHeight: 16,
};

export const AMOUNT_TEXT: TextStyle = {
  ...BOLD,
  ...SIZE_14,
  textTransform: 'capitalize',
  marginTop: 5,
  marginLeft: 10,
  lineHeight: 16,
};

export const MIDDLE: ViewStyle = {
  marginTop: 3,
  padding: 5,
};

export const TOPSTYLE: ViewStyle = {
  alignItems: 'center',
  width: '100%',
  height: 46,
};

export const CARDCONTAINER: ViewStyle = {
  flex: 1,
  width: 200,
  height: 185,
  marginRight: 15,
  borderWidth: 1,
  backgroundColor: '#FFFFFF',
  borderColor: 'rgba(0,0,0,0.12)',
  borderRadius: 8,
  overflow: 'hidden',
  shadowColor: '#000000',
  shadowOffset: {width: 0, height: 2},
  shadowOpacity: 0.8,
  shadowRadius: 3,
  elevation: 10,
};

export const ITEM_STYLE: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'flex-start',
};

export const FOOTER: ViewStyle = {
  ...ROW_SPACE,
  padding: 5,
  paddingRight: 5,
};

const marg = {marginLeft: 5};

const D$ = 'dollar';

export const ICONS = [
  <Icon type={'material'} name={'business'} size={25} color={color.icon} />,
  <Icon type={'material'} name={ORG} size={25} color={color.icon} />,
  <Icon type={'fa'} name={D$} size={23} color={color.icon} style={marg} />,
];
