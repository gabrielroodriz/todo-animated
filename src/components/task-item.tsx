import { Feather } from '@expo/vector-icons'
import {
  Box,
  HStack,
  Icon,
  Input,
  Pressable,
  themeTools,
  useColorModeValue,
  useTheme
} from 'native-base'
import { useCallback } from 'react'
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'
import AnimatedCheckbox from 'react-native-checkbox-reanimated'
import { PanGestureHandlerProps } from 'react-native-gesture-handler'
import AnimatedTaskLabel from './aninamated-task-label'
import SwipeView from './swipable-view'
interface Props extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
  isDone: boolean
  isEditing: boolean

  onToggleCheckbox?: () => void
  onPressLabel?: () => void
  onRemove?: () => void
  onChangeSubject?: (subject: string) => void
  onFinishedEditing?: () => void
  subject: string
}
export const TaskItem = (props: Props) => {
  const {
    isDone,
    isEditing,
    onToggleCheckbox,
    onPressLabel,
    onChangeSubject,
    onFinishedEditing,
    onRemove,
    subject,
    simultaneousHandlers
  } = props
  const theme = useTheme()
  const highlighColor = themeTools.getColor(
    theme,
    useColorModeValue('blue.500', 'blue.400')
  )
  const boxStroke = themeTools.getColor(
    theme,
    useColorModeValue('muted.300', 'muted.500')
  )
  const checkmarkColor = themeTools.getColor(
    theme,
    useColorModeValue('white', 'white')
  )
  const activeTextColor = themeTools.getColor(
    theme,
    useColorModeValue('darkText', 'lightText')
  )

  const doneTextColor = themeTools.getColor(
    theme,
    useColorModeValue('muted.400', 'muted.600')
  )

  const handleChangeSubject = useCallback(
    (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
      onChangeSubject?.(e.nativeEvent.text)
    },
    [subject]
  )

  return (
    <SwipeView
      simultaneousHandlers={simultaneousHandlers}
      onSwipeLeft={onRemove}
      backView={
        <Box
          w={'full'}
          h={'full'}
          bg={'red.500'}
          alignItems={'flex-end'}
          justifyContent={'center'}
          pr={4}
        >
          <Icon color="white" as={<Feather name="trash-2" />} size={'sm'} />
        </Box>
      }
    >
      <HStack
        alignItems={'center'}
        w={'full'}
        px={4}
        py={2}
        bg={useColorModeValue('warmGray.50', 'primary.900')}
      >
        <Box w={30} h={30} mr={2}>
          <Pressable onPress={onToggleCheckbox}>
            <AnimatedCheckbox
              checked={isDone}
              highlightColor={highlighColor}
              checkmarkColor={checkmarkColor}
              boxOutlineColor={boxStroke}
            />
          </Pressable>
        </Box>
        {isEditing ? (
          <Input
            placeholder="Task"
            value={subject}
            variant={'unstyled'}
            fontSize={19}
            px={1}
            py={0}
            autoFocus
            blurOnSubmit
            onChange={e => handleChangeSubject(e)}
            onBlur={onFinishedEditing}
          />
        ) : (
          <AnimatedTaskLabel
            strikethrough={isDone}
            textColor={activeTextColor}
            inactiveTextColor={doneTextColor}
            onPress={onPressLabel}
          >
            {subject}
          </AnimatedTaskLabel>
        )}
      </HStack>
    </SwipeView>
  )
}
