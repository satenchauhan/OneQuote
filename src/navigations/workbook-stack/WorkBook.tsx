import React,{useContext} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Text,View, TouchableHighlight, StyleSheet} from 'react-native';
import { WorkBookScreen } from '../../screens';
import { StackHeader } from '../header';
import { color } from '../../theme';




const NavHeadStyle = {
    headerStyle: {
      backgroundColor:color.Secondary,
    },
    headerTintColor: 'white',
    headerBackTitle: 'Back',
    
};

const WorkBookStack = createStackNavigator()

export const WorkBookNavigator = ({navigation}) => {
    return (
        <WorkBookStack.Navigator screenOptions={NavHeadStyle}>
            <WorkBookStack.Screen name="WORKBOOK" component={WorkBookScreen} options={StackHeader} />
        </WorkBookStack.Navigator>
    );
};