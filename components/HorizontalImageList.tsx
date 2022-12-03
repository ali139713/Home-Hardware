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
import {FONT, WIDTH} from '../helpers/helperFunction';
import IconComponent from './IconComponent';

const {width} = Dimensions.get('window');

const SPACING = 5;
const ITEM_LENGTH = width * 0.8; // Item is a square. Therefore, its height and width are of the same length.
const BORDER_RADIUS = 20;

type HorizontalImageListPros = {
  data: any;
  isProductDetails?: boolean;
};

const HorizontalImageList: React.FC<HorizontalImageListPros> = ({
  data,
  isProductDetails,
}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <View style={{width: ITEM_LENGTH}}>
              <View style={styles.itemContent}>
                {isProductDetails && (
                  <IconComponent
                    name="heart"
                    size={20}
                    color={isProductDetails ? appColor.red : appColor.white}
                    style={styles.favouriteIcon}
                  />
                )}
                <Image source={data[index]} style={styles.itemImage} />
                {isProductDetails && (
                  <Text style={styles.nameText}> Wooden Sofa</Text>
                )}
                {isProductDetails && (
                  <Text style={styles.priceText}>2000$</Text>
                )}
              </View>
            </View>
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        //   keyExtractor={item => item.id}
      />
    </View>
  );
};

export default HorizontalImageList;

const styles = StyleSheet.create({
  container: {},
  itemContent: {
    marginHorizontal: SPACING * 3,
    alignItems: 'flex-start',
    backgroundColor: 'white',
    borderRadius: BORDER_RADIUS + SPACING * 2,
  },
  itemImage: {
    width: '100%',
    height: ITEM_LENGTH,
    borderRadius: BORDER_RADIUS,
    resizeMode: 'cover',
  },
  nameText: {
    fontSize: FONT(16),
    fontWeight: '600',
    color: appColor.black,
  },
  priceText: {
    fontSize: FONT(14),
    fontWeight: '500',
    color: appColor.gray,
    marginLeft: WIDTH(5),
  },
  favouriteIcon: {
    position: 'absolute',
    right: 50,
    zIndex: 999,
  },
});
