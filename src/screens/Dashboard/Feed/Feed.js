import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import CustomText from '../../../components/CustomText/CustomText'
import BellSvg from '../../../assets/svgs/bell'
import AddSvg from '../../../assets/svgs/add'
import { images } from '../../../helpers/imageArray'
import { styles } from './styles'

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
      <View>
        <View style={styles.groupTitle}>
          <CustomText customStyles={styles.middleText}>explora grupos</CustomText>
          <CustomText customStyles={styles.lightText}>ver todos</CustomText>
        </View>
        <View style={styles.scrollContainer}>
          <ScrollView style={styles.scroll} horizontal showsHorizontalScrollIndicator={false}>
            <View>
              <View style={[styles.groupBox, { backgroundColor: '#FFD75D' }]}>
                <TouchableOpacity style={styles.addButton}>
                  <AddSvg />
                </TouchableOpacity>
              </View>
              <CustomText customStyles={styles.groupName}>mente sana</CustomText>
              <CustomText customStyles={styles.groupAuthor}>Karol M.</CustomText>
            </View>
            <View>
              <View style={[styles.groupBox, { backgroundColor: '#32CFEE' }]}>
                <TouchableOpacity style={styles.addButton}>
                  <AddSvg />
                </TouchableOpacity>
              </View>
              <CustomText customStyles={styles.groupName}>autocontrol</CustomText>
              <CustomText customStyles={styles.groupAuthor}>Luis R.</CustomText>
            </View>
            <View>
              <View style={[styles.groupBox, { backgroundColor: '#26D1A3' }]}>
                <TouchableOpacity style={styles.addButton}>
                  <AddSvg />
                </TouchableOpacity>
              </View>
              <CustomText customStyles={styles.groupName}>motivación</CustomText>
              <CustomText customStyles={styles.groupAuthor}>John D.</CustomText>
            </View>
          </ScrollView>
        </View>
        <View>
          <View style={styles.groupTitle}>
            <CustomText customStyles={styles.middleText}>explora posts</CustomText>
            <CustomText customStyles={styles.lightText}>ver todos</CustomText>
          </View>
          <View style={styles.scrollContainer}>
            <ScrollView style={styles.scroll} horizontal showsHorizontalScrollIndicator={false}>
              <TouchableOpacity style={{marginRight: 20}}>
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
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Feed