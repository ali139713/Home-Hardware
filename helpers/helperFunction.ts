import {Alert, Linking, Platform} from 'react-native';
import {PERMISSIONS, requestMultiple, RESULTS} from 'react-native-permissions';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const windowsFontScale = Dimensions.get('window').fontScale;

export const takeUserPermission = async () => {
  const permissions =
    Platform.OS === 'ios'
      ? [PERMISSIONS.IOS.CAMERA]
      : [PERMISSIONS.ANDROID.CAMERA];

  // Call our permission service and check for permissions
  const isPermissionGranted = await checkMultiplePermissions(permissions);

  if (!isPermissionGranted) {
    // Show an alert in case permission was not granted
    Alert.alert(
      'Permission Request',
      'Please allow permission to access the Camera.',
      [
        {
          text: 'Go to Settings',
          onPress: () => {
            Linking.openSettings();
          },
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  }

  return isPermissionGranted;
};
async function checkMultiplePermissions(permissions: any) {
  let isPermissionGranted = false;
  const statuses = await requestMultiple(permissions);
  for (var index in permissions) {
    if (statuses[permissions[index]] === RESULTS.GRANTED) {
      isPermissionGranted = true;
    } else {
      isPermissionGranted = false;
      break;
    }
  }
  return isPermissionGranted;
}

export const HEIGHT = (h: number) => {
  return (windowHeight / 812) * h;
};

export const WIDTH = (w: number) => {
  return (windowWidth / 375) * w;
};

export const FONT = (f: number) => {
  return f / windowsFontScale;
};
