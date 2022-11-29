import {useNavigation} from '@react-navigation/native';
import {Button} from 'native-base';
import React, {useCallback, memo, useRef, useState} from 'react';
import {
  FlatList,
  View,
  Dimensions,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import {appColor} from '../assets/colors';
import {HEIGHT, WIDTH} from './../helpers/helperFunction';
import {Screens} from './../helpers/ScreenConstant';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

interface paginationProps {
  index: number;
}

interface sliderDataProps {
  data: sliderData;
  index: number;
}

type sliderData = {
  id: number;
  image: string;
  title: string;
  subtitle: string;
};

const styles = StyleSheet.create({
  slide: {
    height: windowHeight,
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideImage: {width: windowWidth * 0.8, height: windowHeight * 0.4},
  slideTitle: {fontSize: 24, color: appColor.black, marginTop: HEIGHT(50)},
  slideSubtitle: {
    fontSize: 18,
    width: WIDTH(250),
    textAlign: 'center',
    marginVertical: HEIGHT(10),
  },

  pagination: {
    position: 'absolute',
    bottom: HEIGHT(350),
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
  },
  paginationDotActive: {backgroundColor: 'red'},
  paginationDotInactive: {backgroundColor: 'gray'},

  carousel: {flex: 1},
});

const slideList = [
  {
    id: 1,
    image: require('../assets/onBoardingImage1.png'),
    title: 'Onboarding Screen 1',
    subtitle: 'All types of home essentials for you. Shop on the GO!',
  },
  {
    id: 2,
    image: require('../assets/onBoardingImage2.png'),
    title: 'Onboarding Screen 2',
    subtitle: 'All types of home essentials for you. Shop on the GO!',
  },
  {
    id: 3,
    image: require('../assets/onBoardingImage3.png'),
    title: 'Onboarding Screen 3',
    subtitle: 'All types of home essentials for you. Shop on the GO!',
  },
];

const images = [
  require('../assets/onBoardingImage1.png'),
  require('../assets/onBoardingImage2.png'),
  require('../assets/onBoardingImage3.png'),
];

function Pagination({index}: paginationProps) {
  return (
    <View style={styles.pagination} pointerEvents="none">
      {slideList.map((_, i) => {
        return (
          <View
            key={i}
            style={[
              styles.paginationDot,
              index === i
                ? styles.paginationDotActive
                : styles.paginationDotInactive,
            ]}
          />
        );
      })}
    </View>
  );
}

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  const flatListRef = useRef<any>();

  const navigation = useNavigation<any>();

  indexRef.current = index;
  const onScroll = useCallback((event: any) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);

    const distance = Math.abs(roundIndex - index);

    // Prevent one pixel triggering setIndex in the middle
    // of the transition. With this we have to scroll a bit
    // more to trigger the index change.
    const isNoMansLand = 0.4 < distance;

    if (roundIndex !== indexRef.current && !isNoMansLand) {
      setIndex(roundIndex);
    }
  }, []);

  const Slide = function Slide({data, index}: sliderDataProps) {
    return (
      <View style={styles.slide}>
        <Image source={images[index]} style={styles.slideImage}></Image>
        <Text style={styles.slideTitle}>{data.title}</Text>
        <Text style={styles.slideSubtitle}>{data.subtitle}</Text>
        <Button
          colorScheme="danger"
          width={200}
          marginTop={10}
          onPress={() =>
            index === 2
              ? navigation.navigate(Screens.Login)
              : flatListRef.current.scrollToIndex({
                  animated: true,
                  index: index + 1,
                })
          }>
          {index === 2 ? 'Get Started' : 'Next'}
        </Button>
      </View>
    );
  };

  const flatListOptimizationProps = {
    initialNumToRender: 0,
    maxToRenderPerBatch: 1,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    windowSize: 2,
    keyExtractor: useCallback((s: any) => String(s.id), []),
    getItemLayout: useCallback(
      (_: any, index: number) => ({
        index,
        length: windowWidth,
        offset: index * windowWidth,
      }),
      [],
    ),
  };

  const renderItem = useCallback(function renderItem({item, index}: any) {
    return <Slide data={item} index={index} />;
  }, []);

  return (
    <>
      <FlatList
        data={slideList}
        ref={flatListRef}
        style={styles.carousel}
        renderItem={renderItem}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={onScroll}
        {...flatListOptimizationProps}
      />
      <Pagination index={index}></Pagination>
    </>
  );
}
