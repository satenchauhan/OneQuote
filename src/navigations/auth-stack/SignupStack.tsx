import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { SignupScreen } from '../../screens';
import { color } from '../../theme';
import { SignupParams } from '../../components';


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



const SignupStack = createStackNavigator<SignupParams>();

export const SignupStackNavigator = () => {
    return (
    <SignupStack.Navigator initialRouteName="Signup">
        <SignupStack.Screen name="Signup" component={SignupScreen} options={SignHeaderStyle}  />
        {/* <SignupStack.Screen name="MagicBox" component={MagicBox} options={MagicStyle}  /> */}
        {/* <SignupStack.Screen name="SocialMagicBox" component={SocialMagicBox} options={MagicStyle}  /> */}
    </SignupStack.Navigator>
    ) 
}
