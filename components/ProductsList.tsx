import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {appColor} from '../assets/colors';
import {FONT, HEIGHT, WIDTH} from '../helpers/helperFunction';
import Counter from './Counter';
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
              <View style={styles.imageContainer}>
                <Image style={styles.imageStyle} source={images[index]} />
              </View>
              <View style={styles.nameAndPriceContainer}>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.priceText}>{item.price}</Text>
              </View>
              <View style={styles.counterContainer}>
                <Counter flexDirection="column" iconSize={20} />
              </View>
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
    flex: 1,
    flexDirection: 'row',
    marginVertical: HEIGHT(10),
    marginHorizontal: WIDTH(10),
    padding: 10,
    elevation: 3,
    shadowColor: 'rgba(0.3,0.3,0.3,0.3)',
  },
  imageContainer: {
    flex: 0.3,
  },
  nameAndPriceContainer: {
    flex: 0.5,
    justifyContent: 'center',
  },
  counterContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    marginVertical: HEIGHT(5),
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
