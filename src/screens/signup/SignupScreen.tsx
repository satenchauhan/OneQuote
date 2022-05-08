import React, { useContext, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon, Screen } from '../../components';
import { GlobalContext } from '../../context'

export const SignupScreen = () => {

  return (
    <Screen  preset="scroll" >
      <View style={{flex:1}}>
            <Text>SignupScreen</Text>
      </View>
    </Screen>
  )
}