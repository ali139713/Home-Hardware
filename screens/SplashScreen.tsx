import {StackActions} from '@react-navigation/native';
import {View} from 'native-base';
import React, {useEffect} from 'react';
import {SafeAreaView, Image} from 'react-native';
import {appColor} from '../assets/colors';
import {height, width} from '../helpers/Constant';
import {Screens} from '../helpers/ScreenConstant';

const SplashScreen: React.FC<any> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace(Screens.OnBoarding));
    }, 2000);
  }, []);

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
        <Image
          style={{height: 500, width: 400}}
          source={require('../assets/splashScreen.png')}
        />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
