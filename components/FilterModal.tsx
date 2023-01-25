import React, {useState} from 'react';
import {Divider, Modal, Radio, Stack, Text, View} from 'native-base';
import {StyleSheet, TouchableHighlight} from 'react-native';
import {appColor} from '../assets/colors';
import {FONT, HEIGHT, WIDTH} from '../helpers/helperFunction';
import {width} from '../helpers/Constant';
import IconComponent from './IconComponent';
type ModalProps = {
  modalVisible: boolean;
  setModalVisible: Function;
};
const FilterModal = ({modalVisible, setModalVisible}: ModalProps) => {
  const [selectedValue, setSelectedValue] = useState<string>('featured');
  return (
    <Modal
      animationPreset="slide"
      isOpen={modalVisible}
      background={appColor.white}
      onClose={() => {
        setModalVisible(false);
      }}>
      <View style={styles.container}>
        <View style={styles.categoryTextContainer}>
          <Text style={styles.heading}>Filter</Text>
          <IconComponent
            name="times-circle"
            onClick={() => setModalVisible(false)}
            size={35}
            color={appColor.black}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.subHeading}>Sort By</Text>
          <Radio.Group
            name="myRadioGroup"
            accessibilityLabel="favorite number"
            colorScheme="gray"
            value={selectedValue}
            onChange={nextValue => {
              setSelectedValue(nextValue);
            }}>
            <Radio size={'sm'} value="featured" my="2">
              <Text style={styles.radioText}>Featured</Text>
            </Radio>
            <Radio size={'sm'} value="newest" my="2">
              <Text style={styles.radioText}>Newest</Text>
            </Radio>
            <Radio size={'sm'} value="price" my="2">
              <Text style={styles.radioText}>Price $-$$</Text>
            </Radio>
            <Radio size={'sm'} value="price$" my="2">
              <Text style={styles.radioText}>Price $$-$</Text>
            </Radio>
          </Radio.Group>
          <Divider style={styles.divider} />
        </View>
        <View style={styles.content}>
          <Text style={styles.subHeading}>Shop By Price</Text>
          <Radio.Group
            name="myRadioGroup"
            accessibilityLabel="favorite number"
            colorScheme="gray"
            value={selectedValue}
            onChange={nextValue => {
              setSelectedValue(nextValue);
            }}>
            <Radio size={'sm'} value="featured" my="2">
              <Text style={styles.radioText}>Featured</Text>
            </Radio>
            <Radio size={'sm'} value="newest" my="2">
              <Text style={styles.radioText}>Newest</Text>
            </Radio>
            <Radio size={'sm'} value="price" my="2">
              <Text style={styles.radioText}>Price $-$$</Text>
            </Radio>
            <Radio size={'sm'} value="price$" my="2">
              <Text style={styles.radioText}>Price $$-$</Text>
            </Radio>
          </Radio.Group>
          <Divider style={styles.divider} />
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: '100%',
    backgroundColor: appColor.white,
  },
  content: {
    width: '95%',
    marginTop: HEIGHT(5),
    marginLeft: HEIGHT(10),
  },
  divider: {marginTop: HEIGHT(15)},
  subHeading: {
    fontSize: FONT(16),
    fontWeight: '800',
    color: appColor.black,
    width: '90%',
    marginTop: HEIGHT(10),
    marginBottom: HEIGHT(10),
  },
  radioText: {
    fontSize: FONT(12),
    fontFamily: '',
    fontWeight: '800',
  },
  categoryTextContainer: {
    height: HEIGHT(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%',
    marginTop: HEIGHT(10),
  },
  heading: {
    fontSize: FONT(22),
    fontWeight: '800',
    marginLeft: WIDTH(10),
    color: appColor.black,
  },
});
