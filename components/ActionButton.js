import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Color from '../constants/Color';
import { useNavigation } from '@react-navigation/native';

const ActionButton = (props) => {
    // const navigation = useNavigation()
    return (
        <View className="flex-col">
            <TouchableOpacity className="p-2 rounded-lg" style={{backgroundColor: props.btnName === "Keluar" ? Color.Merah : Color.Hijau}} onPress={() => {}}>
                    {props.icon}
            </TouchableOpacity>
            <Text className="text-base text-center" style={{fontFamily:'regular'}}>{props.btnName}</Text>
        </View>
    )
}

export default ActionButton