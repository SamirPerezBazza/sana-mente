import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import CustomText from '../../../../../components/CustomText/CustomText'
import { styles } from './styles'

export default function Final({ name, loading }) {
  return (
    <View style={styles.container}>
      <CustomText customStyles={styles.title}>{name},{'\n'}ya tenemos todo listo para ti</CustomText>
      {
        loading && 
        <ActivityIndicator size="large"/>
      }
    </View>
  )
}