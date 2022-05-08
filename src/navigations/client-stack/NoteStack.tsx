import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NoteScreen } from '../../screens';
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
const NoteStack = createStackNavigator();

export const NoteStackNavigator = () => {
    return (
    <NoteStack.Navigator initialRouteName="Note">
        <NoteStack.Screen name="Note" component={NoteScreen} options={{headerShown:false}} />
    </NoteStack.Navigator>
    ) 
}