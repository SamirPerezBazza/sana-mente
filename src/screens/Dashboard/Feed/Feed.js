import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomText from '../../../components/CustomText/CustomText'
import BellSvg from '../../../assets/svgs/bell'
import { images } from '../../../helpers/imageArray'
import {styles} from './styles'

const Feed = () => {



  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.notification}>
        <BellSvg />
      </TouchableOpacity>
      <View style={styles.titleBox}>
        <CustomText customStyles={styles.title}>Hola Mary</CustomText>
        <CustomText customStyles={styles.subTitle}>¿cómo te sientes hoy?</CustomText>
      </View>
      <View style={styles.moodContainer}>
        {
          images.map((image) => (
            <TouchableOpacity style={styles.moodButton} key={image.name}>
              {image.image}
            </TouchableOpacity>
          ))
        }
      </View>
      <View style={styles.groupTitle}>
        <CustomText customStyles={styles.middleText}>explora grupos</CustomText>
        <CustomText customStyles={styles.lightText}>ver todos</CustomText>
      </View>
    </View>
  )
}

export default Feed