import {Button, Divider, HStack} from 'native-base';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {appColor} from '../assets/colors';
import Counter from '../components/Counter';
import HorizontalImageList from '../components/HorizontalImageList';
import IconComponent from '../components/IconComponent';
import Navbar from '../components/Navbar';
import {width} from '../helpers/Constant';
import {FONT, HEIGHT, WIDTH} from '../helpers/helperFunction';
import ColorAvatars from './../components/ColorAvatars';

const ProductDetailScreen = () => {
  const images = [
    require('../assets/onBoardingImage1.png'),
    require('../assets/onBoardingImage2.png'),
    require('../assets/onBoardingImage3.png'),
  ];

  const handleAddToCart = () => {};

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Navbar isFavouriteIcon={true} headerText="Room Sofa" />
          <Image
            style={styles.imageStyles}
            source={require('../assets/onBoardingImage3.png')}
          />
          <View style={styles.listContainer}>
            <HorizontalImageList data={images} />
          </View>
          <View style={styles.categoryNameAndColorContainer}>
            <View>
              <Text style={styles.subHeading}>Furniture</Text>
            </View>
            <ColorAvatars />
          </View>
          <View style={styles.productNameAndPriceContainer}>
            <Text style={styles.heading}>Drawing Room</Text>
            <Text style={styles.heading}>Sofa Set</Text>
            <Text style={styles.subHeading}>5000$</Text>
          </View>
          <View style={styles.counterAndSocialLinksContainer}>
            <View>
              <Counter />
            </View>
            <HStack mr={2} space={3}>
              <IconComponent name="facebook" size={25} color={appColor.black} />
              <IconComponent
                name="instagram"
                size={25}
                color={appColor.black}
              />
              <IconComponent name="linkedin" size={25} color={appColor.black} />
            </HStack>
          </View>
          <View style={styles.descriptionTextContainer}>
            <Text style={styles.descriptionText}>
              Lorem ipsum dolor sit amet, consectetur adipisc,Lorem ipsum dolor
              sit amet, consectetur adipisc,Lorem ipsum dolor sit amet,
              consectetur adipisc,Lorem ipsum dolor sit amet, consectetur
              adipisc,Lorem ipsum dolor sit amet, consectetur adipisc,Lorem
              ipsum dolor sit amet, consectetur adipisc,Lorem ipsum dolor sit
              amet, consectetur adipisc,
            </Text>
          </View>
          <HStack justifyContent="center">
            <Button
              mt="10"
              bg={appColor.black}
              w="90%"
              onPress={handleAddToCart}>
              Add To Cart
            </Button>
          </HStack>
          <Divider my="10" w="90%" ml={5} color={appColor.lightGray} />
          <Text style={styles.heading}>You Might Also Like</Text>
          <View style={styles.relevantProductsListContainer}>
            <HorizontalImageList data={images} isProductDetails />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: '100%',
    backgroundColor: appColor.white,
  },
  imageStyles: {
    height: HEIGHT(300),
    width: '95%',
    marginTop: HEIGHT(10),
  },

  listContainer: {
    height: HEIGHT(150),
    width: '95%',
    marginTop: HEIGHT(20),
    marginLeft: WIDTH(10),
  },
  categoryNameAndColorContainer: {
    height: HEIGHT(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%',
    marginTop: HEIGHT(20),
    marginLeft: WIDTH(10),
  },
  productNameAndPriceContainer: {
    height: HEIGHT(120),
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    width: '95%',
    marginTop: HEIGHT(20),
    marginLeft: WIDTH(10),
  },
  counterAndSocialLinksContainer: {
    height: HEIGHT(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%',
    marginTop: HEIGHT(20),
    marginLeft: WIDTH(15),
  },
  descriptionTextContainer: {
    height: HEIGHT(250),
    width: '95%',
    marginTop: HEIGHT(20),
    marginLeft: WIDTH(10),
  },
  relevantProductsListContainer: {
    height: HEIGHT(450),
    width: '95%',
    marginTop: HEIGHT(20),
    marginLeft: WIDTH(10),
  },
  heading: {
    fontSize: FONT(20),
    fontWeight: '800',
    marginTop: HEIGHT(10),
    marginLeft: WIDTH(10),
    color: appColor.black,
  },
  subHeading: {
    fontSize: FONT(18),
    fontWeight: '600',
    marginLeft: WIDTH(10),
    color: appColor.gray,
  },
  descriptionText: {
    fontSize: FONT(16),
    fontWeight: '500',
    textAlign: 'justify',
    color: appColor.black,
  },
});
