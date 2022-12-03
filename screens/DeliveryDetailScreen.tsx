import {Text, View} from 'native-base';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {appColor} from '../assets/colors';
import {height, width} from '../helpers/Constant';

const DeliveryDetailScreen: React.FC<any> = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>This is delivery detail screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default DeliveryDetailScreen;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: '100%',
    backgroundColor: appColor.white,
  },
});
