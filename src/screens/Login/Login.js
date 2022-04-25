import { TextInput, View } from 'react-native'
import React from 'react'
import CustomText from '../../components/CustomText/CustomText'

const Login = () => {
  return (
    <View>
      <CustomText>Ingresa</CustomText>
      <View>
        <CustomText>Email</CustomText>
        <TextInput placeholder='Ingrese su correo electrónico' />
        <CustomText>Contraseña</CustomText>
        <TextInput placeholder='Ingrese su contraseña' secureTextEntry />
      </View>
    </View>
  )
}

export default Login

