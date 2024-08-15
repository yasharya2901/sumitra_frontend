import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const App = () => {
  return (
    <SafeAreaView className={`w-full h-full`}>
        <View>
            <Text className="text-lg bg-red-300 font-pbold">App</Text>
        </View>
    </SafeAreaView>
  )
}

export default App