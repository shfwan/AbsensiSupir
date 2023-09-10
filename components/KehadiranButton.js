import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Color from '../constants/Color'
import { useWindowDimensions } from 'react-native'

const KehadiranButton = ({text}) => {
    const window = useWindowDimensions()
    return (
        
            <Text className={window.width < 390 ? "text-base text-center" : "text-xl text-center"} style={{fontFamily:'regular', color:Color.Hijau}}>{text}</Text>
    )
}

export default KehadiranButton