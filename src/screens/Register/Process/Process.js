import { View, Text } from 'react-native'
import React from 'react'
import Stepper from '../../../components/Stepper/Stepper'
import Name from './Steps/Name/Name';
import Prompt from './Steps/Prompt/Prompt';

export default function Process() {

  const [active, setActive] = React.useState(0);
  const [form, setForm] = React.useState({
    name: '',
    age: '',
    question: '',
    student: '',
  });

  const handleChange = (name, value)=>{
    setForm({
      ...form,
      [name]: value,
    })
  }

  const content = [
    <Name title="¿Cómo te llamas?" name="name" value={form.name} onChange={handleChange}/>,
    <Name title="¿Cuantos años tienes?" name="age" value={form.age} onChange={handleChange} />,
    <Prompt name={form.name} />,
    <View><Text>Hola 3</Text></View>,
    <View><Text>Hola 3</Text></View>,
    <View><Text>Hola 3</Text></View>,
    <View><Text>Hola 3</Text></View>,
  ]

  return (
    <Stepper
      active={active}
      content={content}
      onBack={() => setActive((p) => p - 1)}
      onFinish={() => alert('Finish')}
      onNext={() => setActive((p) => p + 1)}
    />
  )
}