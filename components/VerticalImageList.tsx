import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {appColor} from '../assets/colors';
import {FONT, HEIGHT, WIDTH} from '../helpers/helperFunction';
import IconComponent from './IconComponent';

type VerticalImageListPros = {
  data: any;
  isCategories: boolean;
  handleItemPress?: () => any;
  fetchMoreData?: () => any;
};

const VerticalImageList: React.FC<VerticalImageListPros> = ({
  data,
  isCategories,
  handleItemPress,
  fetchMoreData,
}) => {
  const renderFooter = () => {
    return <ActivityIndicator color={appColor.primary} />;
  };

  const renderEmpty = () => {
    return (
      <View>
        <Text>No more results to show</Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={item => item}
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
        ListFooterComponent={renderFooter}
        ListEmptyComponent={renderEmpty}
        onEndReachedThreshold={0.1}
        onEndReached={fetchMoreData}
      />
    </View>
  );
};

export default VerticalImageList;

const styles = StyleSheet.create({
  itemContent: {
    position: 'relative',
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
