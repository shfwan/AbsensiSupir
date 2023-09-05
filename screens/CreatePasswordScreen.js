import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { ImageBackground } from 'react-native'
import Color from '../constants/Color'
import Key from '../assets/svg/iconKey.svg'
import EyeSlash from '../assets/svg/IconEyeSlash.svg'
import Eye from '../assets/svg/iconEye.svg'

const CreatePasswordScreen = () => {
    const [isPasswordShown, setIsPasswordShown] = useState(true)
    const [isConfirmPassword, setIsConfirmPassword] = useState(true)
    return (
<View>
    <ImageBackground
    source={require('../assets/images/background.png')}
    resizeMode='cover'
    style={{height:'100%'}}
    >
    <View className="items-center mt-24 mb-12">
        <Image source={require('../assets/images/dailydriver.png')}/>
    </View>
    <View className="mx-6 bg-white rounded-xl pb-5" style={{elevation:2}}>
        <Text className="my-5 text-center text-3xl" style={{fontFamily:'semibold'}}>Create Password</Text>

        {/* Password */}
        <View className="flex-row p-2 mx-3 border rounded-md items-center" style={{borderColor:Color.AbuAbu}}>
            <Key/>
            <TextInput
            className="text-base ml-3 w-60"
            placeholder='Create Password'
            placeholderTextColor={Color.AbuAbu}
            style={{fontFamily:'regular', width:'100%', color:Color.Hitam}}
            secureTextEntry={isPasswordShown}
            />
            <TouchableOpacity
            onPress={()=> setIsPasswordShown(!isPasswordShown)}
            className="absolute right-3 my-4"
            >{isPasswordShown ? (<EyeSlash/>) : (<Eye/>)}
            </TouchableOpacity>
        </View>

        {/* confirm password */}
        <View className="flex-row p-2 mt-6 mx-3 border rounded-md items-center" style={{borderColor:Color.AbuAbu}}>
            <Key/>
            <TextInput
            className="text-base ml-3 w-60"
            placeholder='Confirm Password'
            placeholderTextColor={Color.AbuAbu}
            style={{fontFamily:'regular', width:'100%', color:Color.Hitam}}
            secureTextEntry={isConfirmPassword}
            />
            <TouchableOpacity
            onPress={()=> setIsConfirmPassword(!isConfirmPassword)}
            className="absolute right-3 my-4"
            >{isConfirmPassword ? (<EyeSlash/>) : (<Eye/>)}
            </TouchableOpacity>
        </View>

        {/* button login */}
        <TouchableOpacity className="mx-3 my-6 p-3 rounded-md" style={{backgroundColor:Color.Hijau}}>
            <Text className="text-center text-xl" style={{fontFamily:'semibold', color:Color.Putih}} >Login</Text>
        </TouchableOpacity>
    </View>
    </ImageBackground>
</View>
)
}


export default CreatePasswordScreen