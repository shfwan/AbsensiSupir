import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Color from '../constants/Color'
import { SafeAreaView } from 'react-native-safe-area-context'
import ButtonBack from '../components/ButtonBack'
import { useNavigation, useRoute } from '@react-navigation/native'
import MapView from 'react-native-maps'
import Map from '../assets/svg/iconMap.svg'

const IzinScreens = () => {
    const navigation = useNavigation()
    const route = useRoute()
  return (
    <View className="flex-1 px-3.5" style={{backgroundColor:Color.Putih}}>
            <SafeAreaView className="mt-3 flex-row items-center ">
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ButtonBack Text = "Izin"/>
                </TouchableOpacity>
            </SafeAreaView>
            <View className="w-fit mt-5  p-4 rounded-md" style={{backgroundColor:Color.Hijau }}>
                <View className="justify-center items-center">
                    <Text className="text-base" style={{fontFamily:'semibold', color:Color.Putih}}>{route.params.tanggal}</Text>
                    <Text className="mt-4 text-2xl" style={{fontFamily:'semibold', color:Color.Putih}}>{route.params.nama}</Text>
                    <Text className="text-2xl" style={{fontFamily:'semibold', color:Color.Kuning}}>{route.params.category}</Text>
                </View>
                <Text className=" mt-4 text-xl" style={{fontFamily:'semibold', color:Color.Putih}} >Keterangan</Text>
                <View className="w-fit h-fit items-start p-5 rounded-md" style={{backgroundColor:Color.Putih}}>
                    <TextInput className="w-full h-fit overflow-clip text-base text-start " style={{fontFamily:'regular'}} multiline/>
                </View>
            </View>
            <TouchableOpacity className="mt-5 p-2 rounded-full" style={{backgroundColor:Color.Hijau}}>
                <Text className="text-center text-xl" style={{fontFamily:'semibold', color:Color.Putih}}>Kirim</Text>
            </TouchableOpacity>
    </View>
  )
}

export default IzinScreens