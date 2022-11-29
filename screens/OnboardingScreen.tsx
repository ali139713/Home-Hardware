import {View} from 'native-base';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {appColor} from '../assets/colors';
import {height, width} from '../helpers/Constant';
import Carousel from '../components/CustomImageSlider';

const OnboardingScreen: React.FC<any> = ({navigation}) => {
  return (
    <SafeAreaView>
      <View
        style={{
          width: width,
          height: height,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: appColor.white,
        }}>
        <Carousel />
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
