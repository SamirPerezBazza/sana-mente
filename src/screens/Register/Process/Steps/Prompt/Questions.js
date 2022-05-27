import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomText from '../../../../../components/CustomText/CustomText'
import { styles } from './styles'
import TopLeftPuzzle from './assets/svgs/topLeftPuzzle';
import TopRightPuzzle from './assets/svgs/topRightPuzzle';
import BottomLeftPuzzle from './assets/svgs/bottomLeftPuzzle';
import BottomRightPuzzle from './assets/svgs/bottomRightPuzzle';

export default function Questions({ value, onChange, onNext }) {

  const questions = [
    { background: <TopLeftPuzzle color="#25D0A2" />, text: 'mejorar\natención' },
    { background: <TopRightPuzzle color="#FFD65C" />, text: 'reducir\nestrés' },
    { background: <BottomLeftPuzzle color="#C6D4FF" />, text: 'mejorar\nsueño' },
    { background: <BottomRightPuzzle color="#31CEED" />, text: 'mejorar\nanimo' },
  ];

  const handleChange = (text) => {
    onChange("question", text);
    onNext();
  };


  return (
    <View style={styles.container}>
      <CustomText customStyles={styles.prompt}>
        Selecciona lo que desees mejorar
      </CustomText>
      <View style={styles.optionContainer}>
        {questions.map((option, index) => {
          const alignment = option.text.includes('estrés') ? 'flex-end' : 'flex-start';
          const left = option.text.includes('estrés') ? '40%' : option.text.includes('animo') ? "40%" :"25%" ;
          return(
          <TouchableOpacity
            key={index}
            style={[styles.option, { alignItems: alignment }]}
              onPress={() => handleChange(option.text)}
          >
            {option.background}
            <CustomText customStyles={[styles.question, {left: left}]}>{option.text}</CustomText>
          </TouchableOpacity>
        )})}
      </View>
    </View>
  )
}