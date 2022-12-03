import {Box, Center, Pressable, useColorModeValue} from 'native-base';
import React, {useState} from 'react';
import {Animated, Dimensions, StatusBar} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {HEIGHT} from '../helpers/helperFunction';
import {appColor} from './../assets/colors';

const FirstRoute = () => (
  <Center flex={1} my="4">
    This is Tab 1
  </Center>
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
