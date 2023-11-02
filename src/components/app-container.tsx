import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'
import * as React from 'react'

type Props = {
  children: React.ReactNode
}

export const AppContainer = ({ children }: Props) => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>{children}</NativeBaseProvider>
    </NavigationContainer>
  )
}
