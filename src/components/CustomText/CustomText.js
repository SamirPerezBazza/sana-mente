import React from 'react';
import styles from './styles';
import { Text } from 'react-native';

const CustomText = ({ children, customStyles }) => {
  return (
    <Text style={[styles.customText, customStyles]}>
      {children}
    </Text>
  );
};


export default CustomText;
