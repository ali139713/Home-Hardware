/* eslint-disable react-native/no-inline-styles */
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
import {Image, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {appColor} from '../assets/colors';
import {createUser} from '../auth/signUpWithEmailAndPassword';
import IconComponent from '../components/IconComponent';
import { Loader } from '../components/Loader';
import {EMAIL_REGEX, height, width} from '../helpers/Constant';
import {isValidEmail, WIDTH} from '../helpers/helperFunction';
import { notifyToast } from '../toast/toast';
import {Screens} from './../helpers/ScreenConstant';

const SignupScreen: React.FC<any> = ({navigation}) => {
  const [userName, setUserName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);


  const handleSignUp = async () => {
   const isValid = validate();
   if(isValid){
     setLoading(true)
     const isRegistered =  await createUser(email, password);
     if(isRegistered){
      notifyToast('Signed Up Successfully')
      setLoading(false)
      navigation.navigate(Screens.Login)
     }
     else{
      setLoading(false)
     }
      };
      setLoading(false)
  };

  const handleNavigateToLogin = () => {
    navigation.navigate(Screens.Login);
  };

  const validate = () => {
    if(email === ''){
      notifyToast('Email is required')
      return false;
    }
    if(password === ''){
      notifyToast('Password is required')
      return false;
    }
    if(!isValidEmail(email,EMAIL_REGEX)){
      notifyToast('Please Enter A Valid Email')
      return false;
    }
    return true;
  }

  return (
    <KeyboardAwareScrollView style={styles.container}>
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
                value={userName}
                onChangeText={setUserName}
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
                value={email}
                onChangeText={setEmail}
                autoComplete="off"
                autoCapitalize="none"
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
                value={password}
                onChangeText={setPassword}
                type="password"
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
              <Button
                mt="2"
                bg={appColor.black}
                backgroundColor={appColor.black}
                w={200}
                onPress={handleSignUp}>
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
                }}
                onPress={handleNavigateToLogin}>
                Already have an account? Login here
              </Text>
            </HStack>
          </VStack>
        </Box>
      </Center>
      {loading && <Loader/>}
    </KeyboardAwareScrollView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    backgroundColor: appColor.white,
  },
});
