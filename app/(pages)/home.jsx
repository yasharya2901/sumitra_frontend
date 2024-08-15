import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons/faUser';
import * as Animatable from 'react-native-animatable';
import { router } from 'expo-router';

const Home = () => {
  const [helpSelected, setHelpSelected] = React.useState(false);

  const styles = StyleSheet.create({
    shadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 6.0,
      elevation: 6,
    },
    rippleContainer: {
      width: 200,
      height: 200,
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <SafeAreaView className={`w-full h-full bg-red-400 flex`}>
      <View className={`items-end p-4`}>
        <TouchableOpacity
          className={`flex items-center mt-4 bg-gray-50 p-4 rounded-full w-18 h-18 bg-opacity-75`}
          activeOpacity={0.8}
          onPress={() => router.push("/profile")}
        >
          <FontAwesomeIcon icon={faUser} />
          <Text className={`text-[12px] font-pmedium`}>Profile</Text>
        </TouchableOpacity>
      </View>

      <View className={`flex items-center justify-center h-full w-full pb-48`}>
        <TouchableOpacity
        
          activeOpacity={0.9}
          onPress={() => setHelpSelected(!helpSelected)}
        >
          {helpSelected ? (
            <Animatable.View
              animation="pulse"
              easing="ease-out"
              iterationCount="infinite"
              style={styles.rippleContainer}
            >
              <View
                className={`w-52 h-52 bg-white shadow rounded-full flex items-center justify-center`}
                style={styles.shadow}
              >
                <Text className={`text-3xl font-pextrabold`}>HELP!</Text>
              </View>
            </Animatable.View>
          ) : (
            <View
              className={`w-52 h-52 bg-white shadow rounded-full flex items-center justify-center`}
              style={styles.shadow}
            >
              <Text className={`text-3xl font-pextrabold`}>HELP!</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;