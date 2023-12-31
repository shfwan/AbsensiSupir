import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Color from '../constants/Color'
import { Data, statusCount } from '../constants/Data'
import ActionButton from '../components/ActionButton'
import KehadiranButton from '../components/KehadiranButton'
import Status from '../components/Status'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import HadirScreens from './HadirScreens'

const HomeScreens = () => {
    const navigation = useNavigation()
    const bulan = [
        "Januari", "Februari", "Maret", "April", "May", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ]
    const date = new Date()
    return (
        <View className="flex-1 flex-col justify-center item" style={{backgroundColor:Color.Putih}}>
            <View className="flex px-5 " style={{backgroundColor: Color.Putih}}>
                <SafeAreaView>
                    <View className="p-5 flex-col bg-white rounded-2xl mt-3 shadow-sm shadow-gray-300" style={{elevation:3}}>
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
                        <View className="bg-white items-center justify-center my-5">
                            <FlatList
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={Data}
                                renderItem={
                                    ({item}) => (
                                        <View className="mx-0.5">
                                            <ActionButton btnName={item.btnName} icon={item.icon} />
                                        </View>
                                    )
                                }
                            />
                        </View>
                    </View>
                </SafeAreaView>
            </View>
            <View className="flex-1 px-6 pt-6 mt-6" style={{borderTopLeftRadius:50, borderTopRightRadius:50, backgroundColor:Color.Hijau}} >
                <View className="flex-row justify-between">
                    <HadirScreens/>
                    <TouchableOpacity className={window.width < 390 ? "py-4 w-36 rounded-full shadow-sm shadow-gray-300" : "py-4 w-40 rounded-full shadow-sm shadow-gray-300"} style={{backgroundColor:Color.Putih, elevation:3}}
                        >
                        <KehadiranButton text="Pulang"/>
                        </TouchableOpacity>
                </View>
                <View className="mt-6 mb-3 flex-row gap-x-1">
                    <Text className="text-lg text-white" style={{fontFamily:'regular'}}>Absensi bulan</Text>
                    <Text className="text-lg text-black" style={{fontFamily:'semibold'}}>{bulan[date.getMonth()]}</Text>
                    <Text className="text-lg text-white" style={{fontFamily:'semibold'}}>{date.getFullYear()}</Text>
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