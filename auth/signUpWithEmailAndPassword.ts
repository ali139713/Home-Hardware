import auth from '@react-native-firebase/auth';
import {notifyToast} from '../toast/toast';

export const createUser = async (email: string, password: string) => {

  // auth()
  //   .createUserWithEmailAndPassword(email, password)
  //   .then(() => {
  //     notifyToast('User account created & signed in!');
  //     console.log('User account created & signed in!');
  //     return true;
  //   })
  //   .catch(error => {
  //     if (error.code === 'auth/email-already-in-use') {
  //       notifyToast('That email address is already in use!');
  //       console.log('That email address is already in use!');
  //       return false;
  //     }

  //     if (error.code === 'auth/invalid-email') {
  //       notifyToast('That email address is invalid!');
  //       console.log('That email address is invalid!');
  //       return false;
  //     }
  //     return false;
  //   });
  try{
    const isSuccess = await auth().createUserWithEmailAndPassword(email, password);
    console.log('isSuccess', isSuccess)
    return true;
  }
  catch(error:any) {
    console.log('error in sign up :', error)
    if(error.code === 'auth/email-already-in-use'){
      notifyToast('Email Already In Use, Please Enter A Different Email')
      return false;
    }
    if(error.code === 'auth/wrong-password'){
      notifyToast('Incorrect Password')
      return false;
    }
    if(error.code === 'auth/weak-password'){
      notifyToast('Password Should Be Atleast 6 Characters')
      return false;
    }
  
  }
};
