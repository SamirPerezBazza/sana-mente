import { View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import CustomText from '../../../components/CustomText/CustomText'
import GroupBox from '../../../components/GroupBox/GroupBox'
import BellSvg from '../../../assets/svgs/bell'
import { styles } from './styles'
import lineas from '../../../helpers/json/phone_number.json';

const Groups = () => {

  const colours = [
    { light: "#FFF3CE", solid: "#FFD75D" },
    { light: "#B5F3FF", solid: "#32CFEE" },
    { light: "#BFFFEE", solid: "#26D1A3" },
    { light: "#FDDEFF", solid: "#FFCBFF" },];

  const getColour = (index) => colours[index % colours.length];

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity style={styles.notification}>
        <BellSvg />
      </TouchableOpacity>
      <TouchableOpacity style={styles.editContainer}>
        <CustomText customStyles={styles.edit} >Editar</CustomText>
      </TouchableOpacity> */}
      <CustomText customStyles={[styles.title, { marginTop: '10%' }]}>Entidades de ayuda</CustomText>
      <View style={styles.scrollContainer}>
        <ScrollView contentContainerStyle={styles.scroll}>
          {
            lineas.map((linea, index) => {
              const color = getColour(index);
              return (<GroupBox
                key={index}
                colorLight={color.light}
                colorSolid={color.solid}
                {...linea}
              />);
            })
          }
        </ScrollView>
      </View>
    </View>
  )
}

export default Groups