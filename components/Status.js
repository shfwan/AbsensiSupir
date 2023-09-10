import { View, Text, TouchableOpacity, useWindowDimensions } from 'react-native'
import React from 'react'
import Color from '../constants/Color'
import { Platform } from 'react-native'

const Status = (props) => {
    const window = useWindowDimensions()
    return (
        <View className={window.width < 390 ? "w-36 justify-evenly items-center flex-row rounded-lg  p-5" : "w-40 justify-evenly items-center flex-row rounded-lg  p-5"} style={{backgroundColor:Color.Putih}}>
            {props.icon}
            <View className="items-center">
                <Text className="text-lg" style={{fontFamily:'semibold', color:Color.Hijau}}>{props.status}</Text>
                <Text className="text-xl" style={{fontFamily:'semibold'}}>{props.count}</Text>
            </View>
        </View>
    )
}

export default Status