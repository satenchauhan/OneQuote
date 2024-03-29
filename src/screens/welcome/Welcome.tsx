import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet,Text,View,StatusBar,Dimensions,TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { VECTOR } from '../../assets';


export const Welcome = ({navigation}) => {

  return (
    <View style={styles.container}>
        <StatusBar backgroundColor='rgba(83, 83, 83, 0.58)' barStyle="light-content" />
        <View style={styles.header}>
            <Text style={styles.headText}>
                Hello,{'\n'}Welcome to{'\n'}
                <Text style={{color:'#3851DD'}}>OneQuote</Text>
            </Text>
        </View>
        <Animatable.View style={[styles.footer]} animation="fadeInUpBig" >   
            <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
                source={VECTOR.logo}
                style={styles.logo}
                resizeMode="contain" 
            />
            <Text style={styles.title}>OneQuote</Text>
            <View style={{width:358, alignSelf:'center'}}>
                <Text style={[styles.txt,{fontSize:16, top:22}]}>
                    Have full control of your business HQ and create accurate quotes in seconds.
                </Text>
            </View>
            <View style={styles.button}>
                <TouchableOpacity style={styles.signIn} 
                  onPress={() => navigation.navigate('BusinessInfo',{routeName:'BusinessInfo'})}
                  // onPress={login}
                >
                    <View style={styles.signIn}>
                        <Text style={styles.textSign}>Get Started</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View> 
                <TouchableOpacity  style={styles.signUp} onPress={() => navigation.navigate('SignInScreen')}>    
                    <Text style={[styles.txt,{marginTop:36}]}> Don't have an account ? <Text style={{fontWeight:'bold'}}>Login Here</Text></Text>
                </TouchableOpacity>
            </View>
        </Animatable.View>
    </View>
  );
};


const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignSelf:'center',
    // justifyContent:'center',
    backgroundColor: '#fff',
  },
  header: {},
  headText: {
    fontFamily: 'Roboto',
    fontSize: 47,
    fontWeight: '700',
    color: '#505050',
    left: 10,
    top: 42,
    lineHeight: 55,
  },
  footer: {
    flex: 1,
    backgroundColor: '#3851DD',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    marginTop: 100,
  },
  logo: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    marginTop: 15,
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 47,
    textAlign: 'center',
    fontWeight: '700',
    color: '#fff',
    lineHeight: 55,
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  txt: {
    fontFamily: 'Roboto',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'normal',
    color: '#fff',
    lineHeight: 21,
  },
  signUp: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width: '100%',
    marginTop: 25
  },
  signIn: {
    width: 270,
    height: 72,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  textSign: {
    color: '#0A2EFE',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

