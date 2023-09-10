import { View, Text, TouchableOpacity, Modal } from 'react-native'
import React, {useState} from 'react'
import Color from '../constants/Color'
import { SafeAreaView } from 'react-native-safe-area-context'
import ButtonBack from '../components/ButtonBack'
import { useNavigation, useRoute } from '@react-navigation/native'
import MapView , {Marker, Circle} from 'react-native-maps'
import Map from '../assets/svg/iconMap.svg'
import KehadiranButton from '../components/KehadiranButton'
import { useWindowDimensions } from 'react-native'



const HadirScreens = () => {
    const [hadir, setHadir] = useState(false)
    const onRegionChange = (region) => {
        console.log(region)
    }
    // const navigation = useNavigation()
    // const route = useRoute()
  return (
    <>
    <TouchableOpacity className={window.width < 390 ? "py-4 w-36 rounded-full shadow-sm shadow-gray-300" : "py-4 w-40 rounded-full shadow-sm shadow-gray-300"} style={{backgroundColor:Color.Putih, elevation:3}}
    onPress={()=> setHadir(true)}
    >
        <KehadiranButton text="Hadir"/>
    </TouchableOpacity>
    <Modal
    transparent={true}
    visible={hadir}
    >
        <View className="flex-1 items-center justify-center " style={{backgroundColor: "#00000099"}}>
            <View className="w-72 h-fit items-center justify-center flex-col py-4  rounded-2xl"  style={{backgroundColor:Color.Hijau }}>
                <View>
                    <View className="justify-center items-center">
                        <Text className="text-base" style={{fontFamily:'semibold', color:Color.Putih}}>7 September 2023</Text>
                        <Text className="text-2xl mt-3" style={{fontFamily:'semibold', color:Color.Putih}}>Anda Telah Masuk</Text>
                        <Text className="text-lg my-1" style={{fontFamily:'regular', color:Color.Putih}}>08:07 WIT</Text>
                    </View>
                    <View className="rounded-md mb-3" style={{overflow:'hidden'}}>
                        <MapView className="w-60 h-52 rounded-md"
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
                <TouchableOpacity className="mx-2 mt-5 p-2 rounded-md" style={{backgroundColor: Color.Putih}} onPress={() => setHadir(false)}>
                        <Text className="text-center text-lg" style={{fontFamily: 'semibold', color:Color.Hijau, textAlign:'center'}}>Oke</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>

    </Modal>
    
    </>
  )
}

export default HadirScreens