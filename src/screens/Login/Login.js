import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomText from '../../components/CustomText/CustomText'
import styles from './styles'
import Input from '../../components/Input/Input'

const Login = () => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View>
      <CustomText customStyles={styles.title}>Ingresa</CustomText>
      <View style={styles.inputContainer}>
        <CustomText customStyles={styles.inputTitle}>Email</CustomText>
        <Input placeHolder="Ingrese su correo" value={email} onChange={setEmail} />
        <CustomText customStyles={styles.inputTitle}>Contraseña</CustomText>
        <Input placeHolder="Ingrese su contraseña" value={password} onChange={setPassword} isPassword/>
      </View>
      <TouchableOpacity 
        style={styles.button}
      >
        <CustomText customStyles={styles.buttonText}>ingresar</CustomText>
      </TouchableOpacity>
    </View>
  )
}

export default Login

