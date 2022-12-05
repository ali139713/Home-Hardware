import {
  Box,
  Button,
  Checkbox,
  FormControl,
  HStack,
  Input,
  Select,
  Stack,
  Text,
  View,
} from 'native-base';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {appColor} from '../assets/colors';
import IconComponent from '../components/IconComponent';
import {height, width} from '../helpers/Constant';
import {WIDTH} from '../helpers/helperFunction';
import Navbar from './../components/Navbar';
import {Screens} from './../helpers/ScreenConstant';

const DeliveryDetailScreen: React.FC<any> = ({navigation}) => {
  type SelectType = {
    id: number;
    label: string;
    value: string;
  };

  const countries: SelectType[] = [
    {
      id: 1,
      label: 'Pakistan',
      value: 'Pakistan',
    },
    {
      id: 2,
      label: 'USA',
      value: 'USA',
    },
    {
      id: 3,
      label: 'England',
      value: 'England',
    },
    {
      id: 4,
      label: 'China',
      value: 'China',
    },
  ];

  const provinces: SelectType[] = [
    {
      id: 1,
      label: 'Punjab',
      value: 'Punjab',
    },
    {
      id: 2,
      label: 'Sindh',
      value: 'Sindh',
    },
    {
      id: 3,
      label: 'KPK',
      value: 'KPK',
    },
    {
      id: 4,
      label: 'Balochistan',
      value: 'Balochistan',
    },
  ];

  const [country, setCountry] = useState<string>('');
  const [province, setProvince] = useState<string>('');
  const [isDefaultAddress, setIsDefaultAddress] = useState<boolean>(false);

  const handleSave = () => {
    navigation.navigate(Screens.OrderCompletion);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Navbar
            headerText="Enter Delivery Address"
            isHideIcons
            rightMargin={WIDTH(90)}
          />
          <Stack
            space={2.5}
            alignSelf="center"
            px="4"
            safeArea
            mt="4"
            w={{
              base: '95%',
              md: '25%',
            }}>
            <Box>
              <Text bold fontSize="xl" mb="4">
                Select Country
              </Text>
              <FormControl mb="5">
                <Select
                  selectedValue={country}
                  minWidth="200"
                  accessibilityLabel="Choose Service"
                  placeholder="Choose Country"
                  _selectedItem={{
                    bg: 'teal.600',
                    endIcon: (
                      <IconComponent
                        name="arrow-bottom"
                        size={10}
                        color={appColor.lightGray}
                      />
                    ),
                  }}
                  mt={1}
                  variant="underlined"
                  onValueChange={itemValue => setCountry(itemValue)}>
                  {countries.map((country: SelectType) => (
                    <Select.Item
                      key={country.id}
                      label={country.label}
                      value={country.value}
                    />
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box>
              <Text bold fontSize="xl" mb="4">
                Full Name
              </Text>
              <FormControl mb="5">
                <Input
                  isRequired
                  variant="underlined"
                  focusOutlineColor={appColor.lightGray}
                />
              </FormControl>
            </Box>
            <Box>
              <Text bold fontSize="xl" mb="4">
                Phone Number
              </Text>
              <FormControl mb="5">
                <Input
                  isRequired
                  variant="underlined"
                  focusOutlineColor={appColor.lightGray}
                />
              </FormControl>
            </Box>
            <Box>
              <Text bold fontSize="xl" mb="4">
                Address
              </Text>
              <FormControl mb="5">
                <Input
                  isRequired
                  variant="underlined"
                  focusOutlineColor={appColor.lightGray}
                />
              </FormControl>
            </Box>
            <Box>
              <Text bold fontSize="xl" mb="4">
                City
              </Text>
              <FormControl mb="5">
                <Input
                  isRequired
                  variant="underlined"
                  focusOutlineColor={appColor.lightGray}
                />
              </FormControl>
            </Box>
            <HStack w="100%">
              <Box w="50%">
                <Text bold fontSize="xl" mb="4">
                  Province
                </Text>
                <FormControl mb="5">
                  <Select
                    selectedValue={province}
                    minWidth="100"
                    accessibilityLabel="Choose Province"
                    placeholder="Choose Province"
                    _selectedItem={{
                      bg: 'teal.600',
                      endIcon: (
                        <IconComponent
                          name="arrow-bottom"
                          size={10}
                          color={appColor.lightGray}
                        />
                      ),
                    }}
                    // mt={1}
                    variant="underlined"
                    onValueChange={itemValue => setProvince(itemValue)}>
                    {provinces.map((province: SelectType) => (
                      <Select.Item
                        key={province.id}
                        label={province.label}
                        value={province.value}
                      />
                    ))}
                  </Select>
                </FormControl>
              </Box>

              <Box w="30%" ml={12} mt={0}>
                <Text bold fontSize="xl" mb={4}>
                  Zip Code
                </Text>
                <FormControl mb="5">
                  <Input
                    isRequired
                    variant="underlined"
                    focusOutlineColor={appColor.lightGray}
                  />
                </FormControl>
              </Box>
            </HStack>
            <HStack space={6}>
              <Checkbox
                shadow={2}
                value="yes"
                accessibilityLabel="Is Default Address ?"
                colorScheme="danger"
                onChange={setIsDefaultAddress}>
                Make this my default address.
              </Checkbox>
            </HStack>
            <HStack justifyContent="center">
              <Button
                mt="10"
                mb="10"
                bg={appColor.black}
                w="90%"
                onPress={handleSave}>
                Save & Continue
              </Button>
            </HStack>
          </Stack>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DeliveryDetailScreen;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: '100%',
    backgroundColor: appColor.white,
  },
});
