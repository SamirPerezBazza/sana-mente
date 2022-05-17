import React from 'react'
import CustomText from '../../../components/CustomText/CustomText'
import BellSvg from '../../../assets/svgs/bell'
import Edit from '../../../assets/svgs/edit'
import { View, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Experts, ExpertsChats } from './ChatScreens'


const Tab = createMaterialTopTabNavigator();


const Chats = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.notification, { right: '20%' }]}>
        <Edit />
      </TouchableOpacity>
      <TouchableOpacity style={styles.notification}>
        <BellSvg />
      </TouchableOpacity>
      <TouchableOpacity style={styles.editContainer}>
        <CustomText customStyles={styles.edit} >Editar</CustomText>
      </TouchableOpacity>
      <CustomText customStyles={styles.title}>Chats</CustomText>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontFamily: 'Chivo-Regular', textTransform: 'lowercase' },
          tabBarStyle: {
            backgroundColor: 'transparent',
            elevation: 0,
            shadowColor: "#000000",
            shadowOffset: { width: 0, height: 10 }, // change this for more shadow
            shadowOpacity: 0.4,
            shadowRadius: 6
          },
        }}
      >
        <Tab.Screen name="expertos" component={Experts} />
        <Tab.Screen name="chats" component={ExpertsChats} />
      </Tab.Navigator>
    </View >
  )
}

export default Chats;