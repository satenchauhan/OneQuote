import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { JobScreen } from '../../screens';
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
const JobStack = createStackNavigator();

export const JobStackNavigator = () => {
    return (
    <JobStack.Navigator initialRouteName="Job">
        <JobStack.Screen name="Job" component={JobScreen} options={{headerShown:false}} />
    </JobStack.Navigator>
    ) 
}