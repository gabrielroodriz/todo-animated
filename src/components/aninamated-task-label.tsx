import { Box, HStack, Pressable, Text } from 'native-base'
import React, { memo, useEffect } from 'react'

import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming
} from 'react-native-reanimated'

interface Props {
  strikethrough: boolean
  textColor: string
  inactiveTextColor: string
  onPress?: () => void
  children?: React.ReactNode
}

const AnimatedBox = Animated.createAnimatedComponent(Box)
const AnimatedHStack = Animated.createAnimatedComponent(HStack)
const AnimatedText = Animated.createAnimatedComponent(Text)

const AnimatedTaskLabel = memo((props: Props) => {
  const { strikethrough, textColor, inactiveTextColor, onPress, children } =
    props

  const hstackOffSet = useSharedValue(0)
  const hstackAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: hstackOffSet.value }]
    }
  }, [strikethrough])

  const textColorProgress = useSharedValue(0)
  const textAnimatedStyles = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        textColorProgress.value,
        [0, 1],
        [textColor, inactiveTextColor]
      )
    }
  }, [strikethrough, textColor, inactiveTextColor])

  const strikethroughWidth = useSharedValue(0)
  const strikethroughAnimatedStyles = useAnimatedStyle(() => {
    return {
      width: `${strikethroughWidth.value * 100}%`,
      borderBottomColor: interpolateColor(
        textColorProgress.value,
        [0, 1],
        [textColor, inactiveTextColor]
      )
    }
  }, [strikethrough, textColor, inactiveTextColor])

  useEffect(() => {
    const easing = Easing.out(Easing.quad)

    if (strikethrough) {
      hstackOffSet.value = withSequence(
        withTiming(4, { duration: 200, easing }),
        withTiming(0, { duration: 200, easing })
      )
      textColorProgress.value = withDelay(
        1000,
        withTiming(1, { duration: 400, easing })
      )
      strikethroughWidth.value = withTiming(1, { duration: 400, easing })
    } else {
      textColorProgress.value = withTiming(0, { duration: 400, easing })
      strikethroughWidth.value = withTiming(0, { duration: 400, easing })
    }
  }, [strikethrough])

  return (
    <Pressable onPress={onPress}>
      <AnimatedHStack alignItems={'center'} style={[hstackAnimatedStyles]}>
        <AnimatedText
          fontSize={19}
          noOfLines={1}
          isTruncated
          px={1}
          style={[textAnimatedStyles]}
        >
          {children}
        </AnimatedText>
        <AnimatedBox
          position={'absolute'}
          h={1}
          borderBottomWidth={1}
          style={[strikethroughAnimatedStyles]}
        />
      </AnimatedHStack>
    </Pressable>
  )
})

export default AnimatedTaskLabel
