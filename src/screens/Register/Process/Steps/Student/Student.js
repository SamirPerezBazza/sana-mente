import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomText from '../../../../../components/CustomText/CustomText'
import { styles } from './styles'

export default function Student({ onChange, onNext }) {

  const handlePress = (answer) => {
    onChange(prev => ({ ...prev, student: answer }))
    onNext();
  }

  return (
    <View style={styles.container}>
      <CustomText customStyles={styles.title}>¿Eres Estudiante?</CustomText>
      <TouchableOpacity style={[styles.optionContainer, { backgroundColor: "#FCEDC3" }]} onPress={() => handlePress(true)}><CustomText customStyles={styles.option}>sí</CustomText></TouchableOpacity>
      <TouchableOpacity style={[styles.optionContainer, { backgroundColor: "#DFE6FD" }]} onPress={() => handlePress(false)}><CustomText customStyles={styles.option}>no</CustomText></TouchableOpacity>
    </View>
  )
}