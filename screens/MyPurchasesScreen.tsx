import {View} from 'native-base';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {appColor} from '../assets/colors';
import Navbar from '../components/Navbar';
import {width} from '../helpers/Constant';
import {HEIGHT, WIDTH} from '../helpers/helperFunction';
import PurchaseList from './../components/PurchaseList';

const MyPurchasesScreen: React.FC<any> = ({navigation}) => {
  const myPurchases = [
    {
      id: 1,
      name: 'Sofa Set',
      use: 'Best for Lounge & Drawing',
      room: 'Room Area',
      color: 'Black',
      brand: 'JB Saeed',
    },
    {
      id: 2,
      name: 'Chair',
      use: 'Best for Room and Lawn',
      room: 'Lawn Area',
      color: 'Brown',
      brand: 'JB Saeed',
    },
  ];

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Navbar
          headerText="My Purchases"
          isHideIcons
          rightMargin={WIDTH(120)}
        />

        <View style={styles.myPurchasesListContainer}>
          <PurchaseList data={myPurchases} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyPurchasesScreen;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: '100%',
    backgroundColor: appColor.white,
  },

  myPurchasesListContainer: {
    width: '90%',
    height: '90%',
    marginTop: HEIGHT(10),
    marginHorizontal: WIDTH(20),
    backgroundColor: appColor.white,
  },
});
