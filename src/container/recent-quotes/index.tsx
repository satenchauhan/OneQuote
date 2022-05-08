import React from 'react';
import {View, FlatList} from 'react-native';
import {CustomTitle, QuoteCardView} from '../../components';
import QuotesDatas from '../../components/fake/QuotesDatas';
import {MAIN, FLATSTYLE, TITLE} from './styles';

export const RecentQuotes = () => {
  return (
    <View style={MAIN}>
      <CustomTitle style={TITLE}>{'Recent Quotes'}</CustomTitle>
      <FlatList
        horizontal
        style={FLATSTYLE}
        data={QuotesDatas}
        extraData={QuotesDatas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <QuoteCardView key={item.id} item={item} />}
      />
    </View>
  );
};
