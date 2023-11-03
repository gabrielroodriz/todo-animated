import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider, theme } from 'native-base'

type Props = {
  children: React.ReactNode
}

export const AppContainer = ({ children }: Props) => {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>
    </NavigationContainer>
  )
}
