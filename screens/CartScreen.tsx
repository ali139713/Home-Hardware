import {Text, View} from 'native-base';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {appColor} from '../assets/colors';
import {height, width} from '../helpers/Constant';

const CartScreen: React.FC<any> = ({navigation}) => {
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
        <Text>This is cart screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
