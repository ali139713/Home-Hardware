import React from 'react';
import {Text, Divider, HStack, VStack} from 'native-base';
import IconComponent from './IconComponent';
import {StyleSheet} from 'react-native';
import {FONT} from '../helpers/helperFunction';
import {appColor} from '../assets/colors';

type OptionTabProps = {
  name: string;
};

const OptionTab = ({name}: OptionTabProps) => {
  return (
    <VStack w="100%">
      <HStack justifyContent="space-between" marginX={5}>
        <Text style={styles.blackText}>{name}</Text>
        <IconComponent name="arrow-right" size={20} color={appColor.black} />
      </HStack>

      <Divider my="7" w="90%" ml={5} />
    </VStack>
  );
};

export default OptionTab;

const styles = StyleSheet.create({
  blackText: {
    fontSize: FONT(17),
    fontWeight: '700',
    color: appColor.black,
  },
});
