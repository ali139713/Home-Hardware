import {HStack, Text, View, VStack, Button} from 'native-base';
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {appColor} from '../assets/colors';
import Navbar from '../components/Navbar';
import {height, width} from '../helpers/Constant';
import {FONT, HEIGHT, WIDTH} from '../helpers/helperFunction';
import IconComponent from './../components/IconComponent';
import {Screens} from './../helpers/ScreenConstant';

const ShipmentDetailScreen: React.FC<any> = ({navigation}) => {
  const handleConfirm = () => {
    navigation.navigate(Screens.DeliveryDetail);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Navbar />
          <Text style={styles.heading}>Shipment Details</Text>
          <View style={styles.deliveryAddressContainer}>
            <View style={styles.deliveryTextContainer}>
              <Text style={styles.subHeading}>Delivery Address</Text>
              <Text style={styles.textStyle}>Lorem Ipsum</Text>
            </View>
            <View style={styles.deliveryIconContainer}>
              <IconComponent
                name="arrow-right"
                size={20}
                color={appColor.black}
              />
            </View>
          </View>
          <View style={styles.checkoutDetailsContainer}>
            <VStack
              alignItems="flex-start"
              w={130}
              justifyContent="space-evenly">
              <Text style={styles.graySubHeading}>Items</Text>
              <Text style={styles.graySubHeading}>Sum Total</Text>
              <Text style={styles.graySubHeading}>Delivery</Text>
            </VStack>

            <VStack alignItems="center" w={20} justifyContent="space-evenly">
              <Text style={styles.graySubHeading}>:</Text>
              <Text style={styles.graySubHeading}>:</Text>
              <Text style={styles.graySubHeading}>:</Text>
            </VStack>
            <VStack alignItems="center" w={150} justifyContent="space-evenly">
              <Text style={styles.graySubHeading}>08</Text>
              <Text style={styles.graySubHeading}>$4000</Text>
              <Text style={styles.graySubHeading}>$100</Text>
            </VStack>
          </View>
          <HStack
            w={420}
            justifyContent="space-between"
            style={styles.totalAmountContainer}>
            <Text style={styles.blackSubHeading}>Total Amount</Text>
            <Text style={styles.blackSubHeading}>:</Text>
            <Text style={styles.blackSubHeading}>$1000 </Text>
          </HStack>
          <HStack justifyContent="center">
            <Button
              mt="10"
              mb="10"
              bg={appColor.black}
              backgroundColor={appColor.black}
              w="90%"
              onPress={handleConfirm}>
              Confirm
            </Button>
          </HStack>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShipmentDetailScreen;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: '100%',
    backgroundColor: appColor.white,
  },
  deliveryAddressContainer: {
    height: HEIGHT(110),
    width: '95%',
    flexDirection: 'row',
    marginTop: HEIGHT(50),
    marginLeft: WIDTH(10),
    backgroundColor: appColor.white,
    padding: 20,
    elevation: 8,
    shadowColor: 'rgba(0.3,0.3,0.3,0.3)',
  },
  deliveryTextContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  deliveryIconContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  checkoutDetailsContainer: {
    height: HEIGHT(300),
    width: '95%',
    flexDirection: 'row',
    marginTop: HEIGHT(40),
    marginLeft: WIDTH(10),
    backgroundColor: appColor.white,
    padding: 20,
    elevation: 8,
    shadowColor: 'rgba(0.3,0.3,0.3,0.3)',
    borderRadius: 8,
  },
  totalAmountContainer: {
    height: HEIGHT(80),
    width: '95%',
    flexDirection: 'row',
    marginTop: HEIGHT(10),
    marginLeft: WIDTH(10),
    backgroundColor: appColor.white,
    padding: 20,
    elevation: 8,
    shadowColor: 'rgba(0.3,0.3,0.3,0.3)',
    borderRadius: 8,
  },
  heading: {
    fontSize: FONT(22),
    fontWeight: '800',
    marginTop: HEIGHT(30),
    marginLeft: WIDTH(10),
    color: appColor.black,
  },
  subHeading: {
    fontSize: FONT(20),
    fontWeight: '700',
    color: appColor.black,
  },
  textStyle: {
    fontSize: FONT(14),
    fontWeight: '500',
    color: appColor.black,
  },
  graySubHeading: {
    fontSize: FONT(18),
    fontWeight: '600',
    color: appColor.gray,
  },
  blackSubHeading: {
    fontSize: FONT(18),
    fontWeight: '600',
    color: appColor.black,
  },
});
