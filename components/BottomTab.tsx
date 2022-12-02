import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'native-base';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {appColor} from '../assets/colors';
import {HEIGHT, WIDTH} from '../helpers/helperFunction';
import {Screens} from '../helpers/ScreenConstant';
import HomeScreen from '../screens/HomeScreen';
import VectorIcon from 'react-native-vector-icons/FontAwesome';
import FavouriteScreen from './../screens/FavouritesScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={Screens.Home}
      screenOptions={{
        tabBarStyle: {
          height: HEIGHT(80),
          backgroundColor: appColor.white,
        },
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name={Screens.Home}
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <View>
                {tabInfo.focused ? (
                  <View style={styles.iconView}>
                    <VectorIcon name="home" size={30} color={appColor.black} />
                  </View>
                ) : (
                  <View style={styles.iconView}>
                    <VectorIcon
                      name="home"
                      size={30}
                      color={appColor.lightGray}
                    />
                  </View>
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name={Screens.Favourites}
        component={FavouriteScreen}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <View>
                {tabInfo.focused ? (
                  <View style={styles.iconView}>
                    <VectorIcon name="heart" size={30} color={appColor.black} />
                  </View>
                ) : (
                  <View style={styles.iconView}>
                    <VectorIcon
                      name="heart"
                      size={30}
                      color={appColor.lightGray}
                    />
                  </View>
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name={Screens.Cart}
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <View>
                {tabInfo.focused ? (
                  <View style={styles.iconView}>
                    <VectorIcon
                      name="shopping-cart"
                      size={30}
                      color={appColor.black}
                    />
                  </View>
                ) : (
                  <View style={styles.iconView}>
                    <VectorIcon
                      name="shopping-cart"
                      size={30}
                      color={appColor.lightGray}
                    />
                  </View>
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name={Screens.Profile}
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <View>
                {tabInfo.focused ? (
                  <View style={styles.iconView}>
                    <VectorIcon name="user" size={30} color={appColor.black} />
                  </View>
                ) : (
                  <View style={styles.iconView}>
                    <VectorIcon
                      name="user"
                      size={30}
                      color={appColor.lightGray}
                    />
                  </View>
                )}
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;
const styles = StyleSheet.create({
  iconView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    marginVertical: 5,
  },
});
