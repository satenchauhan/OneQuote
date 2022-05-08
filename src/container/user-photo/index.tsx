import React from 'react';
import {View, ImageStyle, FlatList} from 'react-native';
import {VECTOR} from '../../assets';
import {CustomImage, PhotoCardView} from '../../components';
import {CustomTitle} from '../../components/title/index';
import QuotesDatas from '../../components/fake/QuotesDatas';
import {MAIN, PHOTO, styles} from './styles';

export const PhotoSection = () => {
  return (
    <View style={[MAIN]}>
      <View style={styles.container}>
        <View style={styles.imgCircle}>
          <CustomImage source={VECTOR.base} style={PHOTO} />
        </View>
        <CustomTitle style={styles.heading}>{'Lysha Rebner'}</CustomTitle>
      </View>
      <FlatList
        horizontal
        style={styles.flatStyle}
        data={QuotesDatas}
        extraData={QuotesDatas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <PhotoCardView key={item.id} item={VECTOR.Photo1} />
        )}
      />
    </View>
  );
};
