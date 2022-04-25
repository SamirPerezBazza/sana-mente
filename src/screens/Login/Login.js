import React from 'react'
import CustomText from '../../components/CustomText/CustomText'
import styles from './styles'
import Input from '../../components/Input/Input'
import { TouchableOpacity, View } from 'react-native'
import { useForm } from '../../hooks/useForm'
import { loginValidation } from '../../helpers/validation'

const Login = () => {

  const [values, errors, setErrors, handleChange] = useForm({ email: '', password: '' });


  const handleSubmit = () => {
    const loginErrors = loginValidation(values);
    
    if (Object.keys(loginErrors).length > 0) {
      setErrors(loginErrors);
    } else {
      setErrors({});
      //TODO: FETCH API 
    }
  }

  return (
    <View>
      <CustomText customStyles={styles.title}>Ingresa</CustomText>
      <View style={styles.inputContainer}>
        <CustomText customStyles={styles.inputTitle}>Email</CustomText>
        <Input placeHolder="Ingrese su correo" name="email" value={values.email} onChange={handleChange} />
        <CustomText customStyles={styles.inputTitle}>Contraseña</CustomText>
        <Input placeHolder="Ingrese su contraseña" name="password" value={values.password} onChange={handleChange} isPassword />
      </View>

      {
        errors &&
        <CustomText customStyles={styles.errorMessage}>{Object.values(errors)[0]}</CustomText>
      }

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
      >
        <CustomText customStyles={styles.buttonText}>ingresar</CustomText>
      </TouchableOpacity>
    </View>
  )
}

export default Login

