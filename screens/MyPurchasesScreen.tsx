import {View} from 'native-base';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {appColor} from '../assets/colors';
import Navbar from '../components/Navbar';
import {width} from '../helpers/Constant';
import {WIDTH} from '../helpers/helperFunction';

const MyPurchasesScreen: React.FC<any> = ({navigation}) => {
  const images = [
    require('../assets/onBoardingImage1.png'),
    require('../assets/onBoardingImage2.png'),
    require('../assets/onBoardingImage3.png'),
  ];

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Navbar
          headerText="My Purchases"
          isHideIcons
          rightMargin={WIDTH(120)}
        />

        <View style={styles.myPurchasesListContainer}></View>
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
    width: '95%',
    height: '80%',
    backgroundColor: appColor.red,
  },
});
