import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { RequestScreen } from '../../screens';
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
const RequestStack = createStackNavigator();

export const RequestStackNavigator = () => {
    return (
    <RequestStack.Navigator initialRouteName="Request">
        <RequestStack.Screen name="Request" component={RequestScreen} options={{headerShown:false}} />
    </RequestStack.Navigator>
    ) 
}