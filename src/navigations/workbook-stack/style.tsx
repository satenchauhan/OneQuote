import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
import { color } from '../../theme';
import { Icon } from '../../components';
import { GlobalContext } from '../../context';
const popAction = StackActions.pop(1);


const WbTabHeaderStyle = ({route,navigation}) => {
    // const {hide, setHide}:any = useContext(GlobalContext);
    const routeName = route.name;
    return {
        //   headerLeft: () => (  <Icon.Button
        //     name="arrow-back"
        //     size={25}
        //     color="white"
        //     underlayColor={'#666666'}
        //     backgroundColor={'#666666'}
        //     onPress={() => navigation.goBack(null)}></Icon.Button>
        //   ),
        //   headerTitle: () => ( <HeaderTitle headerName={routeName} />),
          // headerRight: () => ( routeName==="WORKBOOK" ?  <HeaderRightButton />  : null   ),
    };
  };
  