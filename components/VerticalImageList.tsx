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
import VectorIcon from 'react-native-vector-icons/FontAwesome';
import IconComponent from './IconComponent';

const {width} = Dimensions.get('window');

const SPACING = 5;
const ITEM_LENGTH = width * 0.2; // Item is a square. Therefore, its height and width are of the same length.
const BORDER_RADIUS = 20;

type VerticalImageListPros = {
  data: any;
  isCategories: boolean;
  handleItemPress?: () => any;
};

const VerticalImageList: React.FC<VerticalImageListPros> = ({
  data,
  isCategories,
  handleItemPress,
}) => {
  return (
    <View>
      <FlatList
        data={data}
        numColumns={2}
        nestedScrollEnabled
        renderItem={({item, index}) => {
          return (
            <>
              <View style={styles.itemContent} onTouchStart={handleItemPress}>
                {isCategories && (
                  <IconComponent
                    name="heart"
                    size={20}
                    color={isCategories ? appColor.red : appColor.white}
                    style={styles.favouriteIcon}
                  />
                )}
                <Image
                  style={{height: HEIGHT(250), width: WIDTH(200)}}
                  source={require('../assets/onBoardingImage1.png')}
                />
                {isCategories && (
                  <Text style={styles.nameText}> Wooden Sofa</Text>
                )}
                {isCategories && <Text style={styles.priceText}>2000$</Text>}
              </View>
            </>
          );
        }}
        keyExtractor={item => item}
      />
    </View>
  );
};

export default VerticalImageList;

const styles = StyleSheet.create({
  itemContent: {
    position: 'relative',
    // marginHorizontal: SPACING,
    marginVertical: HEIGHT(15),
    alignItems: 'flex-start',
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
