import React from 'react';
import styles from './styles'
import CustomText from '../../components/CustomText/CustomText';
import Input from '../../components/Input/Input';
import { View, Text, TouchableOpacity } from 'react-native';
import { useForm } from '../../hooks/useForm';
import { registerValidation } from '../../helpers/validation';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const [values, errors, setErrors, handleChange] = useForm({ email: '', password: '' });

  const navigation = useNavigation();

  const handleSubmit = () => {
    const registerErrors = registerValidation(values);

    if (Object.keys(registerErrors).length > 0) {
      setErrors(registerErrors);
    } else {
      setErrors({});
      //Fetch API
    }
  }

  return (
    <View>
      <CustomText customStyles={styles.title}>Regístrate</CustomText>
      <View style={styles.inputContainer}>
        <CustomText customStyles={styles.inputTitle}>Email</CustomText>
        <Input placeHolder="Ingrese su correo" name="email" value={values.email} onChange={handleChange} />
        <CustomText customStyles={styles.inputTitle}>Contraseña</CustomText>
        <Input placeHolder="Ingrese su contraseña" name="password" value={values.password} onChange={handleChange} isPassword />
        <CustomText customStyles={styles.tooltip}>tu contraseña debe tener 8 caracteres o más :)</CustomText>
      </View>

      {
        errors &&
        <CustomText customStyles={styles.errorMessage}>{Object.values(errors)[0]}</CustomText>
      }

      <View style={styles.buttonContainer}>
        <CustomText customStyles={styles.terms}>
          Al continuar estarás aceptando nuestras {'\n'}
          <CustomText customStyles={{ ...styles.terms, fontFamily: 'Chivo-Bold', textDecorationLine: 'underline' }}
          >
            políticas de privacidad
          </CustomText> y
          <CustomText
            customStyles={{ ...styles.terms, fontFamily: 'Chivo-Bold', textDecorationLine: 'underline' }}
          >
            términos y condiciones
          </CustomText>
        </CustomText>

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}
        >
          <CustomText customStyles={styles.buttonText}>comencémos</CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
