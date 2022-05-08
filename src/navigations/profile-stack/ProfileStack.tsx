import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { ProfileScreen } from '../../screens';
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
const ProfileStack = createStackNavigator();

export const ProfileStackNavigator = () => {
    return (
    <ProfileStack.Navigator initialRouteName="Profile">
        <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}} />
    </ProfileStack.Navigator>
    ) 
}