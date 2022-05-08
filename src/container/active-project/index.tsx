import React from 'react';
import {View, FlatList} from 'react-native';
import {ProjectCardView, CustomTitle} from '../../components';
import QuotesDatas from '../../components/fake/QuotesDatas';
import {FLATSTYLE, TITLE, MAIN} from './styles';

export const ActiveProject = () => {
  return (
    <View style={MAIN}>
      <CustomTitle style={TITLE}>{'Active Projects'}</CustomTitle>
      <FlatList
        horizontal
        style={FLATSTYLE}
        data={QuotesDatas}
        extraData={QuotesDatas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <ProjectCardView key={item.id} item={item} />}
      />
    </View>
  );
};
