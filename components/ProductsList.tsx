import React, {useState} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {appColor} from '../assets/colors';
import {FONT, HEIGHT, WIDTH} from '../helpers/helperFunction';
import Counter from './Counter';
import IconComponent from './IconComponent';

type ProductListProps = {
  data: any;
  handleCounterPress:(type:string, item:any) => any;
};

const ProductList: React.FC<ProductListProps> = ({data,handleCounterPress}) => {
 

  return (
    <View>
      <FlatList
        data={data}
        nestedScrollEnabled
        renderItem={({item}) => {
          return (
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.imageStyle}
                  source={
                    item.image
                      ? {uri: item.image}
                      : require('../assets/placeholder.jpeg')
                  }
                />
              </View>
              <View style={styles.nameAndPriceContainer}>
                <Text style={styles.nameText}>
                  {item?.name?.split(' ')[0] + ' ' + item?.name?.split(' ')[1]}
                </Text>
                <Text style={styles.priceText}>{item.price}</Text>
              </View>
              <View style={styles.counterContainer}>
                <Counter
                  flexDirection="column"
                  iconSize={20}
                  count={item.quantity}
                  handleCounterPress={(type:string) => handleCounterPress(type,item)}
                />
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
