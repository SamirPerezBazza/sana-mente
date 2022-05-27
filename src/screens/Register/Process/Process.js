import { View, Text } from 'react-native'
import React from 'react'
import Stepper from '../../../components/Stepper/Stepper'
import Name from './Steps/Name/Name';
import Prompt from './Steps/Prompt/Prompt';
import Age from './Steps/Age/Age';
import Questions from './Steps/Prompt/Questions';
import Student from './Steps/Student/Student';
import Final from './Steps/Final/Final';
import { useRoute } from '@react-navigation/native';


export default function Process({navigation}) {

  const {params} = useRoute();

  const [loading, setLoading] = React.useState(false);
  const [active, setActive] = React.useState(0);
  const [form, setForm] = React.useState({
    name: '',
    age: '',
    question: '',
    student: '',
  });


  const handleChange = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleFinish = async()=>{
    try {
      setLoading(true)
      const request = {
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify({
          "username": form.name,
          "email": params.email,
          "age": form.age,
          "decision": form.question,
          "student": form.student,
          "password": params.password
        })
      }

      const response = await fetch('https://sana-mente-api.herokuapp.com/api/auth/signup', request);
      const result = await response.json();

      console.log("result", result)

      if (response.status == 200){
        navigation.navigate('DashboardScreen', { screen: 'FeedScreen' });
      }
      setLoading(false)

    } catch (error) {
      setLoading(false)
    }

  }

  const content = [
    <Name title="¿Cómo te llamas?" name="name" value={form.name} onChange={handleChange} />,
    <Age title="¿Cuantos años tienes?" name="age" value={form.age} onChange={handleChange} />,
    <Prompt name={form.name} />,
    <Questions value={form.question} onChange={handleChange} onNext={() => setActive((p) => p + 1)}/>,
    <Student onChange={handleChange} onNext={() => setActive((p) => p + 1)} />,
    <Final name={form.name} loading={loading}/>,
  ]

  return (
    <Stepper
      active={active}
      content={content}
      onBack={() => setActive((p) => p - 1)}
      onFinish={() => handleFinish()}
      onNext={() => setActive((p) => p + 1)}
    />
  )
}