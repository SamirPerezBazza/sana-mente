import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CustomText from '../../../components/CustomText/CustomText';
import { clearData } from '../../../helpers/storage';
import styles from './style'

export default function Profile({navigation}) {

  function handleLogout(){
    clearData();
    navigation.navigate("WelcomeScreen");
  }

  return (
    <View style={styles.container}>
      <CustomText customStyles={styles.title}>
        Perfil
      </CustomText>
      <CustomText customStyles={styles.name}>
        John Doe
      </CustomText>
      <TouchableOpacity style={[styles.logout, { backgroundColor: "#FB2B14"}]}>
        <CustomText
        customStyles={styles.logoutPrompt}
        >
          Necesito ayuda
        </CustomText>
      </TouchableOpacity>
      <TouchableOpacity 
      style={styles.logout}
        onPress={handleLogout}
      >
        <CustomText
        customStyles={styles.logoutPrompt}
        >
          Cerrar sesión
        </CustomText>
      </TouchableOpacity>
    </View>
  );
}