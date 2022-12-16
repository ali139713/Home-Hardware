import auth from '@react-native-firebase/auth';
import {notifyToast} from '../toast/toast';

export const signInWithEmailAndPassword = (email: string, password: string) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      notifyToast('User signed in!');
      console.log('User signed in!');
    })
    .catch(error => {
      notifyToast('Invalid Credentials');
      console.error(error);
    });
};
