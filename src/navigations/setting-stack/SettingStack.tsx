import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { Settings } from '../../screens';
import { color } from '../../theme';


const HeaderStyle = () => {
    return {
      title: '',
      headerStyle: {
        backgroundColor: '#fff',
        borderColor: 'white',
        elevation: 0,
      },
      headerTintColor: color.white,
    };
};
const SettingStack = createStackNavigator();

export const SettingStackNavigator = () => {
    return (
    <SettingStack.Navigator initialRouteName="Settings">
        <SettingStack.Screen name="Settings" component={Settings} options={{headerShown:false}} />
    </SettingStack.Navigator>
    ) 
}