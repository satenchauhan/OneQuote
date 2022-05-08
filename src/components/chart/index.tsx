import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Svg, {G} from 'react-native-svg';
import {color} from '../../theme/color';
import {NegativePart} from './negative-part';
import {PosisitvePart} from './posisitve-part';
import {TOTAL} from './styles';

export const DonutChart = ({approveAmount, percentage, quoteColor}) => {
  const radius = 40;
  const strokeWidth = 10;
  const halfCircle = radius + strokeWidth;

  return (
    <View style={{flex: 1}}>
      <Svg
        width={150}
        height={150}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
        <G rotation={'-90'} origin={` ${halfCircle}, ${halfCircle}`}>
          <NegativePart color={color.negatv} />
          <PosisitvePart color={quoteColor} percentage={percentage} />
        </G>
      </Svg>
      <Text style={[StyleSheet.absoluteFillObject, TOTAL]}>
        TOTAL:{`\n $${approveAmount}`}{' '}
      </Text>
    </View>
  );
};
