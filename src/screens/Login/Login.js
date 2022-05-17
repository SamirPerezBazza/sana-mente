import React from 'react'
import CustomText from '../../components/CustomText/CustomText'
import styles from './styles'
import Input from '../../components/Input/Input'
import { TouchableOpacity, View } from 'react-native'
import { useForm } from '../../hooks/useForm'
import { loginValidation } from '../../helpers/validation'
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native'
import { storeData } from '../../helpers/storage'
import http from '../../helpers/http'

const Login = ({ navigation }) => {

  const [values, errors, setErrors, handleChange] = useForm({ email: '', password: '' });

  const handleSubmit = () => {
    const loginErrors = loginValidation(values);

    if (Object.keys(loginErrors).length > 0) {
      setErrors(loginErrors);
    } else {
      setErrors({});
      http.post('http://sana-mente-api.herokuapp.com/api/auth/signin',
        {
          body: values
        }
      )
      .then(({response})=>response.data)
      .then((res)=>{
        storeData('login', JSON.stringify({...values, token: res.token})).then(() => {
        navigation.navigate('DashboardScreen', { screen: 'FeedScreen' });
      });
      })
      .catch((err)=>{
        console.log("Error=>", err)
      })
    }
  }

  return (
    <View>
      <CustomText customStyles={styles.title}>Ingresa</CustomText>
      <View style={styles.inputContainer}>
        <CustomText customStyles={styles.inputTitle}>Email</CustomText>
        <Input type="email-address" placeHolder="Ingrese su correo" name="email" value={values.email} onChange={handleChange} />
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

