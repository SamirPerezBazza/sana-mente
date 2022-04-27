import { ScrollView, TouchableOpacity, View } from 'react-native';
import CustomText from '../../components/CustomText/CustomText';
import React, { useState } from 'react';
import { styles } from './styles';

const Welcome = ({ navigation }) => {

  const [active, setActive] = useState(0);


  const goToLogin = () => navigation.push('LoginScreen');

  const goToRegister = () => navigation.push('RegisterScreen');



  const onChange = ({ nativeEvent }) => {
    const activeValue = Math.floor(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );

    setActive(activeValue);

  };

  return (
    <View style={styles.container}>
      <View style={styles.bottomContainer}>
        <ScrollView
          style={styles.scroll}
          onMomentumScrollEnd={onChange}
          horizontal
          pagingEnabled
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.slide}>
            <CustomText customStyles={styles.title}>Espacio Seguro</CustomText>
            <CustomText customStyles={styles.paragraph}>
              Recibe apoyo por parte de {'\n'}
              expertos y usuarios afines a ti.{'\n'}
              Tranqui, todos son <CustomText customStyles={styles.strong}>anónimos</CustomText>.
            </CustomText>
          </View>
          <View style={styles.slide}>
            <CustomText customStyles={styles.title}>Grupos de Apoyo</CustomText>
            <CustomText customStyles={styles.paragraph}>
              Únete a los grupos que más {'\n'}
              se ajusten a ti. Aquí nos ayudamos {'\n'}
              entre todos <CustomText customStyles={styles.strong}>sana.mente</CustomText>.
            </CustomText>
          </View>
          <View style={styles.slide}>
            <CustomText customStyles={styles.title}>Temas de interés</CustomText>
            <CustomText customStyles={styles.paragraph}>
              Participa de las publicaciones {'\n'}
              realizadas por tus expertos {'\n'}
              favoritos.
            </CustomText>
          </View>
        </ScrollView>
        <View style={styles.dotView}>
          {
            new Array(1, 2, 3).map((k, i) => (
              <View
                key={i}
                style={{
                  backgroundColor: i === active ? "#25D0A2" : "#D1FBF0",
                  height: 10,

                  width: 10,

                  margin: 8,
                  borderRadius: 6,
                }}
              />
            ))}
        </View>
        {
          active === 2 &&
          <>
            <TouchableOpacity
              style={styles.button}
              onPress={goToRegister}
            >
              <CustomText customStyles={styles.buttonText}>comencémos</CustomText>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', justifyContent: 'center', bottom: 20}}>
              <CustomText customStyles={styles.bottomText}>¿Ya tienes cuenta? </CustomText>
              <TouchableOpacity
                onPress={goToLogin}
              >
                <CustomText customStyles={[styles.bottomText, { color: '#10B287'}]}>ingresar</CustomText>
              </TouchableOpacity>
            </View>
          </>
        }
      </View>
    </View>
  )
}

export default Welcome;
