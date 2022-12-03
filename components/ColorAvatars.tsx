import {Avatar, HStack} from 'native-base';
import React from 'react';

const ColorAvatars = () => {
  return (
    <HStack justifyContent="center" alignItems="center" space={2} mr={3}>
      <Avatar bg="cyan.500" size={8}></Avatar>
      <Avatar bg="indigo.500" size={8}></Avatar>
      <Avatar bg="amber.500" size={8}></Avatar>
    </HStack>
  );
};

export default ColorAvatars;
