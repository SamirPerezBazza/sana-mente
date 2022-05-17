import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import CustomText from '../../../../../components/CustomText/CustomText'

export default function Prompt({ name }) {
  return (
    <View style={styles.container}>
      <CustomText customStyles={styles.greet}>¡Hola {name}!</CustomText>
      <CustomText customStyles={styles.prompt}>
        Contesta unas {'\n'}
        cuantas preguntas {'\n'}
        para personalizar {'\n'}
        tu experiencia
      </CustomText>
    </View>
  )
}