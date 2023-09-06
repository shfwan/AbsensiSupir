import { View, Text, TouchableOpacity, TextInput, Pressable} from 'react-native'
import React, { useState } from 'react'
import Color from '../constants/Color'
import { SafeAreaView } from 'react-native-safe-area-context'
import ButtonBack from '../components/ButtonBack'
import { useNavigation, useRoute } from '@react-navigation/native'
import MapView from 'react-native-maps'
import Map from '../assets/svg/iconMap.svg'
import { launchCamera } from 'react-native-image-picker'



const SakitScreens = () => {
    const navigation = useNavigation()
    const route = useRoute()
    
  return (
    <View className="flex-1 px-3.5" style={{backgroundColor:Color.Putih}}>
            <SafeAreaView className="mt-3 flex-row items-center ">
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ButtonBack Text = "Sakit"/>
                </TouchableOpacity>
            </SafeAreaView>
            <View className="w-fit mt-5  p-4 rounded-md" style={{backgroundColor:Color.Hijau }}>
                <View className="justify-center items-center">
                    <Text className="text-base" style={{fontFamily:'semibold', color:Color.Putih}}>{route.params.tanggal}</Text>
                    <Text className="mt-4 text-2xl" style={{fontFamily:'semibold', color:Color.Putih}}>{route.params.nama}</Text>
                    <Text className="text-2xl" style={{fontFamily:'semibold', color:Color.Kuning}}>{route.params.category}</Text>
                </View>
                <Text className=" mt-4 text-xl" style={{fontFamily:'semibold', color:Color.Putih}} >Keterangan</Text>
                <View className="w-fit h-32 items-start p-5 rounded-md" style={{backgroundColor:Color.Putih}}>
                    <TextInput className="w-full h-fit overflow-hidden text-base hw " style={{fontFamily:'regular'}} multiline/>
                </View>
                <View className=" my-5">
                    <Pressable className="p-3 mx-2 rounded-full" style={{backgroundColor:Color.Putih, elevation:3}}>
                        <Text className="text-xl text-center" style={{color:Color.Hijau, fontFamily:'semibold'}}>Upload surat dokter</Text>
                    </Pressable>
                </View>
            </View>
            <TouchableOpacity className="mt-5 p-3 rounded-full" style={{backgroundColor:Color.Hijau, elevation:3}}>
                <Text className="text-center text-xl" style={{fontFamily:'semibold', color:Color.Putih}}>Kirim</Text>
            </TouchableOpacity>
            
    </View>
  )
}

export default SakitScreens