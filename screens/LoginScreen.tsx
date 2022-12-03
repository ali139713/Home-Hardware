import {StackActions} from '@react-navigation/native';
import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from 'native-base';
import React, {useState} from 'react';
import {Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {appColor} from '../assets/colors';
import {SocialLoginButton} from '../components/SocialLoginButton';
import IconComponent from './../components/IconComponent';
import {HEIGHT, WIDTH} from './../helpers/helperFunction';
import {Screens} from './../helpers/ScreenConstant';

const LoginScreen: React.FC<any> = ({navigation}) => {
  const [show, setShow] = useState<boolean>(false);

  const handleLogin = () => {
    navigation.dispatch(StackActions.replace(Screens.Bottom));
  };

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
            Welcome back!
          </Heading>
          <Heading
            mt="1"
            alignSelf={'center'}
            _dark={{
              color: 'warmGray.200',
            }}
            color="coolGray.600"
            fontWeight="medium"
            size="xs">
            Log in to your existing account
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
            <Text
              fontSize="sm"
              color="coolGray.600"
              fontWeight={'bold'}
              alignSelf={'flex-end'}
              _dark={{
                color: appColor.black,
              }}>
              Forgot Password
            </Text>
            <HStack justifyContent="center">
              <Button mt="2" bg={appColor.black} w={200} onPress={handleLogin}>
                Log in
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
                Or connect using
              </Text>
            </HStack>
            <HStack mt="0" justifyContent="center">
              <HStack mt="6" mr={5} justifyContent="center">
                <SocialLoginButton
                  name="facebook"
                  backgroundColor="#3b5998"
                  buttonText="Login with facebook"
                />
              </HStack>
              <HStack mt="6" justifyContent="center">
                <SocialLoginButton
                  name="google"
                  backgroundColor="red"
                  buttonText="Login with google"
                />
              </HStack>
            </HStack>
          </VStack>
          <Text
            fontSize="sm"
            color="coolGray.600"
            fontWeight={'bold'}
            alignSelf="center"
            marginTop={HEIGHT(20)}
            _dark={{
              color: appColor.black,
            }}>
            Don't have an account? Sign Up
          </Text>
        </Box>
      </Center>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
