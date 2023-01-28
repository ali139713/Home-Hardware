import auth from '@react-native-firebase/auth';
import {notifyToast} from '../toast/toast';

export const signInWithEmailAndPassword = async (email: string, password: string) => {
  try{
    const isSuccess = await auth().signInWithEmailAndPassword(email, password);
    console.log('isSuccess', isSuccess)
    return true;
  }
  catch(error:any) {
    console.log('error in sign in :', error)
    if(error.code === 'auth/user-not-found'){
      notifyToast('User Not Found')
      return false;
    }
    if(error.code === 'auth/wrong-password'){
      notifyToast('Incorrect Password')
      return false;
    }
  
  }
};
