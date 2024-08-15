import { View, Text, TouchableOpacity, Animated, Alert } from 'react-native'
import React, { useState, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../../components/CustomButton'
import LoginField from '../../components/LoginField'
import {Link, router} from 'expo-router';


const SignIn = () => {
  const [form, setForm] = useState({
    mobile: '',
    otp:'',
  })

  const submit = async () => {
    try {
      router.replace('/(pages)/home')
        console.log(form);
    } catch (error) {
      Alert.alert('Error', error.message)
    }
  }

  const sendOTP = async () => {
    try {
      console.log('send otp');
      
      console.log(form);
    } catch (error) {
      Alert.alert('Error', error.message)
    }
  }

  return (
    <SafeAreaView className="flex flex-col p-4 h-full justify-between bg-white">
      <View className="">
        <View className="h-40 flex justify-end items-center">
          <Text className={`font-pbold text-2xl w-max`}>Sign In</Text>

        </View>
        <View className="flex justify-around h-80 mt-12">
          <View>
            <Text className={`font-pbold text-left text-2xl`}>Welcome Back!</Text>
            <Text className={`font-pmedium text-base text-left`}>Log in to your account.</Text>
          </View>
          <View>
            <LoginField
              placeholder="Mobile number"
              value={form.mobile}
              handleChangeText={(e) => setForm({...form, mobile: e})}
              keyboardType='phone-pad'
            />
 
            <LoginField
                placeholder="OTP"
                value={form.otp}
                handleChangeText={(e) => setForm({...form, otp: e})}
                keyboardType='number-pad'
            />
            <TouchableOpacity activeOpacity={0.8} onPress={sendOTP}>
              <Text className={`font-pmedium text-sm text-right`}>{"Send OTP"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className={`h-14`}>
        <View className="flex flex-row">
            <View className="flex-1">
                <CustomButton buttonStyle="bg-red-400 rounded-md ml-2" textStyle={`font-pbold text-base`} text='Sign In' handlePress={submit}/>
            </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SignIn