import React from 'react';
import {View, FlatList} from 'react-native';
import {VECTOR} from '../../assets';
import {CustomImage, PhotoCardView} from '../../components';
import {CustomTitle} from '../../components/title/index';
import QuotesDatas from '../../components/fake/QuotesDatas';
import {MAIN, PHOTO, styles, TITLE} from './styles';

export const CompanyFeed = () => {
  return (
    <View style={[MAIN]}>
      <View style={styles.container}>
        <View style={styles.imgCircle}>
          <CustomImage source={VECTOR.thumb} style={PHOTO} />
        </View>
        <CustomTitle style={styles.heading}>{'Company Feed'}</CustomTitle>
      </View>
      <CustomTitle style={TITLE}>{'Recent Photos'}</CustomTitle>
      <FlatList
        horizontal
        style={styles.flatStyle}
        data={QuotesDatas}
        extraData={QuotesDatas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <PhotoCardView key={item.id} item={VECTOR.Photo4} />
        )}
      />
    </View>
  );
};
