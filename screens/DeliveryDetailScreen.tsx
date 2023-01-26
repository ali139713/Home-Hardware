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
import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import {appColor} from '../assets/colors';
import IconComponent from '../components/IconComponent';
import { Loader } from '../components/Loader';
import OrderContext from '../context/OrderContext';
import {createOrder, fetchPaymentMethods, fetchShippingZones} from '../helpers/ApiCall';
import {height, width} from '../helpers/Constant';
import {WIDTH, wrapperForAllSettledPromises} from '../helpers/helperFunction';
import {notifyToast} from '../toast/toast';
import Navbar from './../components/Navbar';
import {Screens} from './../helpers/ScreenConstant';

const DeliveryDetailScreen: React.FC<any> = ({navigation}) => {
  type SelectType = {
    id: number;
    label: string;
    value: string;
  };

  interface IShipmentDetail {
    fullName:string;
    phoneNo:string;
    address:string;
    city:string;
    province:string;
    zipCode:string;
  }

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

  const { cartItems } = useContext(OrderContext)

  const [countries, setCountries] = useState<SelectType[]>([]);
  const [methods, setMethods] = useState<any>([]);
  const [country, setCountry] = useState<string>('');
  const [province, setProvince] = useState<string>('');
  const [isDefaultAddress, setIsDefaultAddress] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [shipmentDetails, setShipmentDetails] = useState<IShipmentDetail>({
    fullName:'',
    phoneNo:'',
    address:'',
    city:'',
    province:'',
    zipCode:''
  });

  const getCountries = () => {
    const countriesResponse = fetchShippingZones();
    return countriesResponse;
  };
  const getPaymentMethod = () => {
    const paymentMethodResponse = fetchPaymentMethods();
    return paymentMethodResponse;
  };

  const saveOrder = async (orderToCreate:any) => {
    setLoading(true)
    const responseOfSaveOrder = await createOrder(orderToCreate)
    setLoading(false)
  }

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const [countries, methods] = await wrapperForAllSettledPromises([
        getCountries(),
        getPaymentMethod(),
      ]);
      if (countries.status === 'rejected') {
        notifyToast('Failed to fetch countries');
      }
      if (methods.status === 'rejected') {
        notifyToast('Failed to fetch methods');
      }

      if (countries.status === 'fulfilled') {
        const filteredCountry:any = countries.value
          .filter((country: any) => country.name === 'Pakistan')
          .map((x: any) => ({id: x.id, label: x.name, value: x.name}));
        console.log({filteredCountry});
        setCountries(filteredCountry);
      }
      if (methods.status === 'fulfilled') {
        const filteredMethod = methods.value.filter(
          (method: any) => method.id === 'cod',
        );
        console.log({filteredMethod});
        setMethods(filteredMethod);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  const handleChange = (e:NativeSyntheticEvent<TextInputChangeEventData>, name:string) => {
    setShipmentDetails(prev => {
      const x= {...prev}
      return {
        ...x,
        name:e.nativeEvent.text
      }
    })
  }

  const handleSave = () => {

    const lineItems = cartItems.map((item:any) => {
      return {
        product_id:item.id,
        quantity:item.quantity
      }
    })
    const data = {
      payment_method: methods[0].id,
      payment_method_title: methods[0].title,
      set_paid: false,
      // billing: {
      //   first_name: "John",
      //   last_name: "Doe",
      //   address_1: "969 Market",
      //   address_2: "",
      //   city: "San Francisco",
      //   state: "CA",
      //   postcode: "94103",
      //   country: "US",
      //   email: "john.doe@example.com",
      //   phone: "(555) 555-5555"
      // },
      shipping: {
        first_name: shipmentDetails.fullName,
        last_name: shipmentDetails.fullName,
        address_1: shipmentDetails.address,
        address_2: shipmentDetails.address,
        city: shipmentDetails.city,
        state: province,
        postcode: shipmentDetails.zipCode,
        country: country,
      },
      line_items: lineItems,
      // shipping_lines: [
      //   {
      //     method_id: "flat_rate",
      //     method_title: "Flat Rate",
      //     total: "10.00"
      //   }
      // ]
    };

    console.log({data})

    saveOrder(data);

    // navigation.navigate(Screens.OrderCompletion);
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
                  onChange={(e) => handleChange(e,'fullName')}
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
                  onChange={(e) => handleChange(e,'phoneNo')}
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
                  onChange={(e) => handleChange(e,'address')}
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
                  onChange={(e) => handleChange(e,'city')}
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
                    onChange={(e) => handleChange(e,'zipCode')}
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
                backgroundColor={appColor.black}
                w="90%"
                onPress={() =>handleSave()}>
                Save & Continue
              </Button>
            </HStack>
          </Stack>
        </View>
      </ScrollView>
      {loading && <Loader />}
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
