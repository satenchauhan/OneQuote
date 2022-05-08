import {Text, View} from 'react-native';
import React from 'react';
import {CONTAINER, TXT, AMT} from './styles';
import {color} from '../../theme';

export const ItemStatus = ({unapprove, approve}) => {
  return (
    <View style={CONTAINER}>
      <View>
        <Text style={TXT}>
          <Text style={{color: color.negatv}}>■</Text> {unapprove} Quotes
        </Text>
        <Text style={AMT}>${'123.40'}</Text>
      </View>
      <View>
        <Text style={TXT}>
          <Text style={{color: color.quote}}>■ </Text> {approve} Quotes
        </Text>
        <Text style={AMT}>${'903.60'}</Text>
      </View>
    </View>
  );
};
