import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import Category from '../components/Category'
import { Provider } from 'react-redux'
import { CategoriesAllHistory } from '../constants/Categories'
import storeState from '../redux/Store'
import { SafeAreaView } from 'react-native-safe-area-context'
import ButtonBack from '../components/ButtonBack'

const HistoryScreen = () => {
    return (
        <Provider store={storeState}>
            <StatusBar/>
            <View className="flex-1 px-4 mt-4">
                <SafeAreaView>
                    <View className="items-start">
                        <ButtonBack Text="History"/>
                    </View>
                    <Category data={CategoriesAllHistory}/>
                </SafeAreaView>
            
            </View>
        </Provider>
    )
}

export default HistoryScreen