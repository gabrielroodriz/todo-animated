import { StatusBar } from 'expo-status-bar'
import {
  Box,
  Center,
  Pressable,
  Text,
  VStack,
  useColorModeValue
} from 'native-base'
import React from 'react'

import AnimatedCheckbox from 'react-native-checkbox-reanimated'
import ThemeToggle from '../components/theme-toggle'

export default function Main() {
  const [checked, setChecked] = React.useState(true)
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
      <Box w={100} h={100}>
        <Pressable onPress={() => setChecked(!checked)}>
          <AnimatedCheckbox
            checked={checked}
            highlightColor="#4444ff"
            checkmarkColor="#ffffff"
            boxOutlineColor="#4444ff"
          />
        </Pressable>
      </Box>
      <ThemeToggle />
      <StatusBar style="auto" />
    </Center>
  )
}
