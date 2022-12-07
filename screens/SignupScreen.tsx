import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
  VStack,
} from 'native-base';
import React, {useState} from 'react';
import {Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {appColor} from '../assets/colors';
import IconComponent from '../components/IconComponent';
import {WIDTH} from '../helpers/helperFunction';

const SignupScreen: React.FC<any> = ({navigation}) => {
  const [show, setShow] = useState<boolean>(false);

  const handleSignUp = () => {};

  return (
    <KeyboardAwareScrollView>
      <Center w="100%" backgroundColor={appColor.white}>
        <Box safeArea p="2" py="10" w="100%" maxW="290" height="100%">
          <Image
            style={{height: 250, width: 250}}
            source={require('../assets/onBoardingImage1.png')}
          />
          <Heading
            size="lg"
            fontWeight="800"
            color="coolGray.800"
            alignSelf={'center'}
            _dark={{
              color: appColor.black,
            }}>
            Let's Get Started
          </Heading>
          <Heading
            mt="1"
            textAlign="center"
            _dark={{
              color: 'warmGray.200',
            }}
            color="coolGray.600"
            fontWeight="medium"
            size="xs">
            Create an account and shop home essentials
          </Heading>
          <VStack space={3} mt="5">
            <Stack space={4} w="100%" alignItems="center">
              <Input
                w={{
                  base: '75%',
                  md: '25%',
                }}
                InputLeftElement={
                  <IconComponent
                    name="user"
                    size={20}
                    color={appColor.gray}
                    style={{marginLeft: WIDTH(5)}}
                  />
                }
                placeholder="UserName"
              />
              <Input
                w={{
                  base: '75%',
                  md: '25%',
                }}
                InputLeftElement={
                  <IconComponent
                    name="envelope"
                    size={18}
                    color={appColor.gray}
                    style={{marginLeft: WIDTH(5)}}
                  />
                }
                placeholder="Email"
              />
              <Input
                w={{
                  base: '75%',
                  md: '25%',
                }}
                type={show ? 'text' : 'password'}
                InputLeftElement={
                  <IconComponent
                    name="lock"
                    size={20}
                    color={appColor.gray}
                    style={{marginLeft: WIDTH(5)}}
                  />
                }
                placeholder="Password"
              />
            </Stack>
            <HStack justifyContent="center">
              <Button mt="2" bg={appColor.black} w={200} onPress={handleSignUp}>
                Create Account
              </Button>
            </HStack>
            <HStack mt="6" justifyContent="center">
              <Text
                fontSize="sm"
                color="coolGray.600"
                fontWeight={'medium'}
                _dark={{
                  color: 'warmGray.200',
                }}>
                Already have an account? Login here
              </Text>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </KeyboardAwareScrollView>
  );
};

export default SignupScreen;
