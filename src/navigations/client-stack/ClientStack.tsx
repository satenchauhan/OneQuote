import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { ClientScreen } from '../../screens';
import { color } from '../../theme';
import { StackHeader } from '../header';


const NavHeadStyle = {
  headerStyle: {
    backgroundColor:color.Secondary,
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
  
};

const ClientStack = createStackNavigator();

export const ClientStackNavigator = () => {
    return (
    <ClientStack.Navigator initialRouteName="Client" screenOptions={NavHeadStyle}>
        <ClientStack.Screen name="Client" component={ClientScreen} options={StackHeader} />
    </ClientStack.Navigator>
    ) 
}