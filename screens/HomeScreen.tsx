import {Text, View} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {appColor} from '../assets/colors';
import {Loader} from '../components/Loader';
import {fetchAllProducts} from '../helpers/ApiCall';
import {width} from '../helpers/Constant';
import {FONT, HEIGHT, WIDTH} from '../helpers/helperFunction';
import HorizontalImageList from './../components/HorizontalImageList';
import {Screens} from './../helpers/ScreenConstant';

const HomeScreen: React.FC<any> = ({navigation}) => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [moreLoading, setMoreLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  // const images = [
  //   require('../assets/onBoardingImage1.png'),
  //   require('../assets/onBoardingImage2.png'),
  //   require('../assets/onBoardingImage3.png'),
  // ];

  useEffect(() => {
    async function getProducts() {
      setLoading(true);

      const responseOfProducts: any = await fetchAllProducts(page);
      const filteredProducts = responseOfProducts.filter(
        (product: any) => product.images.length > 0,
      );
      if (filteredProducts.length === 0) {
        setPage(prev => prev + 1);
      }
      setProducts(filteredProducts);

      setLoading(false);
      console.log('responseOfProducts', responseOfProducts.length);
      console.log('filteredProducts', filteredProducts.length);
    }
    getProducts();
  }, [page]);

  const handleViewAllClick = () => {
    navigation.navigate(Screens.Categories, {isMainCategory: true});
  };

  const handleSetPage = () => {
    setMoreLoading(true);
    setPage(prev => prev + 1);
    setMoreLoading(false);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>Discover</Text>
          <View style={styles.carouselContainer}>
            <HorizontalImageList
              data={products}
              handleSetPage={handleSetPage}
              moreLoading={moreLoading}
            />
          </View>
          <View style={styles.categoryTextContainer}>
            <Text style={styles.subHeading}>Categories</Text>
            <Text style={styles.subHeading} onPress={handleViewAllClick}>
              View All
            </Text>
          </View>
          <View style={styles.categoryListContainer}>
            <HorizontalImageList
              data={products}
              handleSetPage={handleSetPage}
              moreLoading={moreLoading}
            />
          </View>
          <View style={styles.bestSellingTextContainer}>
            <Text style={styles.subHeading}>Best Selling</Text>
            <Text style={styles.subHeading} onPress={handleViewAllClick}>
              View All
            </Text>
          </View>
          <View style={styles.bestSellingListContainer}>
            <HorizontalImageList
              data={products}
              handleSetPage={handleSetPage}
              moreLoading={moreLoading}
            />
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
    height: HEIGHT(250),
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
    height: HEIGHT(150),
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
