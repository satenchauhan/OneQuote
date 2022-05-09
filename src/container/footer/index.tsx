import React from 'react';
import {View} from 'react-native';
import {CustomTitle, homeFooterButtonItems, Icon} from '../../components';
import {color} from '../../theme/color';
import {FOOTER_BUTTON, FOOTER_MAIN, TITLE} from './styles';

export const FooterContainer = () => {
  return (
    <View style={FOOTER_MAIN}>
      {homeFooterButtonItems.map(({icon, name, onPress}, x) => (
        <View key={x}>
          <View style={FOOTER_BUTTON}>
            <Icon
              type={icon.type}
              name={icon.name}
              size={25}
              color={icon.color}
              onPress={onPress}
            />
          </View>
          <CustomTitle style={TITLE}>{name}</CustomTitle>
        </View>
      ))}
    </View>
  );
};
