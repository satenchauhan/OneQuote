import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { Estimator } from '../../screens';
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
const EstimatorStack = createStackNavigator();

export const EstimatorStackNavigator = () => {
    return (
    <EstimatorStack.Navigator initialRouteName="Estimator">
        <EstimatorStack.Screen name="Estimator" component={Estimator} options={{headerShown:false}} />
    </EstimatorStack.Navigator>
    ) 
}