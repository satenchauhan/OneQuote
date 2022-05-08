import React from 'react';
import {View} from 'react-native';
import {
  DonutChart,
  HorizontalLine,
  ItemStatus,
  DateRangeItem,
} from '../../components';
import {color} from '../../theme/color';
import {CHART_CONTAINER, CIRCLE_CONTAINER, RIGHT_SECTION} from './styles';

export const ProjectChartView = () => {
  const totalAmount = 1250;
  const approveAmount = 1150;
  const percentage = (approveAmount / totalAmount) * 100;
  const due = 'Past Due';
  const progress = 'Progress';

  return (
    <View style={CHART_CONTAINER}>
      <View style={CIRCLE_CONTAINER}>
        <DonutChart
          approveAmount={approveAmount}
          percentage={percentage}
          quoteColor={color.project}
        />
        <View style={RIGHT_SECTION}>
          <DateRangeItem />
          <ItemStatus approve={progress} unapprove={due} />
        </View>
      </View>
      <HorizontalLine style={{}} />
    </View>
  );
};
