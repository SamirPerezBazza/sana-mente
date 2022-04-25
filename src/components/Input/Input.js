import { TextInput } from 'react-native'
import React from 'react'
import styles from './styles'

const Input = ({placeHolder, name, isPassword = false, value, onChange}) => {
  return (
    <TextInput 
      style={styles.input}
      placeholder={placeHolder}
      secureTextEntry={isPassword}
      autoCapitalize='none'
      value={value}
      onChangeText={(text) => onChange(name, text)}
    />
  )
}

export default Input