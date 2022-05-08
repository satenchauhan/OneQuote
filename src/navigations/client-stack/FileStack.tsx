import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { FileScreen } from '../../screens';
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
const FileStack = createStackNavigator();

export const FileStackNavigator = () => {
    return (
    <FileStack.Navigator initialRouteName="File">
        <FileStack.Screen name="File" component={FileScreen} options={{headerShown:false}} />
    </FileStack.Navigator>
    ) 
}