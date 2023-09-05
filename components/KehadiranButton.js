import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Color from '../constants/Color'

const KehadiranButton = ({text}) => {
    return (
        <TouchableOpacity className="py-4 w-40 rounded-full" style={{backgroundColor:Color.Putih, elevation:3}}>
            <Text className="text-xl text-center" style={{fontFamily:'regular', color:Color.Hijau}}>{text}</Text>
        </TouchableOpacity>
    )
}

export default KehadiranButton