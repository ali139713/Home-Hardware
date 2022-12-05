import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {appColor} from '../assets/colors';
import {FONT, HEIGHT, WIDTH} from '../helpers/helperFunction';
import IconComponent from './IconComponent';

type PurchaseListProps = {
  data: any;
};
const images = [
  require('../assets/onBoardingImage1.png'),
  require('../assets/onBoardingImage2.png'),
  require('../assets/onBoardingImage3.png'),
];

const PurchaseList: React.FC<PurchaseListProps> = ({data}) => {
  return (
    <View>
      <FlatList
        data={data}
        nestedScrollEnabled
        renderItem={({item, index}) => {
          return (
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                <Image source={images[index]} style={styles.image} />
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.blackText}>{item.name}</Text>
                <Text style={styles.greyText}>{item.use}</Text>
                <Text style={styles.greyText}>{item.room}</Text>
                <Text style={styles.greyText}>{item.color}</Text>
                <Text style={styles.greyText}>{item.brand}</Text>
              </View>
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default PurchaseList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: HEIGHT(20),
  },
  imageContainer: {
    flex: 0.4,
  },
  descriptionContainer: {
    flex: 0.6,
    flexDirection: 'column',
    marginLeft: WIDTH(10),
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  blackText: {
    fontSize: FONT(20),
    fontWeight: '800',
    // marginTop: HEIGHT(30),
    // marginLeft: WIDTH(10),
    color: appColor.black,
  },
  greyText: {
    fontSize: FONT(18),
    fontWeight: '700',
    // marginTop: HEIGHT(30),
    // marginLeft: WIDTH(10),
    color: appColor.lightGray,
  },
});
