import { View, Text, ScrollView , TouchableOpacity, Image, ImageBackground} from 'react-native'
import React from 'react'
import Color from '../constants/Color'
import { SafeAreaView } from 'react-native-safe-area-context'
import Phone from '../assets/svg/iconPhone.svg'
import Alamat from '../assets/svg/iconAlamat.svg'
import Email from '../assets/svg/iconEmail.svg'
import Hadir from '../assets/svg/iconHadir.svg'
import Izin from '../assets/svg/iconIzin.svg'
import Sakit from '../assets/svg/iconSakit.svg'
import Terlambat from '../assets/svg/iconWaktu.svg'
import ButtonBack from '../components/ButtonBack'
import Check from '../assets/svg/iconCentang.svg'
import Location from '../assets/svg/iconLocation.svg'
import Age from '../assets/svg/iconAge.svg'


const ProfileScreens = () => {
    return (
        <View className="bg-white">
            <ImageBackground
            source={require('../assets/images/shape.png')}
            resizeMode='cover'
            style={{height:500}}
            >
                <SafeAreaView className="flex mt-12 mb-10 px-4">
                    <TouchableOpacity>
                        <ButtonBack/>
                    </TouchableOpacity>
                </SafeAreaView>
                <View className="flex px-6 pt-8 mt-8">
                    <View className="items-center justify-center">
                        <Image 
                            source={require("../assets/images/People1.jpeg")}
                            style={{height:170, width:170, borderRadius:85, borderWidth:4, borderColor:Color.Putih, marginTop:-100}}/>
                        <Text className="text-2xl mt-3" style={{fontFamily:'regular', color:Color.Putih}}>Ali Putuhena</Text>
                    </View>
                    <View className="flex-row justify-center items-center my-2">
                        <Text className="text-xl" style={{fontFamily:'semibold', color:Color.Green}}>Available</Text>
                        <Check/>
                    </View>
                    <View className="flex-row justify-center items-center my-2">
                        <Location/>
                        <Text className="text-base ml-2" style={{fontFamily:'regular', color:Color.Putih}}>Ambon, Maluku</Text>
                    </View>
                </View>
            </ImageBackground>
            <View className="flex mx-10">
                <View className="flex-row mb-5">
                    <Phone stroke={Color.Hitam}/>
                    <Text className="text-xl ml-3" style={{fontFamily:'semibold' ,color:Color.Hitam}}>081234567890</Text>
                </View>
                <View className="flex-row mb-5">
                    <Age />
                    <Text className="text-xl ml-3" style={{fontFamily:'semibold' ,color:Color.Hitam}}>30 Tahun</Text>
                </View>
                <View className="flex-row mb-5">
                    <Alamat stroke={Color.Hitam}/>
                    <Text className="text-xl ml-3" style={{fontFamily:'semibold' ,color:Color.Hitam}}>Galunggung</Text>
                </View>
                <View className="flex-row mb-5">
                    <Email stroke={Color.Hitam}/>
                    <Text className="text-xl ml-3" style={{fontFamily:'semibold' ,color:Color.Hitam}}>aliputuhena@gmail.com</Text>
                </View>
                
                
            </View>
        </View>
    )
}

export default ProfileScreens