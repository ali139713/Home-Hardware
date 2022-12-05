import {StackActions} from '@react-navigation/native';
import {Button, View} from 'native-base';
import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text} from 'react-native';
import {appColor} from '../assets/colors';
import {height, width} from '../helpers/Constant';
import {FONT, HEIGHT, WIDTH} from '../helpers/helperFunction';
import {Screens} from '../helpers/ScreenConstant';

const OrderCompletionScreen: React.FC<any> = ({navigation}) => {
  const handleBackToHome = () => {
    navigation.dispatch(StackActions.replace(Screens.HomeNavigation));
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../assets/orderCompletion.png')}
        />
        <Text style={styles.heading}>Congratulations</Text>
        <Text style={styles.graySubHeading}>Your order has been completed</Text>
        <Button
          mt="10"
          mb="10"
          bg={appColor.black}
          w="60%"
          onPress={handleBackToHome}>
          Back To Home
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default OrderCompletionScreen;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColor.white,
  },
  image: {
    height: HEIGHT(250),
    width: WIDTH(200),
    marginBottom: HEIGHT(50),
  },
  heading: {
    fontSize: FONT(22),
    fontWeight: '800',
    marginTop: HEIGHT(30),
    marginLeft: WIDTH(10),
    color: appColor.black,
  },
  graySubHeading: {
    fontSize: FONT(18),
    fontWeight: '600',
    color: appColor.gray,
  },
});
