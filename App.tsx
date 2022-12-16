/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {RootSiblingParent} from 'react-native-root-siblings';
import MainNavigation from './navigation/MainNavigation';
import {Settings} from 'react-native-fbsdk-next';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {RN_GOOGLE_WEB_CLIENT_ID} from './config/url';
import {appColor} from './assets/colors';

const App = () => {
  useEffect(() => {
    // Settings.setAppID(FACEBOOK_APP_ID);
    Settings.initializeSDK();
    GoogleSignin.configure({
      webClientId: RN_GOOGLE_WEB_CLIENT_ID,
    });
  }, []);

  return (
    <NativeBaseProvider>
      <RootSiblingParent>
        <NavigationContainer>
          <StatusBar backgroundColor={appColor.white} barStyle="default" />
          <MainNavigation />
        </NavigationContainer>
      </RootSiblingParent>
    </NativeBaseProvider>
  );
};

export default App;
