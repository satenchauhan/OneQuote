import React from 'react';
import {View, FlatList} from 'react-native';
import {CustomTitle, Icon} from '../../components';
import QuotesDatas from '../../components/fake/QuotesDatas';
import {itemListing} from '../../screens/dashboard/project-Items';
import {color} from '../../theme';
import {TITLE, MAIN, ADD_ICON, USER_STYLE} from './styles';
import {UsersLinkButton} from './UsersLinkButton';
import {FLATSTYLE} from './../active-project/styles';

export const AddUsers = () => {
  return (
    <View style={MAIN}>
      <CustomTitle style={TITLE}>Users</CustomTitle>
      <View style={USER_STYLE}>
        <View style={ADD_ICON}>
          <Icon
            type="material"
            name="person-add-alt"
            size={25}
            color={color.dark}
          />
        </View>
        <FlatList
          horizontal
          style={FLATSTYLE}
          data={itemListing}
          extraData={itemListing}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <UsersLinkButton />}
        />
      </View>
    </View>
  );
};
