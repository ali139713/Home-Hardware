import VectorIcon from 'react-native-vector-icons/FontAwesome';
import {HEIGHT} from '../helpers/helperFunction';
import {WIDTH} from './../helpers/helperFunction';

type SocialLoginButtonProps = {
  name: string;
  backgroundColor: string;
  buttonText: string;
  onPress:() => void;
};

export const SocialLoginButton = ({
  name,
  backgroundColor,
  buttonText,
  onPress
}: SocialLoginButtonProps) => {
  return (
    <VectorIcon.Button
      name={name}
      backgroundColor={backgroundColor}
      style={{width: WIDTH(155)}}
      onPress={onPress}
      >
      {buttonText}
    </VectorIcon.Button>
  );
};
