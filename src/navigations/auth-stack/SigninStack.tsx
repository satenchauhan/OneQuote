import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { SigninParams } from '../../components';
import { LoginScreen } from '../../screens';
import { color } from '../../theme';


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
const SigninStack = createStackNavigator<SigninParams>();

export const SigninStackNavigator = () => {
    return (
    <SigninStack.Navigator initialRouteName="Login">
        <SigninStack.Screen name="Login" component={LoginScreen} options={SignHeaderStyle} />
        {/* <SigninStack.Screen name="MagicBox" component={MagicBox} options={MagicStyle}  /> */}
        {/* <SigninStack.Screen name="SocialMagicBox" component={SocialMagicBox} options={MagicStyle}  /> */}
    </SigninStack.Navigator>
    ) 
}

