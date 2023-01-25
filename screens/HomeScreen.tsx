import {Text, View} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {appColor} from '../assets/colors';
import {Loader} from '../components/Loader';
import {fetchAllProductCategories, fetchAllProducts} from '../helpers/ApiCall';
import {width} from '../helpers/Constant';
import {FONT, HEIGHT, WIDTH, wrapperForAllSettledPromises} from '../helpers/helperFunction';
import { notifyToast } from '../toast/toast';
import HorizontalImageList from './../components/HorizontalImageList';
import {Screens} from './../helpers/ScreenConstant';

const HomeScreen: React.FC<any> = ({navigation}) => {
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getProducts =  () => {
    const responseOfProducts: any =  fetchAllProducts();
    return responseOfProducts
  };

  const getCategories =  () => {
    const responseOfCategories: any =  fetchAllProductCategories();
    return responseOfCategories
  };

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      const [products, categories] = await wrapperForAllSettledPromises([
       getProducts(),
      getCategories()
      ]);
      if(products.status === 'rejected'){
        notifyToast('Failed to fetch products')
      }
      if(categories.status === 'rejected'){
        notifyToast('Failed to fetch categories');
      }
      
      if(products.status === 'fulfilled'){
        setProducts(products.value)
      }
      if(categories.status === 'fulfilled'){
        setCategories(categories.value)
      }
      setLoading(false)
    }
    fetchData();
  }, []);

 

  const handleViewAllClick = (type: string) => {
    if (type === 'Categories') {
      navigation.navigate(Screens.Categories);
    } else {
      // navigation.navigate(Screens.Categories, {isMainCategory: false});
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>Discover</Text>
          <View style={styles.carouselContainer}>
            <HorizontalImageList data={products} />
          </View>
          <View style={styles.categoryTextContainer}>
            <Text style={styles.subHeading}>Categories</Text>
            <Text
              style={styles.subHeading}
              onPress={() => handleViewAllClick('Categories')}>
              View All
            </Text>
          </View>
          <View style={styles.categoryListContainer}>
            <HorizontalImageList data={categories} isCategories />
          </View>
          <View style={styles.bestSellingTextContainer}>
            <Text style={styles.subHeading}>Best Selling</Text>
            <Text
              style={styles.subHeading}
              onPress={() => handleViewAllClick('Best Selling')}>
              View All
            </Text>
          </View>
          <View style={styles.bestSellingListContainer}>
            <HorizontalImageList data={products} isProductDetails />
          </View>
          <View style={styles.adContainer}>
            <Image
              style={{height: '100%', width: '100%'}}
              source={require('../assets/splashScreen.png')}
            />
          </View>
        </View>
        {loading && <Loader />}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: '100%',
    backgroundColor: appColor.white,
  },

  heading: {
    fontSize: FONT(20),
    fontWeight: '800',
    marginTop: HEIGHT(30),
    marginLeft: WIDTH(10),
    color: appColor.black,
  },

  subHeading: {
    fontSize: FONT(16),
    fontWeight: '600',
    color: appColor.black,
  },

  carouselContainer: {
    height: HEIGHT(200),
    width: '95%',
    marginTop: HEIGHT(20),
    marginLeft: WIDTH(10),
  },
  categoryTextContainer: {
    height: HEIGHT(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%',
    marginTop: HEIGHT(20),
    marginLeft: WIDTH(10),
  },
  categoryListContainer: {
    height: HEIGHT(150),
    width: '95%',
    marginTop: HEIGHT(20),
    marginLeft: WIDTH(10),
  },
  bestSellingTextContainer: {
    height: HEIGHT(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%',
    marginTop: HEIGHT(20),
    marginLeft: WIDTH(10),
  },
  bestSellingListContainer: {
    height: HEIGHT(250),
    width: '95%',
    marginTop: HEIGHT(20),
    marginLeft: WIDTH(10),
  },
  adContainer: {
    height: HEIGHT(350),
    width: '95%',
    marginTop: HEIGHT(20),
    marginLeft: WIDTH(10),
    backgroundColor: 'red',
  },
});
