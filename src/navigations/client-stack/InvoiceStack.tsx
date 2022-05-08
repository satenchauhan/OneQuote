import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { InvoiceScreen } from '../../screens';
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
const InvoiceStack = createStackNavigator();

export const InvoiceStackNavigator = () => {
    return (
    <InvoiceStack.Navigator initialRouteName="Invoice">
        <InvoiceStack.Screen name="Invoice" component={InvoiceScreen} options={{headerShown:false}} />
    </InvoiceStack.Navigator>
    ) 
}