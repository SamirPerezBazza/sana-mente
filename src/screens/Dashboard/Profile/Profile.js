import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Happy from '../../../assets/svgs/happy';
import CustomText from '../../../components/CustomText/CustomText';
import { clearData, getData } from '../../../helpers/storage';
import styles from './style'

export default function Profile({navigation}) {

  const [name, setName] = React.useState('');

  function handleLogout(){
    clearData();
    navigation.navigate("WelcomeScreen");
  }


  async function getName(){
    let user = await getData('login');
    user = JSON.parse(user);
    setName(user.username);
  }

  React.useEffect(() => {
    getName();
  }, []);
  

  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <View style={styles.circle}>
          <Happy />
        </View>
      </View>
      <CustomText customStyles={styles.name}>
        {name}
      </CustomText>
      {/* <TouchableOpacity style={[styles.logout, { backgroundColor: "#FB2B14"}]}>
        <CustomText
        customStyles={styles.logoutPrompt}
        >
          Necesito ayuda
        </CustomText>
      </TouchableOpacity> */}
      <View>
        
      </View>
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