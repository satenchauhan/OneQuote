import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { StackHeader } from '../header';
import { HomeScreen } from '../../screens';
import { ClientStackNavigator, InvoiceStackNavigator, JobStackNavigator, NoteStackNavigator, QuoteStackNavigator, RequestStackNavigator } from '../client-stack';
import { EstimatorStackNavigator } from '../estimator-stack';
import { SettingStackNavigator } from '../setting-stack';
import { WorkBookNavigator } from '../workbook-stack';

const NavHeadStyle = {
  headerStyle: {
    backgroundColor:"#F3F3F3",
    
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
  
};

const Stack = createStackNavigator();

export const HomeStackNavigayor = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={NavHeadStyle}>
        <Stack.Screen name='OneQuote' component={HomeScreen} options={StackHeader} />
        <Stack.Screen name="RequestsPage" component={RequestStackNavigator} options={{headerShown:false}} />
        <Stack.Screen name="EstimatorPage" component={EstimatorStackNavigator} options={{headerShown:false}} />
        <Stack.Screen name="WorkbookStack" component={WorkBookNavigator} options={{headerShown:false}} />
        <Stack.Screen name="ClinetStack" component={ClientStackNavigator} options={{headerShown:false}} />
        <Stack.Screen name="JobStack" component={JobStackNavigator} options={{headerShown:false}} />
        <Stack.Screen name="InvoiceStack" component={InvoiceStackNavigator} options={{headerShown:false}} />
        <Stack.Screen name="QuoteStack" component={QuoteStackNavigator} options={{headerShown:false}}/>
        <Stack.Screen name="NoteStack" component={NoteStackNavigator} options={{headerShown:false}} />
        <Stack.Screen name="Settings" component={SettingStackNavigator} options={{headerShown:false}} /> 
    </Stack.Navigator>
  )
}


