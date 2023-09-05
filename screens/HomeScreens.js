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
import { Data, statusCount } from '../constants/Data'
import ActionButton from '../components/ActionButton'
import KehadiranButton from '../components/KehadiranButton'
import Status from '../components/Status'

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
                    <KehadiranButton text="Hadir"/>
                    <KehadiranButton text="Pulang"/>
                </View>
                <View className="mt-6 mb-3 flex-row gap-x-1">
                    <Text className="text-lg text-white" style={{fontFamily:'regular'}}>Absensi bulan</Text>
                    <Text className="text-lg text-black" style={{fontFamily:'semibold'}}>Juli</Text>
                    <Text className="text-lg text-white" style={{fontFamily:'semibold'}}>2023</Text>
                </View>
                <FlatList
                    data={statusCount}
                    numColumns={2}
                    renderItem={
                        ({item}) => (
                            <View className="m-1">
                                <Status icon={item.icon} status={item.status} count={item.count}/>
                            </View>
                        )
                    }
                />
            </View>
        </View>
    )
}

export default HomeScreens