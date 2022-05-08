import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { color } from '../../theme';
import { SigninStackNavigator } from './SigninStack';
import { SignupStackNavigator } from './SignupStack';
import { BoardingNavigator } from '../Borading-stack/BoardStack';


const SignHeaderStyle = () => {
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

const AuthStack = createStackNavigator();

export const AuthStackNavigator = () => {
    return (
    <AuthStack.Navigator initialRouteName="WelcomeStack">
        {/* <AuthStack.Screen name="WelcomeStack" component={BoradingNavigator} options={{headerShown:false}} /> */}
        <AuthStack.Screen name="UserLogin" component={SigninStackNavigator} options={{headerShown:false}} />
        <AuthStack.Screen name="UserSignup" component={SignupStackNavigator} options={{headerShown:false}} />
    </AuthStack.Navigator>
    ) 
}
