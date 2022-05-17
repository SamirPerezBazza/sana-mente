import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import CustomText from '../../../../../components/CustomText/CustomText'
import Input from '../../../../../components/Input/Input'

export default function Name({ title, name, value, onChange }) {
  return (
    <View style={styles.container}>
      <CustomText customStyles={styles.title}>{title}</CustomText>
      <Input customStyles={styles.input} name={name} value={value} onChange={onChange} />
      <CustomText customStyles={styles.tooltip}>solo los expertos podrán ver tus datos</CustomText>
    </View>
  )
}