import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import VectorIcon from 'react-native-vector-icons/FontAwesome';
import {appColor} from '../assets/colors';
import {HEIGHT} from '../helpers/helperFunction';
import {Screens} from '../helpers/ScreenConstant';
import CartScreen from '../screens/CartDetailScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeNavigation from './../navigation/HomeNavigation';
import FavouriteScreen from './../screens/FavouritesScreen';
import CartNavigation from './../navigation/CartNavigation';

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={Screens.HomeNavigation}
      screenOptions={{
        tabBarStyle: {
          height: HEIGHT(80),
          backgroundColor: appColor.white,
        },
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name={Screens.HomeNavigation}
        component={HomeNavigation}
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
        name={Screens.CartNavigation}
        component={CartNavigation}
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
