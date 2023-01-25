import { Text, View } from 'native-base';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { appColor } from '../assets/colors';
import Navbar from '../components/Navbar';
import VerticalImageList from '../components/VerticalImageList';
import { fetchCategoryProductsById } from '../helpers/ApiCall';
import { width } from '../helpers/Constant';
import { FONT, HEIGHT, WIDTH } from '../helpers/helperFunction';
import { Screens } from '../helpers/ScreenConstant';

const CategoryProductsScreen: React.FC<any> = ({navigation, route}) => {
  const {categoryId, categoryName} = route.params;

  const [data, setData] = useState<any[]>([]);
  const [moreLoading, setMoreLoading] = useState<boolean>(true);
  const [dataFinished, setDataFinished] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);


  const getCategoryProductsById = async () => {
    setMoreLoading(true);
    const responseOfCategoryById: any = await fetchCategoryProductsById(categoryId,page);
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
    getCategoryProductsById();

  }, []);

  const handleFetchMoreData = () => {
    if (!moreLoading && !dataFinished) {
      console.log('inside fetch more');
      setPage(prev => prev + 1);
      getCategoryProductsById();
    }
  };

  const handleItemPress = (item: any) => {
    // console.log('item :', item);
      navigation.navigate(Screens.ProductDetail, {productId: item.id});
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Navbar handlePress={() => navigation.goBack()} />
        <Text style={styles.heading}>
         {categoryName}
        </Text>
        <View style={styles.listContainer}>
          <VerticalImageList
            data={data}
            isCategories={true}
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

export default CategoryProductsScreen;

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
