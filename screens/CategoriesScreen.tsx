import {Center, Text, View} from 'native-base';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {appColor} from '../assets/colors';
import {CustomTabView} from '../components/CustomTabView';
import Navbar from '../components/Navbar';
import VerticalImageList from '../components/VerticalImageList';
import {height, width} from '../helpers/Constant';
import {FONT, HEIGHT, WIDTH} from '../helpers/helperFunction';
import {Screens} from './../helpers/ScreenConstant';

const CategoriesScreen: React.FC<any> = ({navigation, route}) => {
  const {isMainCategory} = route.params;

  const images = [
    require('../assets/onBoardingImage1.png'),
    require('../assets/onBoardingImage2.png'),
    require('../assets/onBoardingImage3.png'),
  ];

  const handleItemPress = () => {
    navigation.navigate(Screens.ProductDetail);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Navbar />
        <Text style={styles.heading}>Furniture</Text>
        {!isMainCategory && <CustomTabView />}

        {isMainCategory && (
          <VerticalImageList
            data={images}
            isCategories={false}
            handleItemPress={handleItemPress}
          />
        )}
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
