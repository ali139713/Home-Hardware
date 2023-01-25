import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FONT, HEIGHT, WIDTH} from '../helpers/helperFunction';
import {appColor} from './../assets/colors';
import {NavigationProp} from '@react-navigation/native';
import IconComponent from './IconComponent';
import FilterModal from './FilterModal';

type NavbarProps = {
  isFavouriteIcon?: boolean;
  headerText?: string;
  isHideIcons?: boolean;
  rightMargin?: number;
  handlePress?: () => void;
};

const Navbar: React.FC<NavbarProps> = ({
  isFavouriteIcon,
  headerText,
  isHideIcons,
  rightMargin,
  handlePress,
}) => {
  const [showFilter, setShowFilter] = useState<boolean>(false);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.arrowIconContainer} onTouchStart={handlePress}>
          <IconComponent name="arrow-left" size={25} color={appColor.black} />
        </View>

        <View style={styles.filterAndSearchIconContainer}>
          {headerText !== '' && (
            <Text
              style={{
                fontSize: FONT(18),
                fontWeight: '800',
                marginRight: isHideIcons ? rightMargin : WIDTH(80),
                color: appColor.black,
              }}>
              {headerText}
            </Text>
          )}
          {isFavouriteIcon && !isHideIcons && (
            <IconComponent
              name="heart"
              size={25}
              color={appColor.black}
              style={{marginRight: WIDTH(15)}}
            />
          )}
          {!isFavouriteIcon && !isHideIcons && (
            <IconComponent
              name="filter"
              size={25}
              onClick={() => setShowFilter(true)}
              color={appColor.black}
              style={{marginRight: WIDTH(15)}}
            />
          )}
          {!isHideIcons && (
            <IconComponent name="search" size={25} color={appColor.black} />
          )}
        </View>
      </View>
      <FilterModal modalVisible={showFilter} setModalVisible={setShowFilter} />
    </>
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
});
