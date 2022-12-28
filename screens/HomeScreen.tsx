import {Text, View} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {appColor} from '../assets/colors';
import {Loader} from '../components/Loader';
import {fetchAllProductCategories, fetchAllProducts} from '../helpers/ApiCall';
import {width} from '../helpers/Constant';
import {FONT, HEIGHT, WIDTH} from '../helpers/helperFunction';
import HorizontalImageList from './../components/HorizontalImageList';
import {Screens} from './../helpers/ScreenConstant';

const HomeScreen: React.FC<any> = ({navigation}) => {
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getProducts = async () => {
    setLoading(true);
    const responseOfProducts: any = await fetchAllProducts();
    setProducts(responseOfProducts);
    setLoading(false);
    // console.log('responseOfProducts', responseOfProducts.length);
  };

  const getCategories = async () => {
    setLoading(true);
    const responseOfCategories: any = await fetchAllProductCategories();
    // console.log('responseOfCategories', responseOfCategories.length);
    setCategories(responseOfCategories);
    setLoading(false);
  };

  useEffect(() => {
    async function fetchData() {
      getProducts();
      getCategories();
    }
    fetchData();
  }, []);

  const handleViewAllClick = (type: string) => {
    if (type === 'Categories') {
      navigation.navigate(Screens.Categories, {isMainCategory: true});
    } else {
      navigation.navigate(Screens.Categories, {isMainCategory: false});
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
