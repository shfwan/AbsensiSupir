import { View, FlatList, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import IconArrowRight from '../assets/svg/iconArrowRight.svg'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import Color from '../constants/Color'

const CardList = ({data}) => {
    const navigation = useNavigation()
    const selectorCategory = useSelector(data => data.category)
    const selectorCalendar = useSelector(data => data.kalender)

    const setFilter = (item) => {
        if(item.category === selectorCategory) {
            return item
        } else if(selectorCategory === "All"){
            return item
        }
    }

    return (
        <FlatList
            data= { data.filter(item => setFilter(item)) }
            renderItem={
                ({item}) => {
                    if(item.tanggal === selectorCalendar) { 
                        return (
                            <TouchableOpacity 
                                className="px-3.5 py-2.5 h-fit rounded mx-1 my-2 bg-white"
                                style={{elevation: 4}}
                                onPress={() => {
                                    navigation.navigate("DetailKehadiran", item)
                                }}>
                                <View className="flex-row items-center justify-between">
                                    <View className="flex-row items-center justify-start  ">
                                        <View className="flex justify-start items-start mx-2 flex-column p-2">
                                            <Text className="text-lg" style={{fontFamily: 'semibold' ,color: item.category === "Hadir" ? Color.Hijau : Color.Kuning}}>{item.category}</Text>
                                            <Text className="text-md" style={{fontFamily: 'regular'}}>{item.tanggal}</Text>
                                        </View>
                                    </View>
                                    <IconArrowRight/>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                }
            }
        />
    )
}

export default CardList