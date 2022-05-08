import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import { DashboardNavigation } from './dashboard';
import { AuthStackNavigator } from './auth-stack';
import { BoardingNavigator } from './Borading-stack';





export const AppRootNavigator = () => {
  return (
    <NavigationContainer>
      <DashboardNavigation   />
      {/* <BoardingNavigator /> */}
    </NavigationContainer> 
  )
}

const styles = StyleSheet.create({});