import { StackActions } from '@react-navigation/native';
import {Button, Divider, HStack, Text, View, VStack} from 'native-base';
import React, { useContext } from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {appColor} from '../assets/colors';
import OrderContext from '../context/OrderContext';
import {height, width} from '../helpers/Constant';
import {FONT, HEIGHT, WIDTH} from '../helpers/helperFunction';
import Navbar from './../components/Navbar';
import ProductList from './../components/ProductsList';
import {Screens} from './../helpers/ScreenConstant';

const CartDetailScreen: React.FC<any> = ({navigation}) => {

  const {cartItems, addItemToCart, removeItemFromCart, totalAmount} = useContext(OrderContext);

  console.log({cartItems})
  const handleCheckout = () => {
    navigation.navigate(Screens.ShipmentDetail);
  };

  const handleAddToCart = (item:any) => {
    addItemToCart({
      id: item.id,
      name: item.name,
      image: item.image,
      price: parseInt(item.price),
      quantity:item.quantity,
    });
  };
  const handleRemoveFromCart = (itemId:number) => {
    removeItemFromCart(itemId);
  };

  const handleCounterPress = (type: string, item:any) => {
    if (type === 'plus') {
      handleAddToCart(item)
    } else {
      handleRemoveFromCart(item.id)
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Navbar  handlePress={() =>  navigation.dispatch(StackActions.replace(Screens.HomeNavigation))}/>
          <Text style={styles.heading}>Cart Details</Text>
          <View style={styles.productListContainer}>
            <ProductList data={cartItems} handleCounterPress={handleCounterPress} />
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
              <Text style={styles.graySubHeading}>${totalAmount}</Text>
              <Text style={styles.graySubHeading}>Standard - Free</Text>
              <Text style={styles.graySubHeading}>${totalAmount} + Tax</Text>
            </VStack>
          </View>
          <HStack
            // w={420}
            justifyContent="space-around"
            // pr={12}
            style={styles.totalAmountContainer}>
            <Text style={styles.blackSubHeading}>Total Amount</Text>
            <Text style={styles.blackSubHeading}>:</Text>
            <Text style={styles.blackSubHeading}>${totalAmount} </Text>
          </HStack>
          <HStack justifyContent="center">
            <Button
              mt="10"
              mb="10"
              bg={appColor.black}
              backgroundColor={appColor.black}
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
    height: HEIGHT(200),
    width: '95%',
    marginTop: HEIGHT(20),
    marginLeft: WIDTH(10),
    backgroundColor: 'white',
    padding: 20,
    elevation: 8,
    shadowColor: 'rgba(0.3,0.3,0.3,0.3)',
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
