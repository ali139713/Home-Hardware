import {Button, HStack, Text, View, VStack} from 'native-base';
import React from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {appColor} from '../assets/colors';
import OptionTab from '../components/OptionTab';
import {height, width} from '../helpers/Constant';
import {FONT, HEIGHT, WIDTH} from '../helpers/helperFunction';

const ProfileScreen: React.FC<any> = ({navigation}) => {
  const handleEditProfile = () => {};

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
              w="40%"
              onPress={handleEditProfile}>
              Edit Profile
            </Button>
          </HStack>
          <HStack w="100%">
            <OptionTab name="My Orders" />
          </HStack>
          <HStack w="100%">
            <OptionTab name="Favourites" />
          </HStack>
          <HStack w="100%">
            <OptionTab name="Shipping Address" />
          </HStack>
          <HStack w="100%">
            <OptionTab name="Gift Cards & Vouchers" />
          </HStack>
          <HStack w="100%">
            <OptionTab name="Loyalty Cards" />
          </HStack>
          <HStack w="100%">
            <OptionTab name="Logout" />
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
    height: HEIGHT(120),
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
