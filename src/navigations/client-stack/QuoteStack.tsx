import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { QuoteScreen } from '../../screens';
import { color } from '../../theme';
import { StackHeader } from '../header';



const NavHeadStyle = {
  headerStyle: {
    backgroundColor:color.Secondary,
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
  
};


const QuoteStack = createStackNavigator();

export const QuoteStackNavigator = () => {
    return (
    <QuoteStack.Navigator initialRouteName="Quote" screenOptions={NavHeadStyle}>
        <QuoteStack.Screen name="Quote" component={QuoteScreen} options={StackHeader} />
    </QuoteStack.Navigator>
    ) 
}