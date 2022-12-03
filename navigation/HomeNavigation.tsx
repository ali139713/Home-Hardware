import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Screens} from '../helpers/ScreenConstant';
import CategoriesScreen from '../screens/CategoriesScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();
const HomeNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={Screens.Home}>
      <Stack.Screen
        name={Screens.Home}
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Screens.Categories}
        component={CategoriesScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default HomeNavigation;
