/* import React from 'react'
import { StyleSheet, Text,TextStyle, View, TouchableOpacity,Image, ImageStyle,ViewStyle, Platform, Switch } from 'react-native'
import {Avatar, Title, Drawer} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import ToggleSwitch from 'toggle-switch-react-native'
import { Icon, Logo, ScreenContainer, ScreenHeight } from '../../components';
import { typography } from '../../theme';
import { menuItems } from './menu-item';
const logoIcon = require("../../assets/icons/chokidr2x.png");
const QR = require("../../assets/images/codeqr.png")




const LogoIconStyle: ImageStyle = {
    width: 54,
    height:67,
    resizeMode:'stretch'
}


const VIEWSTYLE: ViewStyle ={
    flex:1,
    alignItems:'flex-start', 
    justifyContent: 'center'
}

const SWITCHSTYLE: ViewStyle={
    left:60, 
    marginTop:15
}

const codeStyle: ImageStyle = {
    width: 150,
    height: 150,
    resizeMode:'stretch'
}

const FOOTER: TextStyle = {
    fontFamily: typography.TxtR,
    fontSize: 12,
    color:'rgba(228, 228, 231, 0.2)'
}

export const SideMenu = () => {
    const {navigate} = useNavigation();
    const [isEnabled, setIsEnabled] = React.useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


  return (
    <ScreenContainer>
        <View style={{flex: 1, backgroundColor: '#121212'}}>
            <Drawer.Section  style={{marginLeft:45}}>
                <View style={DStyles.topBox}>
                    <View style={VIEWSTYLE}>
                       <Image source={logoIcon} style={LogoIconStyle} />
                    </View> 
                    <View style={[VIEWSTYLE,{marginRight:10}]}>
                        <Text style={DStyles.logTxt}>You’re logged in</Text>
                        <ToggleSwitch
                            trackOnStyle={SWITCHSTYLE}
                            trackOffStyle={SWITCHSTYLE}
                            isOn={isEnabled}
                            onColor="green"
                            offColor="rgba(224, 55, 97, 0.8)"
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size="medium"
                            onToggle={toggleSwitch}
                        />
                    </View>
                </View>
            </Drawer.Section>
            <Drawer.Section style={DStyles.midSection}>
                {menuItems.map(({name, icon, onPress}, i) =>(
                <TouchableOpacity key={i} style={DStyles.menuBtn} onPress={onPress}>
                    <View>{icon}</View>
                    <Text style={DStyles.label}>{name}</Text>
                </TouchableOpacity>
                ))}
            </Drawer.Section>
            <Drawer.Section style={DStyles.codeSection}>
                <View style={VIEWSTYLE}>
                    <Image source={QR} style={codeStyle} />
                    <Text style={[DStyles.logTxt,{marginLeft:10}]}>Your QR Code</Text>
                </View> 
            </Drawer.Section>
            <View style={{flex:1, alignItems:'center', marginTop:15}}>
                <Text style={[FOOTER,{color:'#FFFFFF'}]}>Chokidr 0.0.1</Text>
                <Text style={[FOOTER,{marginTop:5}]}>Created by Happymonk AI Labs</Text>
            </View>
        </View>
    </ScreenContainer>
  )
}



const DStyles = StyleSheet.create({
    headerSection:{},
    topBox:{
      flex:1,
      flexDirection:'row', 
      alignItems:'flex-start', 
    //   justifyContent:'space-evenly', 
      marginTop:Platform.OS === 'android' ? 65 : 65,
    },
    logTxt:{
        fontFamily: typography.TxtB,
        color:'#FFFFFF',
        fontSize:15, 
        textAlign:'left'
    },
    midSection: {
        marginTop:(ScreenHeight*6/100),
        marginLeft:20
    },
    menuBtn:{
      flexDirection:'row',
      alignItems:'flex-start', 
      margin:15
    },
    label:{
      fontFamily: typography.TxtB,
      fontSize:16, 
      color:'#FFFFFF',
      textAlign:'left' ,
      lineHeight:27,
      marginHorizontal:20,
    },
    codeSection: {
        flex:1,
        alignItems:'center'
    },
});
 */


export const SideMenu = {}