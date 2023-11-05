import { Center, VStack } from 'native-base'
import React, { useCallback } from 'react'

import { TaskItem } from '../components/task-item'
import ThemeToggle from '../components/theme-toggle'

export default function Main() {
  const [checked, setChecked] = React.useState(true)
  const [subject, setSubject] = React.useState('')
  const [isEditing, setIsEditing] = React.useState(false)
  const handlePressCheckbox = useCallback(() => {
    setChecked(prev => !prev)
  }, [checked])

  return (
    <Center
      flex={1}
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
    >
      <VStack space={5} alignItems={'center'} w="full">
        <TaskItem
          isEditing={isEditing}
          isDone={checked}
          onToggleCheckbox={handlePressCheckbox}
          subject={subject}
          onPressLabel={() => setIsEditing(true)}
          onChangeSubject={setSubject}
          onFinishedEditing={() => setIsEditing(false)}
        />

        <ThemeToggle />
      </VStack>
    </Center>
  )
}
