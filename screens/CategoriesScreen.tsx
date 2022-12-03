import {Center, Text, View} from 'native-base';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {appColor} from '../assets/colors';
import {CustomTabView} from '../components/CustomTabView';
import Navbar from '../components/Navbar';
import {height, width} from '../helpers/Constant';
import {FONT, HEIGHT, WIDTH} from '../helpers/helperFunction';

const CategoriesScreen: React.FC<any> = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Navbar />
        <Text style={styles.heading}>Furniture</Text>
        <CustomTabView />
      </View>
    </SafeAreaView>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: '100%',
    backgroundColor: appColor.white,
  },

  heading: {
    fontSize: FONT(20),
    fontWeight: '800',
    marginTop: HEIGHT(30),
    marginLeft: WIDTH(10),
    color: appColor.black,
  },
});
