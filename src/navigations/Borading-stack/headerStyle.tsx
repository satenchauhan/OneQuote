import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
import { color } from '../../theme';
import { Icon } from '../../components';
const popAction = StackActions.pop(1);


const welcomeHeader = ({routeName}) => {
  return (
    routeName === 'BusinessInfo' || routeName === 'BusinessLogo' ? '#fff' : color.WelColor,
    routeName === 'BusinessInfo' || routeName === 'BusinessLogo' ? '#fff' : color.WelColor
  );
};

export const HeaderStyle = ({ navigation, route }) => {
    const routeName = route.name;
    return {
      title: '',
      headerStyle: {
        backgroundColor:
          routeName === 'BusinessInfo' || routeName === 'BusinessLogo' ? color.WelColor : '#fff',
        elevation: 0,
      },
      headerLeft: () => (
        <TouchableOpacity activeOpacity={0.2}
          onPress={() => navigation.goBack(null)}>
          <Icon type="ionicon" name="arrow-back" size={25} underlayColor=""
            color={
              routeName === 'BusinessInfo' || routeName === 'BusinessLogo' ? '#fff' : color.WelColor
            }
            backgroundColor={
              routeName === 'BusinessInfo' || routeName === 'BusinessLogo' ? color.WelColor : '#fff'
            }
          />
        </TouchableOpacity>
      ),
      headerTitle: () => (
        <View style={{ flexDirection: 'row', marginLeft: '50%' }}>
          <View style={[Stackstyles.dots,
              {
                width: routeName === 'BusinessInfo' ? 15 : 12,
                height: routeName === 'BusinessInfo' ? 15 : 12,
                backgroundColor: routeName === 'BusinessInfo' ? '#fff' : 'gray',
                marginTop: routeName === 'BusinessInfo' ? -2 : 0,
              },
            ]}>
          </View>
          <View style={[Stackstyles.dots,
              {
                width: routeName === 'BusinessLogo' ? 15 : 12,
                height: routeName === 'BusinessLogo' ? 15 : 12,
                backgroundColor: routeName === 'BusinessLogo' ? '#fff' : 'gray',
                marginTop: routeName === 'BusinessLogo' ? -2 : 0,
              },
            ]}>
          </View>
          <View style={[Stackstyles.dots,
              {
                width: routeName === 'ThatsIT' ? 15 : 12,
                height: routeName === 'ThatsIT' ? 15 : 12,
                backgroundColor: routeName === 'ThatsIT' ? color.WelColor : 'gray',
                marginTop: routeName === 'ThatsIT' ? -2 : 0,
              },
            ]}>
          </View>
        </View>
      ),
      headerRight: () => (
        <View style={Stackstyles.common}>
          <TouchableOpacity style={Stackstyles.createBtn}
            activeOpacity={ routeName === 'ThatsIT' ? 1 : 0.1 }
            underlayColor={ routeName === 'ThatsIT' ? '#fff' : '' }
            onPress={() => {
              routeName === 'BusinessInfo'
                ? navigation.navigate('BusinessLogo')
                : navigation.navigate('ThatsIT');
            }}>
            <Text style={{fontSize: 20, marginRight: 20, color: welcomeHeader(routeName)}}>
              {routeName === 'BusinessInfo' || routeName === 'BusinessLogo' ? 'Next' : 'Finsh'}
            </Text>
          </TouchableOpacity>
        </View>
      ),
    };
  };


  const Stackstyles = StyleSheet.create({
    common: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingRight: 10,
    },
    dots: {
      borderRadius: 20,
      margin: 3,
    },
    createBtn: {
    /*  
    shadowColor: "gray",
      shadowOffset: {
        width: -1,
        height: 2,
      },
      shadowOpacity: 1,
      shadowRadius: 5,
      elevation: 5,   */
    },
});
  