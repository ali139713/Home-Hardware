import { Pressable } from 'native-base';
import React, {useCallback} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {appColor} from '../assets/colors';
import {FONT, HEIGHT, truncateText, WIDTH} from '../helpers/helperFunction';
import IconComponent from './IconComponent';

const {width} = Dimensions.get('window');

const SPACING = 5;
const ITEM_LENGTH = width * 0.8; // Item is a square. Therefore, its height and width are of the same length.
const BORDER_RADIUS = 20;

type HorizontalImageListPros = {
  data: any;
  isProductDetails?: boolean;
  isCategories?: boolean;
  handlePress?: (item:any) => void;
};

const HorizontalImageList: React.FC<HorizontalImageListPros> = ({
  data,
  isProductDetails,
  isCategories,
  handlePress
}) => {
  const renderItem = useCallback(
    ({item}: any) => {
      return (
        <Pressable style={{width: ITEM_LENGTH}} onPress={() => handlePress!(item)}>
          <View style={styles.itemContent}>
            {isProductDetails && (
              <IconComponent
                name="heart"
                size={20}
                color={isProductDetails ? appColor.red : appColor.white}
                style={styles.favouriteIcon}
              />
            )}
            {!isCategories && (
                 <Image
                    source={
                      item.images !== null && item?.images[0]
                        ? {uri: item.images[0].src}
                        : require('../assets/placeholder.jpeg')
                    }
                    style={styles.itemImage}
                  />
            )}
            {isCategories && (
              <Image
                source={
                  item.image !== null
                    ? {uri: item.image[0].src}
                    : require('../assets/placeholder.jpeg')
                }
                style={styles.itemImage}
              />
            )}
             {isProductDetails && (
              <View style={styles.productDetailContainer}>
                  <Text style={styles.nameText}>{truncateText(item.name , 20)}</Text>
                  <Text style={styles.priceText}>{item.price ? `${item.price}` + '$' : 'N/A'}</Text>
              </View>
           )}
         
          
            
          </View>
        </Pressable>
      );
    },
    [isProductDetails, isCategories],
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        removeClippedSubviews
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default HorizontalImageList;

const styles = StyleSheet.create({
  container: {},
  itemContent: {
    marginHorizontal: SPACING * 3,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 5,
    // borderRadius: BORDER_RADIUS + SPACING * 2,
  },
  itemImage: {
    width: '60%',
    height: '80%',
    borderRadius: BORDER_RADIUS,
    resizeMode: 'cover',
  },
  productDetailContainer:{
    alignItems:'flex-start'
  },
  nameText: {
    fontSize: FONT(14),
    fontWeight: '600',
    color: appColor.black,
  },
  priceText: {
    fontSize: FONT(13),
    fontWeight: '500',
    color: appColor.gray,
  },
  favouriteIcon: {
    position: 'absolute',
    right: 50,
    zIndex: 999,
  },
});
