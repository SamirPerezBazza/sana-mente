import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import CustomText from '../CustomText/CustomText';
import { styles } from './styles';

export const ChatBox = ({name="Jane Doe", lastMessage="This is a test message"}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.picture}/>
      <View style={styles.info}>
        <CustomText customStyles={styles.expert}>{name}</CustomText>
        <CustomText customStyles={styles.message}>{lastMessage}</CustomText>
      </View>
    </TouchableOpacity>
  );
}

