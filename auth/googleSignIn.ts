import auth from '@react-native-firebase/auth';
import {storeEmail, storeUsername} from '../storage/Storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {notifyToast} from '../toast/toast';

export const googleSignIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log('Google Sign-in user info', userInfo);
    // setProfileImage(userInfo.user.photo);
    // setLoginUsername(userInfo.user.name);
    // userInfo.user.email;
    await storeEmail(userInfo.user.email);
    if (userInfo.user.name) {
      await storeUsername(userInfo.user.name);
    }
    const credential = auth.GoogleAuthProvider.credential(userInfo.idToken);
    const authInfo = await auth().signInWithCredential(credential);
    const token = await authInfo.user.getIdToken();
    console.log('Firebase Token', token);
    // return await fetchLoginToken(token);
    return true;
  } catch (error: any) {
    console.log('error =>', error);
    notifyToast(error.toString());
    return false;
  }
};
