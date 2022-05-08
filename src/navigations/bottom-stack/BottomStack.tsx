import React,{useContext} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View,Text,StyleSheet,ViewStyle} from 'react-native';
import { HomeStackNavigayor } from '../home-stack/HomeStack';
import { WorkBookNavigator } from '../workbook-stack';
import { ClientStackNavigator, QuoteStackNavigator } from '../client-stack';
import { Icon } from '../../components';
import { color } from '../../theme';


const BOTTOMLINE: ViewStyle ={
    height:4, 
    width:60, 
    // backgroundColor: color.Secondary, 
    backgroundColor: '#10B0B0',
    // marginTop:5,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 10 }, 
    shadowOpacity: 0.4,
    shadowRadius: 6,
}


const Tab = createBottomTabNavigator();
export const BottomTabNavigation = ({navigation}) => {
  return (
      <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown:false,
            tabBarStyle: {
                flex:1,
                flexWrap: 'wrap',
                height: 60,
                paddingTop: 0,
                paddingBottom:0,
                backgroundColor: color.white,
                borderTopWidth: 1, 
                position: 'absolute', 
                // borderWidth:2,
                shadowColor: "#000000",
                shadowOpacity: 1,
                shadowRadius: 30,
                shadowOffset: {
                    height: 70,
                    width: 10
                },
                elevation: 5  
            },
          }} 
      >
          <Tab.Screen
            name="Home"
            component={HomeStackNavigayor}
            options={{
                tabBarActiveTintColor: '#10B0B0',
                tabBarLabel:({color,focused,size}:any) =>(
                    <>
                    <Text style={{color:color, fontSize:12}}>Home</Text>
                    {focused ?<View style={BOTTOMLINE}></View> :null}
                    </>
                ),
                tabBarIcon: ({ color, size }) => (
                <Icon type="mc"  name="home" color={color} size={27} />
                ),
            }} 
              
          />
          <Tab.Screen
              name="Notification"
              component={''}
              options={{
                tabBarActiveTintColor: '#10B0B0',
                tabBarLabel:({color,focused,size}:any) =>(
                    <>
                    <Text style={{color:color, fontSize:12,}}>Notification</Text>
                    {focused ?<View style={BOTTOMLINE}></View> :null}
                    </>
                ),
                tabBarIcon: ({ color, size }) => (
                    <Icon type="ionicon"  name="notifications-outline" color={color} size={28} />
                ),
              }}
          />
          <Tab.Screen
              name="Workbook"
              component={WorkBookNavigator}
              options={{
                tabBarActiveTintColor: '#10B0B0',
                tabBarLabel:({color,focused,size}:any) =>(
                    <>
                    <Text style={{color:color, fontSize:12,}}>Workbook</Text>
                    {focused ?<View style={BOTTOMLINE}></View> :null}
                    </>
                ),
                tabBarIcon: ({ color, size }) => (
                    <Icon type="ant"  name="appstore-o" color={color} size={22} />
                ),
              }}
          />
          <Tab.Screen
              name="ScheduleScreen"
              component={QuoteStackNavigator}
              options={{
                tabBarActiveTintColor: '#10B0B0',
                tabBarLabel:({color,focused,size}:any) =>(
                    <>
                    <Text style={{color:color, fontSize:12,}}>Schedule</Text>
                    {focused ?<View style={BOTTOMLINE}></View> :null}
                    </>
                ),
                tabBarIcon: ({ color }) => (
                <Icon type="ant" name="calendar" color={color} size={27} />
                ),
              }}
          />
          <Tab.Screen
              name="TimesheetScreen"
              component={ClientStackNavigator}
              options={{
                tabBarActiveTintColor: '#10B0B0',
                tabBarLabel:({color,focused,size}:any) =>(
                    <>
                    <Text style={{color:color, fontSize:12,}}>Timesheet</Text>
                    {focused ?<View style={BOTTOMLINE}></View> :null}
                    </>
                ),
                tabBarIcon: ({color}) => (
                <Icon type="mc" name="alarm" color={color} size={30} />
                ),
              }}
          />
          
      </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
    midButton:{
      width:50, 
      height:50, 
      backgroundColor: '#00E3BA', 
      borderRadius:25, 
      // marginTop:3
      alignItems:'center'
    },
    midBtnIcon:{
      textAlign:'center',
      lineHeight:50, 
      color:'#fff'
    }
});