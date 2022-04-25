import { TextInput } from 'react-native'
import React from 'react'
import styles from './styles'

const Input = ({placeHolder, isPassword = false, value, onChange}) => {
  return (
    <TextInput 
      style={styles.input}
      placeholder={placeHolder}
      secureTextEntry={isPassword}
      value={value}
      onChangeText={onChange}
    />
  )
}

export default Input