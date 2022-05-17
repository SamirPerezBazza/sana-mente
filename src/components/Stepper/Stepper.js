import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Pressable
} from 'react-native';
import CustomText from '../CustomText/CustomText';


const Stepper = (props) => {
  const {
    active,
    content,
    onBack,
    onNext,
    onFinish,
    wrapperStyle,
    stepStyle,
    stepTextStyle,
    buttonStyle,
    buttonTextStyle,
    showButton = true,
  } = props;

  const [step, setStep] = useState([0]);
  const pushData = (val) => {
    setStep((prev) => [...prev, val]);
  };

  const removeData = () => {
    setStep((prev) => {
      prev.pop();
      return prev;
    });
  };

  const search = (keyName) => {
    return step.some((val) => val === keyName);
  };


  useEffect(() => {
    if (step[step.length - 1] > active) {
      removeData();
    } else if (!search(active)) {
      pushData(active);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <View style={wrapperStyle}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {content.map((_, i) => {
          return (
            <React.Fragment key={i}>
              <View
                style={[
                  {
                    backgroundColor: '#25D0A2',
                    width: 50,
                    height: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: search(i) ? 1 : 0.3,
                  },
                  stepStyle,
                ]}
              />
            </React.Fragment>
          );
        })}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {content[active]}
      </ScrollView>
      {showButton && (
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            alignSelf: 'center',
            bottom: 100
          }}
        >
          {content.length - 1 !== active && (
            <TouchableOpacity
              style={
                {
                  alignSelf: 'center',
                }}
              onPress={() => {
                pushData(active + 1);
                onNext();
              }}
            >
              <CustomText customStyles={[{ color: '#25D0A2', textAlign: 'center' }, buttonTextStyle]}>Tap para continuar</CustomText>
            </TouchableOpacity>
          )}
          {content.length - 1 === active && (
            <TouchableOpacity
              style={[
                {
                  alignSelf: 'center',
                },
                buttonStyle,
              ]}
              onPress={() => onFinish()}
            >
              <CustomText customStyles={[{ color: '#25D0A2', textAlign: 'center' }, buttonTextStyle]}>Comienza tu experiencia sana.mente</CustomText>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

export default Stepper;