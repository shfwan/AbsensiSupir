import { View, Text, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import Color from '../constants/Color'
import IconCalendar from '../assets/svg/Calendar.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setKalender } from '../redux/Action'
import { Calendar } from 'react-native-calendars'


const Kalender = (props) => {
    const dispatch = useDispatch()
    const selector = useSelector(data => data.kalender)

    const bulan = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
    ]
    const date = new Date()
    const tanggal = `${date.getDate()} ${bulan[date.getMonth()]} ${date.getFullYear()}`
    const [isDate, setDate] = useState(tanggal)

    selector === "" ? dispatch(setKalender(isDate)) : selector
    const [showModal, setModal] = useState(false)
    console.log(selector);
    return (
        <View className="items-center" style={{display: props.display}}>
            <TouchableOpacity className="bg-white p-2 rounded-md " style={{elevation: 5}}>
                <View className ="flex-row items-center gap-x-2">
                    <IconCalendar/>
                    <Text Text  className="text-base font-bold" style={{color: Color.Hijau}} onPress={() => setModal(true)}> {selector === "" ? isDate : selector} </Text>
                </View>
            </TouchableOpacity>
            <Modal transparent={true} visible={showModal} animationType='fade' onRequestClose={() => setModal(false)}>
                <TouchableOpacity className="h-full" activeOpacity={1} onPressOut={() => setModal(false)}>
                    <View className="pt-24 item">
                        <View className="m-5 bg-white rounded-3xl" style={{elevation: 4}}>
                            <View className="m-5 ">
                                <Calendar                                
                                    onDayPress={(day) => {
                                        dispatch(setKalender(`${day.day} ${bulan[day.month - 1]} ${day.year}`))
                                        setDate(`${day.day} ${bulan[day.month - 1]} ${day.year}`)
                                        setModal(false)
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    )
}

export default Kalender