import React from 'react';
import VectorIcon from 'react-native-vector-icons/FontAwesome';
VectorIcon.loadFont();

type IconProps = {
  name: string;
  size: number;
  color: string;
  style?: object;
};

const IconComponent: React.FC<IconProps> = ({name, size, color, style}) => {
  return (
    <VectorIcon name={name} size={size} color={color} style={style && style} />
  );
};

export default IconComponent;
