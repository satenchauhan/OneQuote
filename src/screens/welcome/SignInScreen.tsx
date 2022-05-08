import React,{useState,useEffect,useContext} from 'react'
import { View, Text, TouchableOpacity, TextInput, StatusBar, ActivityIndicator, Alert } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Screen } from '../../components';




export const SignInScreen = () => {


    return (
       <Screen preset="scroll">
           <View>
               <Text>Sign in Screen</Text>
           </View>
       </Screen>
    )
}



