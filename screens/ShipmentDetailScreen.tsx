import {Text, View} from 'native-base';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {appColor} from '../assets/colors';
import {height, width} from '../helpers/Constant';

const ShipmentDetailScreen: React.FC<any> = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>This is shipment detail screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default ShipmentDetailScreen;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: '100%',
    backgroundColor: appColor.white,
  },
});
