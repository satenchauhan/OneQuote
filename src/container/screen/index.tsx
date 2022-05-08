import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  SafeAreaView,
  Keyboard,
  Platform,
  ViewStyle,
} from 'react-native';
import {CustomStatusBar} from '../../components/status-bar/index';

export const FULL: ViewStyle = {backgroundColor: '#FFFFFF'};

const BEHAVIOR = Platform.OS === 'android' ? 'height' : 'padding';

const ScreenWithScrolling = (props: any) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomStatusBar />
      <ScrollView style={FULL} horizontal={false}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {props.children}
        </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaView>
  );
};

const ScreenWithoutScrolling = (props: any) => {
  // console.log("without"+props.children)
  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView style={FULL} behavior={BEHAVIOR}>
        <CustomStatusBar />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {props.children}
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const presets = {scroll: 'scroll'};

export function Screen(props: any) {
  if (props.preset === 'scroll') {
    return <ScreenWithScrolling>{props.children}</ScreenWithScrolling>;
  } else {
    return <ScreenWithoutScrolling>{props.children}</ScreenWithoutScrolling>;
  }
}
