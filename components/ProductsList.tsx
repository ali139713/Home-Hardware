import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {appColor} from '../assets/colors';
import {FONT, HEIGHT, WIDTH} from '../helpers/helperFunction';
import IconComponent from './IconComponent';

type ProductListProps = {
  data: any;
};

const images = [
  require('../assets/onBoardingImage1.png'),
  require('../assets/onBoardingImage2.png'),
  require('../assets/onBoardingImage3.png'),
];

const ProductList: React.FC<ProductListProps> = ({data}) => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <View style={styles.container}>
              <View style={styles.imageContainer}></View>
              <View style={styles.nameAndPriceContainer}></View>
              <View style={styles.counterContainer}></View>
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    height: HEIGHT(200),
    width: '95%',
    marginHorizontal: WIDTH(10),
    elevation: 10,
    shadowColor: 'rgba(0.8,0.8,0.8,0.8)',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    borderRadius: 8,
  },
  imageContainer: {
    flex: 0.3,
    backgroundColor: 'red',
  },
  nameAndPriceContainer: {
    flex: 0.5,
    backgroundColor: 'green',
  },
  counterContainer: {
    flex: 0.2,
    backgroundColor: 'yellow',
  },
  nameText: {
    fontSize: FONT(16),
    color: appColor.black,
  },
  priceText: {
    fontSize: FONT(14),
    fontWeight: '800',
    color: appColor.black,
  },
});
