import {Button, HStack, Text, View, VStack} from 'native-base';
import React from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {appColor} from '../assets/colors';
import OptionTab from '../components/OptionTab';
import {height, width} from '../helpers/Constant';
import {FONT, HEIGHT, WIDTH} from '../helpers/helperFunction';
import {StackActions} from '@react-navigation/native';
import {Screens} from './../helpers/ScreenConstant';

const ProfileScreen: React.FC<any> = ({navigation}) => {
  const handleEditProfile = () => {};

  const handleOptionPress = (optionName: string) => {
    switch (optionName) {
      case 'Logout':
        navigation.navigate(Screens.Login);
      default:
        return;
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <VStack mt={18} alignItems="center">
            <Image
              style={styles.image}
              source={require('../assets/profilePic.png')}
            />
            <Text style={styles.blackSubHeading}>Person Name</Text>
          </VStack>
          <HStack justifyContent="center">
            <Button
              mt="10"
              mb="10"
              bg={appColor.black}
              backgroundColor={appColor.black}
              w="40%"
              onPress={handleEditProfile}>
              Edit Profile
            </Button>
          </HStack>
          <HStack w="100%">
            <OptionTab name="My Orders" onClick={handleOptionPress} />
          </HStack>
          <HStack w="100%">
            <OptionTab name="Favourites" onClick={handleOptionPress} />
          </HStack>
          <HStack w="100%">
            <OptionTab name="Shipping Address" onClick={handleOptionPress} />
          </HStack>
          <HStack w="100%">
            <OptionTab
              name="Gift Cards & Vouchers"
              onClick={handleOptionPress}
            />
          </HStack>
          <HStack w="100%">
            <OptionTab name="Loyalty Cards" onClick={handleOptionPress} />
          </HStack>
          <HStack w="100%">
            <OptionTab name="Logout" onClick={handleOptionPress} />
          </HStack>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: width,
    alignItems: 'center',
    backgroundColor: appColor.white,
  },
  image: {
    height: HEIGHT(150),
    width: WIDTH(120),
    borderRadius: 60,
    marginBottom: HEIGHT(50),
  },
  blackSubHeading: {
    fontSize: FONT(18),
    fontWeight: '800',
    color: appColor.black,
  },
});
