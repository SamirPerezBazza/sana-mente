import { View, TouchableOpacity } from 'react-native'
import ChatSvg from '../../assets/svgs/chat'
import React from 'react'
import styles from './styles'
import CustomText from '../CustomText/CustomText'

const GroupBox = ({author='John Doe', name='group name', members='0'}) => {
  return (
    <View style={[styles.container, { backgroundColor: "#FFF3CE"}]}>
      <View style={styles.leftSide}>
        <View style={styles.photo}/>
        <CustomText customStyles={styles.author}>{author}</CustomText>
        <CustomText customStyles={styles.name}>{name}</CustomText>
        <CustomText customStyles={styles.members}>{members} miembros</CustomText>
      </View>
      <TouchableOpacity style={styles.rightSide}>
        <View style={[styles.rightSide, { backgroundColor: "#FFD75D" }]}>
          <View style={styles.chatIcon}>
            <ChatSvg />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default GroupBox