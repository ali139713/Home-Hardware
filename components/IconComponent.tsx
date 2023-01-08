import React from 'react';
import VectorIcon from 'react-native-vector-icons/FontAwesome';
VectorIcon.loadFont();

type IconProps = {
  name: string;
  size: number;
  color: string;
  style?: object;
  onClick?: any;
};

const IconComponent: React.FC<IconProps> = ({
  name,
  size,
  color,
  style,
  onClick,
}) => {
  return (
    <VectorIcon
      onPress={onClick}
      name={name}
      size={size}
      color={color}
      style={style && style}
    />
  );
};

export default IconComponent;
