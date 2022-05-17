import { View, ScrollView } from 'react-native'
import React from 'react'
import { ChatBox } from '../../../../components/ChatBox/ChatBox'

export function ExpertsChats() {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
      </ScrollView>
    </View>
  )
}