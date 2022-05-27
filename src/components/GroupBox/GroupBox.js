import { View, TouchableOpacity, Linking, Modal } from 'react-native'
import ChatSvg from '../../assets/svgs/chat'
import React from 'react'
import styles from './styles'
import CustomText from '../CustomText/CustomText'

const GroupBox = (props) => {

  const { zone, name, hour, numbers, colorLight, colorSolid } = props;

  const [modalVisible, setModalVisible] = React.useState(false);

  function handlePress() {
    if (numbers.length == 1) {
      Linking.openURL(`tel:${numbers[0]}`);
    } else {
      setModalVisible(true);
    }

  }

  return (
    <View style={[styles.container, { backgroundColor: colorLight }]}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        {
          numbers.map((number, index) => (
            <TouchableOpacity key={index} style={styles.modal} onPress={() => {
              Linking.openURL(`tel:${number}`);
              setModalVisible(false);
            }}>
              <CustomText>{number}</CustomText>
            </TouchableOpacity>
          ))
        }
      </Modal>
      <View style={styles.leftSide}>
        <CustomText customStyles={styles.name}>{zone}</CustomText>
        <CustomText numberOfLines={1} customStyles={styles.author}>{name}</CustomText>
        <CustomText customStyles={styles.author}>{hour}</CustomText>
        {numbers.map((number, index) => (
          <CustomText key={index} customStyles={styles.name}>{number}</CustomText>
        ))}
      </View>
      <TouchableOpacity style={styles.rightSide} onPress={handlePress}>
        <View style={[styles.rightSide, { backgroundColor: colorSolid }]} />
      </TouchableOpacity>
    </View>
  )
}

export default GroupBox