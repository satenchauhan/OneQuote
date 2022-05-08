/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler'
import React from 'react';
import { StyleSheet, LogBox  } from 'react-native';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import GlobalProvider from './src/context/Provider';
import { AppRootNavigator } from './src/navigations';




const App = () => {
  
  return (
    <GlobalProvider>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <AppRootNavigator  />
      </SafeAreaProvider>
    </GlobalProvider>
  );
};



export default App;



LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);