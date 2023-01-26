import {StackActions} from '@react-navigation/native';
import {Button, Divider, HStack} from 'native-base';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {appColor} from '../assets/colors';
import Counter from '../components/Counter';
import HorizontalImageList from '../components/HorizontalImageList';
import IconComponent from '../components/IconComponent';
import {Loader} from '../components/Loader';
import Navbar from '../components/Navbar';
import OrderContext from '../context/OrderContext';
import {fetchAllProducts, fetchProductById} from '../helpers/ApiCall';
import {
  FONT,
  HEIGHT,
  truncateText,
  WIDTH,
  wrapperForAllSettledPromises,
} from '../helpers/helperFunction';
import {notifyToast} from '../toast/toast';
import ColorAvatars from './../components/ColorAvatars';
import {Screens} from './../helpers/ScreenConstant';

const {width} = Dimensions.get('window');
const SPACING = 5;
const ITEM_LENGTH = width * 0.8; // Item is a square. Therefore, its height and width are of the same length.
const BORDER_RADIUS = 20;

const ProductDetailScreen = ({navigation, route}: any) => {
  const {productId} = route.params;
  const {addItemToCart} = useContext(OrderContext);


  const [productData, setProductData] = useState<any>({});
  const [bestSelling, setBestSelling] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [count, setCount] = useState<number>(1);

  const getProductById = () => {
    const responseOfProductById: any = fetchProductById(productId);
    return responseOfProductById;
  };

  const getProducts = () => {
    const responseOfProducts: any = fetchAllProducts();
    return responseOfProducts;
  };

  const handleCounterPress = (type: string) => {
    if (type === 'plus') {
      setCount((prev: number) => prev + 1);
    } 
    if( type === 'minus' && count === 1){
      return;
    }
    if(type === 'minus' && count > 1){
      setCount((prev: number) => prev - 1);
    }
  };

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const [products, productById] = await wrapperForAllSettledPromises([
        getProducts(),
        getProductById(),
      ]);
      if (products.status === 'rejected') {
        notifyToast('Failed to fetch products');
      }
      if (productById.status === 'rejected') {
        notifyToast('Failed to fetch product by Id');
      }

      if (products.status === 'fulfilled') {
        setBestSelling(products.value);
      }
      if (productById.status === 'fulfilled') {
        setProductData(productById.value);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  const handleAddToCart = () => {
    addItemToCart({
      id: productData.id,
      name: productData.name,
      image: productData.images[0].src,
      price: parseInt(productData.price),
      quantity:count,
    });
    navigation.navigate(Screens.CartNavigation);
  };

  const renderItem = useCallback(({item}: any) => {
    return (
      <View style={{width: ITEM_LENGTH}}>
        <View style={styles.itemContent}>
          <Image
            source={
              item !== null
                ? {uri: item.src}
                : require('../assets/placeholder.jpeg')
            }
            style={styles.itemImage}
          />
        </View>
      </View>
    );
  }, []);

  return  (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Navbar
            isFavouriteIcon={true}
            headerText={
             !loading ? productData?.name?.split(' ')[0] +
              ' ' +
              productData?.name?.split(' ')[1] : ''}
            
            handlePress={() => navigation.pop()}
          />
          <Image
            style={styles.imageStyles}
            source={
              productData?.images
                ? {uri: productData.images[0].src}
                : require('../assets/placeholder.jpeg')
            }
          />
          <View style={styles.listContainer}>
            <View style={styles.container}>
              <FlatList
                data={productData.images}
                renderItem={renderItem}
                removeClippedSubviews
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
              />
            </View>
          </View>
          <View style={styles.categoryNameAndColorContainer}>
            <View>
              <Text style={styles.subHeading}>
                {productData?.categories
                  ? productData?.categories[0]?.name
                  : 'Category name'}
              </Text>
            </View>
            <ColorAvatars />
          </View>
          <View style={styles.productNameAndPriceContainer}>
            <Text style={styles.heading}>{productData.name}</Text>
            {/* <Text style={styles.heading}>Sofa Set</Text> */}
            <Text style={styles.subHeading}>{productData.price}$</Text>
          </View>
          <View style={styles.counterAndSocialLinksContainer}>
            <View>
              <Counter count={count} handleCounterPress={handleCounterPress} />
            </View>
            <HStack mr={2} space={3}>
              <IconComponent name="facebook" size={25} color={appColor.black} />
              <IconComponent
                name="instagram"
                size={25}
                color={appColor.black}
              />
              <IconComponent name="linkedin" size={25} color={appColor.black} />
            </HStack>
          </View>
          <View style={styles.descriptionTextContainer}>
            <Text style={styles.descriptionText}>
              {productData.description !== ''
                ? productData.description?.slice(3,productData.description.length -5)
                : productData.short_description?.slice(3,productData.short_description.length -5)}
            </Text>
          </View>
          <HStack justifyContent="center">
            <Button
              mt="10"
              bg={appColor.black}
              backgroundColor={appColor.black}
              w="90%"
              onPress={() => handleAddToCart()}>
              Add To Cart
            </Button>
          </HStack>
          <Divider my="10" w="90%" ml={5} color={appColor.lightGray} />
          <Text style={styles.heading}>You Might Also Like</Text>
          <View style={styles.relevantProductsListContainer}>
            <HorizontalImageList data={bestSelling} isProductDetails />
          </View>
        </View>
      </ScrollView>
      {loading && <Loader />}
    </SafeAreaView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: '100%',
    backgroundColor: appColor.white,
  },
  imageStyles: {
    height: HEIGHT(300),
    width: '95%',
    marginTop: HEIGHT(10),
  },

  listContainer: {
    height: HEIGHT(150),
    width: '95%',
    marginTop: HEIGHT(20),
    marginLeft: WIDTH(10),
  },
  categoryNameAndColorContainer: {
    height: HEIGHT(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%',
    marginTop: HEIGHT(20),
    marginLeft: WIDTH(10),
  },
  productNameAndPriceContainer: {
    height: HEIGHT(120),
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    width: '95%',
    marginTop: HEIGHT(0),
    marginLeft: WIDTH(10),
  },
  counterAndSocialLinksContainer: {
    height: HEIGHT(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%',
    marginTop: HEIGHT(20),
    marginLeft: WIDTH(15),
  },
  descriptionTextContainer: {
    height: HEIGHT(250),
    width: '95%',
    marginTop: HEIGHT(20),
    marginLeft: WIDTH(10),
  },
  relevantProductsListContainer: {
    height: HEIGHT(450),
    width: '95%',
    marginTop: HEIGHT(20),
    marginLeft: WIDTH(10),
  },
  heading: {
    fontSize: FONT(20),
    fontWeight: '800',
    marginTop: HEIGHT(10),
    marginLeft: WIDTH(10),
    color: appColor.black,
  },
  subHeading: {
    fontSize: FONT(18),
    fontWeight: '600',
    marginLeft: WIDTH(10),
    color: appColor.gray,
  },
  descriptionText: {
    fontSize: FONT(16),
    fontWeight: '500',
    textAlign: 'justify',
    color: appColor.black,
  },
  itemContent: {
    marginHorizontal: SPACING * 3,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 5,
    // borderRadius: BORDER_RADIUS + SPACING * 2,
  },
  itemImage: {
    width: '50%',
    height: '80%',
    borderRadius: BORDER_RADIUS,
    resizeMode: 'cover',
  },
  productDetailContainer: {
    alignItems: 'flex-start',
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
