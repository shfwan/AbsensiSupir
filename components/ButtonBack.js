import { View, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import ArrowLeft from '../assets/svg/iconArrowLeft.svg'
import Color from '../constants/Color'

const ButtonBack = (props) => {
    // const navigation = useNavigation()
    return (
        <View className="flex-row items-center gap-x-4">
            <TouchableOpacity onPress={() => { navigation.goBack() }} activeOpacity={1} >
                <View className="px-4 py-2 rounded-xl bg-white " style={{elevation: 3}}>
                    <ArrowLeft stroke={Color.Hijau}/>
                </View>
            </TouchableOpacity>
            <Text className="text-2xl" style={{fontFamily: 'semibold', color: Color.Hijau}} >{props.Text}</Text>
        </View>
    )
}

export default ButtonBack