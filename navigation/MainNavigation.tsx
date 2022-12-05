import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from '../helpers/ScreenConstant';
import SplashScreen from '../screens/SplashScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import BottomTabs from './../components/BottomTab';
import HomeNavigation from './HomeNavigation';
import CartNavigation from './CartNavigation';
import ProfileNavigation from './ProfileNavigation';

const Stack = createNativeStackNavigator();
const MainNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={Screens.Splash}>
      <Stack.Screen
        name={Screens.Splash}
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Screens.OnBoarding}
        component={OnboardingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Screens.Login}
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Screens.Signup}
        component={SignupScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={Screens.Bottom}
        component={BottomTabs}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={Screens.HomeNavigation}
        component={HomeNavigation}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={Screens.CartNavigation}
        component={CartNavigation}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={Screens.ProfileNavigation}
        component={ProfileNavigation}
      />
    </Stack.Navigator>
  );
};
export default MainNavigation;
