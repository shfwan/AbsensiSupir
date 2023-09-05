import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Color from '../constants/Color'
import Profile from '../assets/svg/iconProfile.svg'
import Izin from '../assets/svg/iconIzin.svg'
import History from '../assets/svg/iconHistory.svg'
import Sakit from '../assets/svg/iconSakit.svg'
import Exit from '../assets/svg/iconExit.svg'
import Hadir from '../assets/svg/iconHadir.svg'
import Terlambat from '../assets/svg/iconTerlambat.svg'
import { Data } from '../constants/Data'
import ActionButton from '../components/ActionButton'

const HomeScreens = () => {
    return (
        <View className="flex-1 flex-col justify-center item" style={{backgroundColor:Color.Background}}>
            <View className="flex px-5" style={{backgroundColor: Color.Background}}>
                <SafeAreaView>
                    <View className="p-5 flex-col bg-white rounded-2xl mt-3" style={{elevation:3}}>
                        <View className="flex-row justify-between">
                            <View className="flex-col items-start">
                                <Text className="text-xl" style={{fontFamily:'regular'}}>Selamat Pagi</Text>
                                <Text className="text-3xl text-left mt-3" style={{fontFamily:'bold'}}>Ali</Text>
                            </View>
                            <View className="flex-col items-center">
                                <Text className="text-xl" style={{fontFamily:'regular'}}>Jam Kerja</Text>
                                <Text className="text-base mt-3" style={{fontFamily:'regular'}}>08:00 - 17:00 WIT</Text>
                            </View>
                        </View>
                        <View className= " mt-11 rounded-sm" style={{borderWidth:0.5, borderColor:Color.AbuAbu}}  />
                        <View className="flex-row justify-between my-5">
                            <ActionButton data={Data}/>

                        </View>
                    </View>
                </SafeAreaView>
            </View>
            <View className="flex-1 px-6 pt-6 mt-6" style={{borderTopLeftRadius:50, borderTopRightRadius:50, backgroundColor:Color.Hijau}} >
                <View className="flex-row justify-between">
                    <TouchableOpacity className="py-4 w-40 rounded-full" style={{backgroundColor:Color.Putih, elevation:3}}>
                        <Text className="text-xl text-center" style={{fontFamily:'regular', color:Color.Hijau}}>Hadir</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="py-4 w-40 rounded-full" style={{backgroundColor:Color.Putih, elevation:3}}>
                        <Text className="text-xl text-center" style={{fontFamily:'regular', color:Color.Hijau}}>Pulang</Text>
                    </TouchableOpacity>
                </View>
                <Text className="text-lg mt-6 mb-3" style={{fontFamily:'regular', color:Color.Putih}} >Absensi bulan 
                    <Text className="text-lg" style={{fontFamily:'semibold', color:Color.Hitam}}> Juli</Text>
                    <Text className="text-lg" style={{fontFamily:'semibold', color:Color.Putih}}> 2023</Text>
                </Text>
                <View className="flex-row justify-between">
                    <View className="w-40 justify-evenly items-center flex-row rounded-lg  p-5" style={{backgroundColor:Color.Putih}}>
                        <Hadir/>
                        <View className="items-center">
                            <Text className="text-xl" style={{fontFamily:'semibold', color:Color.Hijau}}>Hadir</Text>
                            <Text className="text-xl" style={{fontFamily:'semibold'}}>15</Text>
                        </View>
                    </View>
                    <View className="w-40 justify-evenly items-center flex-row rounded-lg p-5" style={{backgroundColor:Color.Putih}}>
                        <Izin stroke={Color.Hijau}/>
                        <View className="items-center">
                            <Text className="text-xl" style={{fontFamily:'semibold', color:Color.Hijau}}>Izin</Text>
                            <Text className="text-xl" style={{fontFamily:'semibold'}}>1</Text>
                        </View>
                    </View>
                </View>
                <View className="flex-row justify-between mt-5">
                    <View className="w-40 justify-evenly items-center flex-row rounded-lg p-5" style={{backgroundColor:Color.Putih}}>
                        <Sakit stroke={Color.Hijau}/>
                        <View className="items-center">
                            <Text className="text-xl" style={{fontFamily:'semibold', color:Color.Hijau}}>Sakit</Text>
                            <Text className="text-xl" style={{fontFamily:'semibold'}}>3</Text>
                        </View>
                    </View>
                    <View className="w-40 justify-evenly items-center flex-row rounded-lg p-5" style={{backgroundColor:Color.Putih}}>
                        <Terlambat/>
                        <View className="items-center">
                            <Text className="text-xl" style={{fontFamily:'semibold', color:Color.Hijau}}>Terlambat</Text>
                            <Text className="text-xl" style={{fontFamily:'semibold'}}>10</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default HomeScreens