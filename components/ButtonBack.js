import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import ArrowLeft from '../assets/svg/iconArrowLeft.svg'
import Color from '../constants/Color'

const ButtonBack = () => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => { navigation.goBack() }} activeOpacity={1} >
            <View className="px-5 py-3 rounded-xl bg-white " style={{elevation: 5}}>
                <ArrowLeft stroke={Color.Hijau}/>
            </View>
        </TouchableOpacity>
    )
}

export default ButtonBack