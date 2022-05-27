/* eslint-disable react-hooks/exhaustive-deps */
import { View, Text, TouchableOpacity, ScrollView, Modal, ActivityIndicator } from 'react-native'
import React from 'react'
import CustomText from '../../../components/CustomText/CustomText'
import BellSvg from '../../../assets/svgs/bell'
import AddSvg from '../../../assets/svgs/add'
import { images } from '../../../helpers/imageArray'
import { styles } from './styles'
import useFeed from './useFeed'

const Feed = () => {

  const colours = [
    "#FFD75D",
    "#32CFEE",
    "#26D1A3",
    "#FFCBFF"];

  const getColour = (index) => colours[index % colours.length];

  const {
    keywords,
    setKeywords,
    results,
    loading,
    error,
    modalVisible,
    setModalVisible,
    words,
    handlePress,
    handleGoToLink
  } = useFeed();

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
      <View>
        <Modal
          animationType='slide'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <View style={styles.modalContainer}>
            {
              words.map((word, index) => {
                const color = keywords.includes(word) ? "#FFD75D" : "#303030";

                return (
                  <TouchableOpacity
                    key={index}
                    style={[styles.modalItem, { backgroundColor: color }]}
                    onPress={() => handlePress(word)}>
                    <CustomText customStyles={styles.keyword}>{word}</CustomText>
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </Modal>
        <View style={styles.groupTitle}>
          <CustomText customStyles={styles.middleText}>explora grupos</CustomText>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <CustomText customStyles={styles.lightText}>palabras</CustomText>
          </TouchableOpacity>
        </View>
        <View style={styles.scrollContainer}>
          <ScrollView style={styles.scroll} horizontal showsHorizontalScrollIndicator={false}>
            {
              loading
                ?
                <ActivityIndicator size="large" />
                :
                results.map((result, index) => {
                  const color = getColour(index);

                  return (
                    <View key={index}>
                      <TouchableOpacity
                        style={[styles.groupBox, { backgroundColor: color }]}
                        onPress={() => handleGoToLink(result["isShownAt"])}
                      />
                      <CustomText customStyles={styles.groupName}>{result["sourceResource.title"]}</CustomText>
                      <CustomText numberOfLines={1} customStyles={[styles.groupAuthor]}>{result["sourceResource.creator"]}</CustomText>
                    </View>
                  )

                })
            }
          </ScrollView>
        </View>
        <View>
          <View style={styles.groupTitle}>
            <CustomText customStyles={styles.middleText}>explora posts</CustomText>
            <CustomText customStyles={styles.lightText}>ver todos</CustomText>
          </View>
          <View style={styles.scrollContainer}>
            <ScrollView style={styles.scroll} horizontal showsHorizontalScrollIndicator={false}>
              {/* <TouchableOpacity style={{ marginRight: 20 }}>
                <View style={styles.postBox}>
                  <View style={styles.postPicture} />
                  <View style={{ alignItems: 'flex-start', marginLeft: 10 }}>
                    <View style={styles.authorRow}>
                      <CustomText customStyles={styles.postAuthor}>Karol M.</CustomText>
                    </View>
                    <CustomText customStyles={styles.postTitle}>¿Por qué le pasan cosas {'\n'} malas a la gente buena?</CustomText>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginRight: 20 }}>
                <View style={styles.postBox}>
                  <View style={styles.postPicture} />
                  <View style={{ alignItems: 'flex-start', marginLeft: 10 }}>
                    <View style={styles.authorRow}>
                      <CustomText customStyles={styles.postAuthor}>Karol M.</CustomText>
                    </View>
                    <CustomText customStyles={styles.postTitle}>¿Por qué le pasan cosas {'\n'} malas a la gente buena?</CustomText>
                  </View>
                </View>
              </TouchableOpacity> */}
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Feed