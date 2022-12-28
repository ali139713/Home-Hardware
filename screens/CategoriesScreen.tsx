import {Text, View} from 'native-base';
import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {appColor} from '../assets/colors';
import {CustomTabView} from '../components/CustomTabView';
import Navbar from '../components/Navbar';
import VerticalImageList from '../components/VerticalImageList';
import {fetchAllProductCategories, fetchCategoryById} from '../helpers/ApiCall';
import {width} from '../helpers/Constant';
import {FONT, HEIGHT, WIDTH} from '../helpers/helperFunction';
import {Screens} from './../helpers/ScreenConstant';

const CategoriesScreen: React.FC<any> = ({navigation, route}) => {
  const {isMainCategory, isSubCategory, showTabView, categoryId} = route.params;

  const [data, setData] = useState<any[]>([]);
  const [moreLoading, setMoreLoading] = useState<boolean>(false);
  const [dataFinished, setDataFinished] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const getCategories = async () => {
    setMoreLoading(true);
    const responseOfCategories: any = await fetchAllProductCategories(page);
    console.log('responseOfCategories', responseOfCategories.length);
    if (responseOfCategories.length === 0) {
      setMoreLoading(false);
      setDataFinished(true);
      return;
    }
    setData(responseOfCategories);
    setMoreLoading(false);
  };

  const getCategoryById = async () => {
    setMoreLoading(true);
    const responseOfCategoryById: any = await fetchCategoryById(categoryId);
    console.log('responseOfCategoryById', responseOfCategoryById);
    if (responseOfCategoryById.length === 0) {
      setMoreLoading(false);
      setDataFinished(true);
      return;
    }
    setData(responseOfCategoryById);
    setMoreLoading(false);
  };

  useEffect(() => {
    if (isMainCategory) {
      getCategories();
    }
    if (isSubCategory) {
      getCategoryById();
    }
  }, [isMainCategory,isSubCategory]);

  const handleFetchMoreData = () => {
    if (!moreLoading && !dataFinished) {
      console.log('inside fetch more');
      setPage(prev => prev + 1);
      getCategories();
    }
  };

  const handleItemPress = (item: any) => {
    console.log('item :', item);
    if (isMainCategory) {
      console.log('inside main category')
      navigation.navigate(Screens.Categories, {
        isSubCategory: true,
        categoryId: item.id,
      });
    } else {
      navigation.navigate(Screens.ProductDetail, {productId: item.id});
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Navbar handlePress={() => navigation.goBack()} />
        <Text style={styles.heading}>
          {isMainCategory ? 'Categories' : 'Furniture'}
        </Text>
        {showTabView && <CustomTabView />}
        <View style={styles.listContainer}>
          <VerticalImageList
            data={data}
            isCategories={isMainCategory ? false : true}
            dataFinished={dataFinished}
            moreLoading={moreLoading}
            fetchMoreData={handleFetchMoreData}
            handleItemPress={handleItemPress}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(CategoriesScreen);

const styles = StyleSheet.create({
  container: {
    width: width,
    height: '100%',
    backgroundColor: appColor.white,
  },

  listContainer: {
    height: '80%',
    width: '95%',
    marginTop: HEIGHT(20),
    // marginLeft:WIDTH(10),
    marginBottom: 20,
    padding: 10,
  },
  heading: {
    fontSize: FONT(20),
    fontWeight: '800',
    marginTop: HEIGHT(30),
    marginLeft: WIDTH(10),
    color: appColor.black,
  },
});
