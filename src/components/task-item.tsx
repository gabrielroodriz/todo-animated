import {
  Box,
  HStack,
  Pressable,
  themeTools,
  useColorModeValue,
  useTheme
} from 'native-base'
import AnimatedCheckbox from 'react-native-checkbox-reanimated'
import AnimatedTaskLabel from './aninamated-task-label'

interface Props {
  isDone: boolean
  onToggleCheckbox?: () => void
}
export const TaskItem = (props: Props) => {
  const { isDone, onToggleCheckbox } = props
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

  return (
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
      <AnimatedTaskLabel
        strikethrough={isDone}
        textColor={activeTextColor}
        inactiveTextColor={doneTextColor}
      >
        texto
      </AnimatedTaskLabel>
    </HStack>
  )
}
