import React from 'react';
import VectorIcon from 'react-native-vector-icons/FontAwesome';
VectorIcon.loadFont();

type IconProps = {
  name: string;
  size: number;
  color: string;
  style?: object;
  handlePress?: any;
};

const IconComponent: React.FC<IconProps> = ({name, size, color, style, handlePress}) => {
  return (
    <VectorIcon name={name} size={size} color={color} style={style && style} onPress={handlePress} />
  );
};

export default IconComponent;
