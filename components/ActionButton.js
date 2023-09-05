import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Color from '../constants/Color';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ActionButton = (props) => {
    const navigation = useNavigation()
    return (
        <View className="flex-1 flex-row justify-between">
            {
                props.data.map((item) => (
                    <View className="flex-col">
                        <TouchableOpacity className="p-2 rounded-lg" style={{backgroundColor: item.btnName === "Keluar" ? Color.Merah : Color.Hijau}} onPress={() => {navigation.navigate(item.btnName)}}>
                                {item.icon}
                        </TouchableOpacity>
                        <Text className="text-base text-center" style={{fontFamily:'regular'}}>{item.btnName}</Text>
                    </View>
                ))
            }
        </View>
    )
}

export default ActionButton