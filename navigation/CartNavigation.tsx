import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Screens} from '../helpers/ScreenConstant';
import CartDetailScreen from '../screens/CartDetailScreen';
import DeliveryDetailScreen from './../screens/DeliveryDetailScreen';
import ShipmentDetailScreen from './../screens/ShipmentDetailScreen';

const Stack = createNativeStackNavigator();
const CartNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={Screens.CartDetail}>
      <Stack.Screen
        name={Screens.CartDetail}
        component={CartDetailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Screens.ShipmentDetail}
        component={ShipmentDetailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Screens.DeliveryDetail}
        component={DeliveryDetailScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default CartNavigation;
