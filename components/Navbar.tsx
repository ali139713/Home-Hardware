import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {FONT, HEIGHT, WIDTH} from '../helpers/helperFunction';
import {appColor} from './../assets/colors';
import {NavigationProp} from '@react-navigation/native';
import IconComponent from './IconComponent';
import FilterModal from './FilterModal';
import { HStack, View } from 'native-base';

type NavbarProps = {
  headerText?: string;
  rightIcon?: JSX.Element;
  isTwoRightIcon?:boolean;
  handlePress?: () => void;
};


const Navbar: React.FC<NavbarProps> = ({
  headerText,
  rightIcon,
  isTwoRightIcon,
  handlePress,
}) => {
  const [showFilter, setShowFilter] = useState<boolean>(false);
  return (
    <HStack px={3} style={styles.appHeader}>
   <IconComponent name="arrow-left" size={25} color={appColor.black} handlePress={handlePress} />
   {
    isTwoRightIcon ?  
    (
      <View ml={12}>    
      <Text
         style={styles.headerTextWithMargin}>
         {headerText}
       </Text>
       </View>
    )    
    :     
     (
     <View mr={5}>    
         <Text
            style={styles.headerText}>
            {headerText}
          </Text>
          </View>
     )
   }

    {rightIcon}
  </HStack>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    height: HEIGHT(50),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appHeader: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: HEIGHT(50),
  },
  headerText :{
    fontSize: FONT(18),
    fontWeight: '800',
    color: appColor.black,
  },
  headerTextWithMargin :{
    fontSize: FONT(18),
    fontWeight: '800',
    color: appColor.black,
    marginRight:WIDTH(20)
  }
});
