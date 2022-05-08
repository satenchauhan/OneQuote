import React,{useContext} from 'react'
import { StyleSheet, Text, View, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Screen } from '../../components';


export const ThatsIT = ({navigation}) => {
    
    return (
        <Screen preset="scroll">
            <View>
                <Text>Thats in Screen</Text>
            </View>
        </Screen>
    )
}


