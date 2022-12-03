import {Box, Center, Pressable, useColorModeValue} from 'native-base';
import React, {useState} from 'react';
import {View, Animated, Dimensions, StyleSheet} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {HEIGHT} from '../helpers/helperFunction';
import {appColor} from './../assets/colors';
import {WIDTH} from './../helpers/helperFunction';
import HorizontalImageList from './HorizontalImageList';
import VerticalImageList from './VerticalImageList';
const images = [
  require('../assets/onBoardingImage1.png'),
  require('../assets/onBoardingImage2.png'),
  require('../assets/onBoardingImage3.png'),
];

const FirstRoute = () => (
  <View style={styles.listContainer}>
    <VerticalImageList data={images} isCategories={false} />
  </View>
);

const SecondRoute = () => (
  <Center flex={1} my="4">
    This is Tab 2
  </Center>
);

const ThirdRoute = () => (
  <Center flex={1} my="4">
    This is Tab 3
  </Center>
);

const FourthRoute = () => (
  <Center flex={1} my="4">
    This is Tab 4{' '}
  </Center>
);

const initialLayout = {
  width: Dimensions.get('window').width,
};
const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute,
});

export const CustomTabView = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'first',
      title: 'All',
    },
    {
      key: 'second',
      title: 'Sofa Sets',
    },
    {
      key: 'third',
      title: 'Chairs',
    },
    {
      key: 'fourth',
      title: 'Tables',
    },
  ]);

  const renderTabBar = (props: any) => {
    const inputRange = props.navigationState.routes.map(
      (x: any, i: number) => i,
    );
    return (
      <Box flexDirection="row">
        {props.navigationState.routes.map((route: any, i: number) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex: any) =>
              inputIndex === i ? 1 : 0.5,
            ),
          });
          const color =
            index === i
              ? useColorModeValue('#000', '#e5e5e5')
              : useColorModeValue(appColor.gray, appColor.gray);
          const borderColor =
            index === i
              ? appColor.black
              : useColorModeValue('coolGray.200', 'gray.400');
          return (
            <Box
              borderBottomWidth="3"
              borderColor={borderColor}
              flex={1}
              alignItems="center"
              p="3">
              <Pressable
                onPress={() => {
                  console.log(i);
                  setIndex(i);
                }}>
                <Animated.Text
                  style={{
                    color,
                  }}>
                  {route.title}
                </Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <TabView
      navigationState={{
        index,
        routes,
      }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={{
        marginTop: HEIGHT(5),
      }}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    height: '100%',
    width: '95%',
    marginTop: HEIGHT(20),
    marginLeft: WIDTH(10),
    // backgroundColor: 'red',
  },
});
