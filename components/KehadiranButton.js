import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Color from '../constants/Color'
import { useWindowDimensions } from 'react-native'

const KehadiranButton = ({text}) => {
    const window = useWindowDimensions()
    return (
        <TouchableOpacity className={window.width < 390 ? "py-4 w-36 rounded-full shadow-sm shadow-gray-300" : "py-4 w-40 rounded-full shadow-sm shadow-gray-300"} style={{backgroundColor:Color.Putih, elevation:3}}>
            <Text className={window.width < 390 ? "text-base text-center" : "text-xl text-center"} style={{fontFamily:'regular', color:Color.Hijau}}>{text}</Text>
        </TouchableOpacity>
    )
}

export default KehadiranButton