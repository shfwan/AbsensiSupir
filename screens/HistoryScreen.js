import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import Category from '../components/Category'
import { Provider } from 'react-redux'
import { CategoriesAllHistory } from '../constants/Categories'
import storeState from '../redux/Store'
import { SafeAreaView } from 'react-native-safe-area-context'
import ButtonBack from '../components/ButtonBack'
import Kalender from '../components/Kalender'
import CardList from '../components/CardList'
import Color from '../constants/Color'

const HistoryScreen = () => {
    const data = [
        {nama: "shafwan", tanggal: "2 September 2023", category: "Hadir"},
        {nama: "ongko", tanggal: "6 September 2023", category: "Hadir"},
        {nama: "mingki", tanggal: "6 September 2023", category: "Hadir"},
        {nama: "ong", tanggal: "4 September 2023", category: "Hadir"},
    
        {nama: "ein", tanggal: "1 September 2023", category: "Sakit"},
        {nama: "ien", tanggal: "3 September 2023", category: "Sakit"},
        {nama: "risa", tanggal: "6 September 2023", category: "Sakit"},
    
        {nama: "ali", tanggal: "2 September 2023", category: "Izin"},
        {nama: "asril", tanggal: "5 September 2023", category: "Izin"},
        {nama: "cika", tanggal: "4 September 2023", category: "Izin"},
    ]
    return (
        <View className="flex-1 p-4" style={{backgroundColor: Color.Putih}}>
            <StatusBar/>
            <SafeAreaView>
                <ButtonBack Text="History"/>
                <Provider store={storeState}>
                    <Category data={CategoriesAllHistory}/>
                    <View className="mt-3">
                        <Kalender />
                        <View className="mt-3">
                            <CardList data={data} />
                        </View>
                    </View>
                </Provider>
            </SafeAreaView>
        </View>
    )
}

export default HistoryScreen