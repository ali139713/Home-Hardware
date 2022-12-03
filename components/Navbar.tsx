import React from 'react';
import {StyleSheet, View} from 'react-native';
import {HEIGHT, WIDTH} from '../helpers/helperFunction';
import VectorIcon from 'react-native-vector-icons/FontAwesome';
import {appColor} from './../assets/colors';

const Navbar: React.FC<any> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.arrowIconContainer}>
        <BackArrowIcon />
      </View>

      <View style={styles.filterAndSearchIconContainer}>
        <FilterIcon />
        <SearchIcon />
      </View>
    </View>
  );
};

export default Navbar;

const BackArrowIcon = () => {
  return <VectorIcon name="arrow-left" size={25} color={appColor.black} />;
};

const FilterIcon = () => {
  return (
    <VectorIcon
      name="filter"
      size={25}
      color={appColor.black}
      style={{marginRight: WIDTH(15)}}
    />
  );
};

const SearchIcon = () => {
  return <VectorIcon name="search" size={25} color={appColor.black} />;
};

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
});
