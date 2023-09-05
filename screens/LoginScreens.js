import { View, Text, Image } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Phone from '../assets/svg/iconPhone.svg'
import Color from '../constants/Color'
import { TextInput } from 'react-native'
import Check from '../assets/svg/iconCheck.svg'
import { TouchableOpacity } from 'react-native'

const LoginScreens = () => {

  return (
    <View>
      <ImageBackground
      source={require('../assets/images/background.png')}
      resizeMode='cover'
      style={{height:'100%'}}
      >
        <View className="items-center mt-24 mb-12">
          <Image source={require('../assets/images/dailydriver.png')}/>
        </View>
        <View className="mx-6 bg-white rounded-xl pb-5" style={{elevation:2}}>
          <Text className="my-5 text-center text-3xl" style={{fontFamily:'semibold'}}>Log in</Text>
          {/* Nomor HP */}
          <View className="flex-row p-2 mx-3 border rounded-md items-center" style={{borderColor:Color.AbuAbu}}>
            <Phone stroke={Color.Hitam}/>
            <TextInput
            className="text-xl ml-3 w-60"
            placeholder='081234567890'
            keyboardType='number-pad'
            />
            <Check/>
          </View>
          <TouchableOpacity className="mx-3 my-6 p-3 rounded-md" style={{backgroundColor:Color.Hijau}}>
            <Text className="text-center text-xl" style={{fontFamily:'semibold', color:Color.Putih}} >Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

export default LoginScreens