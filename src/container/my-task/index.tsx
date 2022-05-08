import React from 'react';
import {View, FlatList} from 'react-native';
import {CustomTitle, MyTaskCardView} from '../../components';
import QuotesDatas from '../../components/fake/QuotesDatas';
import {FLATSTYLE, TITLE, MAIN} from './styles';

export const MyTask = () => {
  return (
    <View style={MAIN}>
      <CustomTitle style={TITLE}>{'My Task'}</CustomTitle>
      <FlatList
        horizontal
        style={FLATSTYLE}
        data={QuotesDatas}
        extraData={QuotesDatas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <MyTaskCardView key={item.id} item={item} />}
      />
    </View>
  );
};
