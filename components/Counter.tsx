import {Card, Container, HStack} from 'native-base';
import React from 'react';
import {Text} from 'react-native';
import {appColor} from '../assets/colors';
import IconComponent from './IconComponent';

type CounterProps = {
  flexDirection?: any;
  iconSize?: number;
};

const Counter = ({flexDirection, iconSize}: CounterProps) => {
  return (
    <HStack
      flexDirection={flexDirection ? flexDirection : 'row'}
      justifyContent="space-between"
      space={3}>
      <IconComponent
        name="plus"
        size={iconSize ? iconSize : 25}
        color={appColor.black}
      />
      <Text>01</Text>
      <IconComponent
        name="minus"
        size={iconSize ? iconSize : 25}
        color={appColor.black}
      />
    </HStack>
  );
};

export default Counter;
