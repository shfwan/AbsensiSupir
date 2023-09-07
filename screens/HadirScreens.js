import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Color from '../constants/Color'
import { SafeAreaView } from 'react-native-safe-area-context'
import ButtonBack from '../components/ButtonBack'
import { useNavigation, useRoute } from '@react-navigation/native'
import MapView , {Marker, Circle} from 'react-native-maps'
import Map from '../assets/svg/iconMap.svg'



const HadirScreens = () => {
    const onRegionChange = (region) => {
        console.log(region)
    }
    // const navigation = useNavigation()
    // const route = useRoute()
  return (
    <View className="flex-1 px-3.5" style={{backgroundColor:Color.Putih}}>
            <SafeAreaView className="mt-3 flex-row items-center ">
                {/* <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ButtonBack/>
                </TouchableOpacity> */}
                <Text className="text-2xl ml-3" style={{fontFamily:'semibold', color:Color.Hijau}}>Detail Kehadiran</Text>
            </SafeAreaView>
            <View className="w-fit mt-5  p-4 rounded-md" style={{backgroundColor:Color.Hijau }}>
                <View className="justify-center items-center">
                    <Text className="text-base" style={{fontFamily:'semibold', color:Color.Putih}}>7 September 2023</Text>
                    <Text className="text-2xl mt-3" style={{fontFamily:'semibold', color:Color.Putih}}>Anda Telah Masuk</Text>
                    <Text className="text-lg my-1" style={{fontFamily:'regular', color:Color.Putih}}>08:07 WIT</Text>
                </View>
                <View className="rounded-md mb-3" style={{overflow:'hidden'}}>
                    <MapView className="w-auto h-52 rounded-md"
                    onRegionChange={onRegionChange}
                    initialRegion={{"latitude": -3.6986581592589007, "latitudeDelta": 0.0002787032991031779, "longitude": 128.18019339814782, "longitudeDelta": 0.0004462525248527527}}
                    pitchEnabled={false} rotateEnabled={false} zoomEnabled={false} scrollEnabled={false} 
                    >
                        <Marker
                            coordinate={{
                                latitude: -3.6986581592589007, longitude:128.18019339814782
                            }}
                        />
                        <Circle
                        center={{"latitude": -3.6986581592589007, "latitudeDelta": 0.0002787032991031779, "longitude": 128.18019339814782, "longitudeDelta": 0.0004462525248527527}}
                        radius={10}
                        fillColor='#09A3BE33'
                        strokeColor='#09A3BE'
                        />
                    </MapView>
                </View>
            </View>
    </View>
  )
}

export default HadirScreens