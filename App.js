import { View, Text } from 'react-native'
import React, { useCallback } from 'react'
import { useFonts } from 'expo-font'
import LoginScreens from './screens/LoginScreens'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import CreatePasswordScreen from './screens/CreatePasswordScreen'
import LoginUserScreens from './screens/LoginUserScreens'
import HomeScreens from './screens/HomeScreens'

export default function App() {
  const [fontsLoaded] = useFonts({
    regular : require("./assets/fonts/Poppins-Regular.ttf"),
    light : require("./assets/fonts/Poppins-Light.ttf"),
    bold : require("./assets/fonts/Poppins-Bold.ttf"),
    semibold : require("./assets/fonts/Poppins-SemiBold.ttf"),
    medium : require("./assets/fonts/Poppins-Medium.ttf"),
    extrabold : require("./assets/fonts/Poppins-ExtraBold.ttf"),
  })
  const onLayoutRootView = useCallback(async()=>{
    if(fontsLoaded){
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded])
if (!fontsLoaded){
  return null
}
  return (
    <HomeScreens/>
  )
}