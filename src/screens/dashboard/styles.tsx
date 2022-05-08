import {ViewStyle} from 'react-native';
import {ROW_CENTER, ROW_SPACE} from '../../utils';

export const CHART_CONTAINER: ViewStyle = {
  flex: 1,
  // marginBottom: 140,
};

export const CIRCLE_CONTAINER: ViewStyle = {
  ...ROW_SPACE,
  marginTop: 30,
  marginLeft: 10,
};

export const RIGHT_SECTION: ViewStyle = {
  flex: 1,
  alignItems: 'flex-end',
  marginHorizontal: 10,
  marginTop: -10,
};

export const SPACE: ViewStyle = {
  marginVertical: 10,
  marginTop: 50,
};

export const HOME_CONTAINER: ViewStyle = {
  flex: 1,
  height: '100%',
  backgroundColor: '#F3F3F3',
};
export const HOME_HEADER: ViewStyle = {
  ...ROW_CENTER,
  height: 150,
  marginTop: -20,
};
export const HOME_CENTER: ViewStyle = {
  flex: 1,
  backgroundColor: '#FFFFFF',
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  marginTop: 5,
  shadowRadius: 30,
  shadowOffset: {
    width: 0,
    height: 8,
  },
  shadowColor: 'black',
  elevation: 10,
};

export const HOME_CENTER_TABS: ViewStyle = {
  ...ROW_SPACE,
  marginTop: 10,
};

/* 
flexDirection: 'row',
  // alignItems: 'center',
  // justifyContent: 'space-between',
*/
