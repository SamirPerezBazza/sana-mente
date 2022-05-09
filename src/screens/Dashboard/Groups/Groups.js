import { View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import CustomText from '../../../components/CustomText/CustomText'
import GroupBox from '../../../components/GroupBox/GroupBox'
import BellSvg from '../../../assets/svgs/bell'
import { styles } from './styles'

const Groups = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.notification}>
        <BellSvg />
      </TouchableOpacity>
      <TouchableOpacity style={styles.editContainer}>
        <CustomText customStyles={styles.edit} >Editar</CustomText>
      </TouchableOpacity>
      <CustomText customStyles={styles.title}>Tus Grupos</CustomText>
      <View style={styles.scrollContainer}>
        <ScrollView contentContainerStyle={styles.scroll}>
          {
            new Array(10).fill(0).map((_, index) => (
              <GroupBox key={index} />
            ))
          }
        </ScrollView>
      </View>
    </View>
  )
}

export default Groups