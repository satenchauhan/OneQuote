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

export const InvoiceChartView = () => {
  const totalAmount = 1250;
  const approveAmount = 100;
  const percentage = (approveAmount / totalAmount) * 100;
  const wait = 'Awaiting Payment';
  const paid = 'Paid';

  return (
    <View style={CHART_CONTAINER}>
      <View style={CIRCLE_CONTAINER}>
        <DonutChart
          approveAmount={approveAmount}
          percentage={percentage}
          quoteColor={color.invoice}
        />
        <View style={RIGHT_SECTION}>
          <DateRangeItem />
          <ItemStatus approve={paid} unapprove={wait} />
        </View>
      </View>
      <HorizontalLine style={{}} />
    </View>
  );
};
