import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeEmail = async (email: string) => {
  await AsyncStorage.setItem('userEmail', JSON.stringify(email));
};

export const getEmail = async () => {
  const email = await AsyncStorage.getItem('userEmail');
  return email ? JSON.parse(email) : null;
};
export const storeUsername = async (userName: string) => {
  await AsyncStorage.setItem('userName', JSON.stringify(userName));
};
export const getUsername = async () => {
  const username = await AsyncStorage.getItem('userName');
  return username ? JSON.parse(username) : null;
};
