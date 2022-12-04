import {Button, Divider, HStack, Text, View, VStack} from 'native-base';
import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {appColor} from '../assets/colors';
import {height, width} from '../helpers/Constant';
import {FONT, HEIGHT, WIDTH} from '../helpers/helperFunction';
import Navbar from './../components/Navbar';
import ProductList from './../components/ProductsList';

const CartDetailScreen: React.FC<any> = ({navigation}) => {
  const data = [
    {
      id: 1,
      name: 'Arm Chair Set',
      price: '$5000',
    },
    {
      id: 2,
      name: 'Sofa Set',
      price: '$2000',
    },
  ];

  const handleCheckout = () => {};

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Navbar />
          <Text style={styles.heading}>Cart Details</Text>
          <View style={styles.productListContainer}>
            <ProductList data={data} />
          </View>
          <View style={styles.checkoutDetailsContainer}>
            <VStack
              alignItems="flex-start"
              w={130}
              justifyContent="space-evenly">
              <Text style={styles.graySubHeading}>Subtotal</Text>
              <Text style={styles.graySubHeading}>Shipping</Text>
              <Text style={styles.graySubHeading}>Estimated Total</Text>
            </VStack>

            <VStack alignItems="center" w={20} justifyContent="space-evenly">
              <Text style={styles.graySubHeading}>:</Text>
              <Text style={styles.graySubHeading}>:</Text>
              <Text style={styles.graySubHeading}>:</Text>
            </VStack>
            <VStack alignItems="center" w={150} justifyContent="space-evenly">
              <Text style={styles.graySubHeading}>$5000</Text>
              <Text style={styles.graySubHeading}>Standard - Free</Text>
              <Text style={styles.graySubHeading}>$5000 + Tax</Text>
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
              mb="20"
              bg={appColor.black}
              w="90%"
              onPress={handleCheckout}>
              Checkout
            </Button>
          </HStack>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartDetailScreen;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: '100%',
    backgroundColor: appColor.white,
  },
  productListContainer: {
    height: HEIGHT(350),
    width: '95%',
    marginTop: HEIGHT(20),
    marginLeft: WIDTH(10),
    backgroundColor: 'white',
    padding: 20,
    elevation: 10,
    shadowColor: 'rgba(0.8,0.8,0.8,0.8)',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    borderRadius: 8,
  },
  checkoutDetailsContainer: {
    height: HEIGHT(300),
    width: '95%',
    flexDirection: 'row',
    marginTop: HEIGHT(40),
    marginLeft: WIDTH(10),
    backgroundColor: appColor.white,
    padding: 20,
    elevation: 10,
    shadowColor: 'rgba(0.8,0.8,0.8,0.8)',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 5,
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
    elevation: 10,
    shadowColor: 'rgba(0.8,0.8,0.8,0.8)',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    borderRadius: 8,
  },
  heading: {
    fontSize: FONT(20),
    fontWeight: '800',
    marginTop: HEIGHT(10),
    marginLeft: WIDTH(10),
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
