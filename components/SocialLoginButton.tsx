/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import VectorIcon from 'react-native-vector-icons/FontAwesome';
VectorIcon.loadFont();

type SocialLoginButtonProps = {
  name: string;
  backgroundColor: string;
  buttonText: string;
  onPress: () => void;
};

export const SocialLoginButton = ({
  name,
  backgroundColor,
  buttonText,
  onPress,
}: SocialLoginButtonProps) => {
  return (
    <VectorIcon.Button
      name={name}
      backgroundColor={backgroundColor}
      style={{width: '100%'}}
      onPress={onPress}>
      {buttonText}
    </VectorIcon.Button>
  );
};
