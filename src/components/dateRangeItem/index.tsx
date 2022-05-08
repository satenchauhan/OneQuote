import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Icon} from '../icons';
import {color} from '../../theme';
import {styles} from './styles';
import {LeftArrowButton} from './LeftArrowButton';
import {RightArrowButton} from './RightArrowButton';
import {CaratDownButton} from './CaratDownButton';
import {ROW_CENTER} from '../../utils';

export const DateRangeItem = () => {
  return (
    <View style={ROW_CENTER}>
      <LeftArrowButton />
      <Text style={styles.dateRange}>Mar 6 - Mar 5 </Text>
      <RightArrowButton />
      <CaratDownButton />
    </View>
  );
};
