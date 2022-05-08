import React from 'react';
import {View} from 'react-native';
import {
  DonutChart,
  HorizontalLine,
  ItemStatus,
  DateRangeItem,
} from '../../components';
import {color} from '../../theme/color';
import {CHART_CONTAINER, CIRCLE_CONTAINER, LINE, RIGHT_SECTION} from './styles';

export const QuoteChartView = () => {
  const totalAmount = 1250;
  const approveAmount = 700;
  const percentage = (approveAmount / totalAmount) * 100;
  const approve = 'Approved';
  const unapprove = 'Unapproved';

  return (
    <View style={CHART_CONTAINER}>
      <View style={CIRCLE_CONTAINER}>
        <DonutChart
          approveAmount={approveAmount}
          percentage={percentage}
          quoteColor={color.quote}
        />
        <View style={RIGHT_SECTION}>
          <DateRangeItem />
          <ItemStatus approve={approve} unapprove={unapprove} />
        </View>
      </View>
      <HorizontalLine style={{}} />
    </View>
  );
};
