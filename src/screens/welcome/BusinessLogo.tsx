import React from 'react'
import { StyleSheet, Text, View, StatusBar, Dimensions, TouchableOpacity,} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Screen } from '../../components';


export const BusinessLogo = () => {
    return (
        <Screen preset="scroll">
           <View>
               <Text>BusinessLogo in Screen</Text>
           </View>
        </Screen>
    )
}

