import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import {appColor} from '../assets/colors';
import {HEIGHT, WIDTH} from '../helpers/helperFunction';

export const Loader = () => {
  return (
    <View style={styles.mainContainer}>
      <ActivityIndicator color={appColor.primary} size={'large'} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    position: 'absolute',
    width: WIDTH(390),
    height: HEIGHT(840),
    top: 0,
    left: 0,
    justifyContent: 'center',
  },
});
