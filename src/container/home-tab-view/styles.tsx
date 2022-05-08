import {StyleSheet} from 'react-native';
import {color, typography} from '../../theme';

export const styles = StyleSheet.create({
  tabs: {
    marginHorizontal: 25,
  },
  headerTabs: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: color.white,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    elevation: 2,
  },
  tabName: {
    fontFamily: typography.Roboto_Bold,
    fontSize: 12,
    color: color.dark,
    textAlign: 'center',
    letterSpacing: 1,
  },
});
