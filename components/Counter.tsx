import {Card, Container, HStack} from 'native-base';
import React from 'react';
import {Text} from 'react-native';
import {appColor} from '../assets/colors';
import IconComponent from './IconComponent';

const Counter = () => {
  return (
    <HStack justifyContent="space-between" space={3}>
      <IconComponent name="plus" size={25} color={appColor.black} />
      <Text>01</Text>
      <IconComponent name="minus" size={25} color={appColor.black} />
    </HStack>
  );
};

export default Counter;
