import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FONT, HEIGHT, WIDTH} from '../helpers/helperFunction';
import {appColor} from './../assets/colors';
import {NavigationProp} from '@react-navigation/native';
import IconComponent from './IconComponent';

type NavbarProps = {
  isFavouriteIcon?: boolean;
  headerText?: string;
};

const Navbar: React.FC<NavbarProps> = ({isFavouriteIcon, headerText}) => {
  return (
    <View style={styles.container}>
      <View style={styles.arrowIconContainer}>
        <IconComponent name="arrow-left" size={25} color={appColor.black} />
      </View>

      <View style={styles.filterAndSearchIconContainer}>
        {headerText !== '' && (
          <Text style={styles.headerTextStyle}>{headerText}</Text>
        )}
        {isFavouriteIcon && (
          <IconComponent
            name="heart"
            size={25}
            color={appColor.black}
            style={{marginRight: WIDTH(15)}}
          />
        )}
        {!isFavouriteIcon && (
          <IconComponent
            name="filter"
            size={25}
            color={appColor.black}
            style={{marginRight: WIDTH(15)}}
          />
        )}
        <IconComponent name="search" size={25} color={appColor.black} />
      </View>
    </View>
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
  arrowIconContainer: {
    marginLeft: WIDTH(10),
  },
  filterAndSearchIconContainer: {
    flexDirection: 'row',
    marginRight: WIDTH(10),
  },
  headerTextStyle: {
    fontSize: FONT(18),
    fontWeight: '800',
    marginRight: WIDTH(50),
    color: appColor.black,
  },
});
