import { StatusBar } from 'expo-status-bar'
import { Box, Center, Text, VStack, useColorModeValue } from 'native-base'
import React from 'react'
import ThemeToggle from '../components/theme-toggle'

export default function Main() {
  return (
    <Center
      flex={1}
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
    >
      <VStack space={5} alignItems={'center'}>
        <Box bg={useColorModeValue('red.500', 'yellow.500')}>
          <Text>Box 1</Text>
        </Box>
      </VStack>
      <Text>Open up App.tsx to start working on your app!</Text>
      <ThemeToggle />
      <StatusBar style="auto" />
    </Center>
  )
}
