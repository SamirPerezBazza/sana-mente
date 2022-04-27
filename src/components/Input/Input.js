import { TextInput } from 'react-native'
import React from 'react'
import styles from './styles'

const Input = ({ placeHolder, name, isPassword = false, value, onChange, type='default', customStyles}) => {
  return (
    <TextInput 
      style={[styles.input, customStyles]}
      placeholder={placeHolder}
      secureTextEntry={isPassword}
      autoCapitalize='none'
      value={value}
      keyboardType={type}
      onChangeText={(text) => onChange(name, text)}
    />
  )
}

export default Input