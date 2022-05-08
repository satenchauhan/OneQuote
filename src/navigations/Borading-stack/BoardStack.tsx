import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { BusinessInfo, BusinessLogo, ThatsIT, Welcome } from '../../screens';
import { HeaderStyle } from './headerStyle';
import { AuthStackNavigator } from '../auth-stack';



const BoardStack = createStackNavigator();



export const BoardingNavigator = () => {

    return (
        <BoardStack.Navigator initialRouteName="WelcomePage">
            <BoardStack.Screen name="WelcomePage" component={Welcome} options={{headerShown: false}} />
            <BoardStack.Screen name="BusinessInfo" component={BusinessInfo} options={HeaderStyle} />
            <BoardStack.Screen name="BusinessLogo" component={BusinessLogo} options={HeaderStyle} />
            <BoardStack.Screen name="ThatsIT" component={ThatsIT} options={HeaderStyle} />
            <BoardStack.Screen name="AuthStack" component={AuthStackNavigator} options={{headerShown:false}} />
            {/* <BoardStack.Screen name="SocialMagicBox" component={SocialMagicBox} options={MagicStyle}  /> */}
        </BoardStack.Navigator>
    ); 
    
};