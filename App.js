import { View, Text } from 'react-native'
import React, { useCallback } from 'react'
import { useFonts } from 'expo-font'
import LoginScreens from './screens/LoginScreens'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import CreatePasswordScreen from './screens/CreatePasswordScreen'
import LoginUserScreens from './screens/LoginUserScreens'
import HomeScreens from './screens/HomeScreens'
import HistoryScreen from './screens/HistoryScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProfileScreens from './screens/ProfileScreens'

export default function App() {
  const Stack = createNativeStackNavigator()
  const [fontsLoaded] = useFonts({
    regular : require("./assets/fonts/Poppins-Regular.ttf"),
    light : require("./assets/fonts/Poppins-Light.ttf"),
    bold : require("./assets/fonts/Poppins-Bold.ttf"),
    semibold : require("./assets/fonts/Poppins-SemiBold.ttf"),
    medium : require("./assets/fonts/Poppins-Medium.ttf"),
    extrabold : require("./assets/fonts/Poppins-ExtraBold.ttf"),
  })
  const onLayoutRootView = useCallback( async () => {
    if(fontsLoaded){
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded])
if (!fontsLoaded){
  return null
}
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={HomeScreens}/>
        <Stack.Screen name='Profile' component={ProfileScreens}/>
        <Stack.Screen name='History' component={HistoryScreen}/>
        <Stack.Screen name='Izin' component={HistoryScreen}/>
        <Stack.Screen name='Sakit' component={HistoryScreen}/>
        {/* <Stack.Screen name='Home' component={HomeScreens}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}