import auth from '@react-native-firebase/auth';
import {notifyToast} from '../toast/toast';

export const createUser = (email: string, password: string) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      notifyToast('User account created & signed in!');
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        notifyToast('That email address is already in use!');
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        notifyToast('That email address is invalid!');
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
};
