import { View, Text, TouchableOpacity, Alert, Modal, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import Color from '../constants/Color';
import { useNavigation } from '@react-navigation/native';
import { data } from '../constants/Data';

const ActionButton = (props) => {
    const navigation = useNavigation()
    const window = useWindowDimensions()
    const [isModal, setModal] = useState(false)
    const logOut = () => { props.btnName === "Keluar" ? setModal(true) : navigation.navigate(props.btnName, ...data) }
    return (
        <View className="flex-col">
            <TouchableOpacity 
                className="p-3 rounded-lg items-center " 
                activeOpacity={0.5}
                style={{backgroundColor: props.btnName === "Keluar" ? Color.Merah : Color.Hijau}}
                onPress={logOut}>
                {props.icon}
            </TouchableOpacity>
            <Text className={window.width < 390 ? "text-sm text-center" : "text-lg text-center"} style={{fontFamily:'regular'}}>{props.btnName}</Text>
            <Modal transparent={true} visible={isModal}>
                <View className="flex-1 items-center justify-center " style={{backgroundColor: "#00000099"}}>
                    <View className="w-72 h-fit items-center justify-center bg-white flex-col p-4 rounded-2xl">
                        <View className="m-5">
                            <Text className="text-lg text-center" style={{fontFamily: 'bold'}} >Apakah anda yakin ingin keluar?</Text>
                        </View>
                        <View className="flex-row">
                            <TouchableOpacity className="mx-2 p-2 rounded-md" style={{backgroundColor: Color.Hijau}}>
                                <View className="w-24 ">
                                    <Text className="text-white text-center text-base" style={{fontFamily: 'semibold'}}>Iya</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity className="mx-2 p-2 rounded-md" style={{backgroundColor: Color.Hijau}} onPress={() => setModal(false)}>
                                <View className="w-24">
                                    <Text className="text-white text-center text-base" style={{fontFamily: 'semibold'}}>Tidak</Text>
                                </View>
                            </TouchableOpacity>
                            
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default ActionButton