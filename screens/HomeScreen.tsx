import {Text, View} from 'native-base';
import React from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {appColor} from '../assets/colors';
import {height, width} from '../helpers/Constant';
import {FONT, HEIGHT, WIDTH} from '../helpers/helperFunction';
import HorizontalImageList from './../components/HorizontalImageList';

const HomeScreen: React.FC<any> = ({navigation}) => {
  const images = [
    require('../assets/onBoardingImage1.png'),
    require('../assets/onBoardingImage2.png'),
    require('../assets/onBoardingImage3.png'),
  ];
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>Discover</Text>
          <View style={styles.carouselContainer}>
            <HorizontalImageList data={images} />
          </View>
          <View style={styles.categoryTextContainer}>
            <Text style={styles.subHeading}>Categories</Text>
            <Text style={styles.subHeading}>View All</Text>
          </View>
          <View style={styles.categoryListContainer}>
            <HorizontalImageList data={images} />
          </View>
          <View style={styles.bestSellingTextContainer}>
            <Text style={styles.subHeading}>Best Selling</Text>
            <Text style={styles.subHeading}>View All</Text>
          </View>
          <View style={styles.bestSellingListContainer}>
            <HorizontalImageList data={images} />
          </View>
          <View style={styles.adContainer}>
            <Image
              style={{height: '100%', width: '100%'}}
              source={require('../assets/splashScreen.png')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

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

  subHeading: {
    fontSize: FONT(16),
    fontWeight: '600',
    color: appColor.black,
  },

  carouselContainer: {
    height: HEIGHT(250),
    width: '95%',
    marginTop: HEIGHT(20),
    marginLeft: WIDTH(10),
  },
  categoryTextContainer: {
    height: HEIGHT(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%',
    marginTop: HEIGHT(20),
    marginLeft: WIDTH(10),
  },
  categoryListContainer: {
    height: HEIGHT(150),
    width: '95%',
    marginTop: HEIGHT(20),
    marginLeft: WIDTH(10),
  },
  bestSellingTextContainer: {
    height: HEIGHT(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%',
    marginTop: HEIGHT(20),
    marginLeft: WIDTH(10),
  },
  bestSellingListContainer: {
    height: HEIGHT(150),
    width: '95%',
    marginTop: HEIGHT(20),
    marginLeft: WIDTH(10),
  },
  adContainer: {
    height: HEIGHT(350),
    width: '95%',
    marginTop: HEIGHT(20),
    marginLeft: WIDTH(10),
    backgroundColor: 'red',
  },
});
