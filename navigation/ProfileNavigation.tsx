import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Screens} from '../helpers/ScreenConstant';
import CartDetailScreen from '../screens/CartDetailScreen';
import DeliveryDetailScreen from './../screens/DeliveryDetailScreen';
import ShipmentDetailScreen from './../screens/ShipmentDetailScreen';
import OrderCompletionScreen from './../screens/OrderCompletionScreen';
import MyPurchasesScreen from '../screens/MyPurchasesScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();
const ProfileNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={Screens.Profile}>
      <Stack.Screen
        name={Screens.Profile}
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Screens.MyPurchases}
        component={MyPurchasesScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default ProfileNavigation;
