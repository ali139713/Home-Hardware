import { Pressable } from 'native-base';
import React, { useCallback } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { appColor } from '../assets/colors';
import { FONT, HEIGHT, truncateText, WIDTH } from '../helpers/helperFunction';
import IconComponent from './IconComponent';

type VerticalImageListPros = {
  data: any;
  isCategories: boolean;
  dataFinished?: boolean;
  moreLoading?: boolean;
  handleItemPress: (item: any) => any;
  fetchMoreData?: () => any;
};

const VerticalImageList: React.FC<VerticalImageListPros> = ({
  data,
  isCategories,
  dataFinished,
  moreLoading,
  handleItemPress,
  fetchMoreData,
}) => {
  const renderFooter = () => {
    return <>{moreLoading && <ActivityIndicator color={appColor.primary} />}</>;
  };

  const renderEmpty = () => {
    return (
      <View style={styles.emptyListContainer}>
        {dataFinished && (
          <Text style={styles.emptyText}>No more results to show</Text>
        )}
      </View>
    );
  };

  const renderItem = useCallback(
    ({item}: any) => {
      return (
        <>
          {!moreLoading && (
            <Pressable
              style={styles.itemContent}
              onPress={() => handleItemPress(item)}>
              {isCategories && (
                <IconComponent
                  name="heart"
                  size={20}
                  color={isCategories ? appColor.red : appColor.white}
                  style={styles.favouriteIcon}
                />
              )}
              <Image
                style={{height: HEIGHT(140), width: WIDTH(160)}}
               
                // source={
                //   item?.images !== null
                //     ? {uri: item?.images[0].src}
                //     : require('../assets/placeholder.jpeg')
                // }
                source={isCategories ? {uri: item?.images[0]?.src} : require('../assets/placeholder.jpeg')}
              />

              {isCategories && (
                <View style={styles.productDetailContainer}>
                  <Text style={styles.nameText}>
                    {truncateText(item.name, 20)}
                  </Text>
                  <Text style={styles.priceText}>
                    {item.price ? `${item.price}` + '$' : 'N/A'}
                  </Text>
                </View>
              )}
            </Pressable>
          )}
        </>
      );
    },
    [moreLoading, isCategories],
  );

  return (
    <View>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={renderEmpty}
        onEndReachedThreshold={0.2}
        onEndReached={fetchMoreData}
      />
    </View>
  );
};

export default React.memo(VerticalImageList);

const styles = StyleSheet.create({
  itemContent: {
    position: 'relative',
    alignItems: 'flex-start',
    marginHorizontal:WIDTH(10),
    marginVertical: HEIGHT(15),
    // backgroundColor:'red'
  },
  productDetailContainer: {
    justifyContent:'center',
    alignItems: 'flex-start',
  },
  emptyListContainer: {
    alignItems: 'center',
    justifyContent: 'center',
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
  emptyText: {
    fontSize: FONT(18),
    fontWeight: '600',
    marginTop: '60%',
    color: appColor.black,
  },
  favouriteIcon: {
    position: 'absolute',
    right: 50,
    zIndex: 999,
  },
});
