import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const {width} = Dimensions.get('window');

const SPACING = 5;
const ITEM_LENGTH = width * 0.8; // Item is a square. Therefore, its height and width are of the same length.
const BORDER_RADIUS = 20;

const HorizontalImageList: React.FC<any> = ({data}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <View style={{width: ITEM_LENGTH}}>
              <View style={styles.itemContent}>
                <Image source={data[index]} style={styles.itemImage} />
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
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: BORDER_RADIUS + SPACING * 2,
  },
  itemImage: {
    width: '100%',
    height: ITEM_LENGTH,
    borderRadius: BORDER_RADIUS,
    resizeMode: 'cover',
  },
});
