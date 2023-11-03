import { StatusBar } from 'expo-status-bar'
import { Center, Text } from 'native-base'
import React from 'react'
import ThemeToggle from '../components/theme-toggle'

export default function Main() {
  return (
    <Center
      flex={1}
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
    >
      <Text>Open up App.tsx to start working on your app!</Text>
      <ThemeToggle />
      <StatusBar style="auto" />
    </Center>
  )
}
