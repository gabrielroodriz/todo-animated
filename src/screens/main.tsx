import { StatusBar } from 'expo-status-bar'
import { Box, Center, Text, VStack, useColorModeValue } from 'native-base'
import React, { useCallback } from 'react'

import { TaskItem } from '../components/task-item'
import ThemeToggle from '../components/theme-toggle'

export default function Main() {
  const [checked, setChecked] = React.useState(true)
  const handlePressCheckbox = useCallback(() => {
    setChecked(prev => !prev)
  }, [checked])

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
        <TaskItem isDone={checked} onToggleCheckbox={handlePressCheckbox} />
      </Box>
      <ThemeToggle />
      <StatusBar style="auto" />
    </Center>
  )
}
