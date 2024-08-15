import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import InfoField from '../../components/InfoField'
import CustomButton from '../../components/CustomButton'

const Profile = () => {
    const [name, setName] = React.useState("");
    const phone_number = "1234567890";
    const emergency_contacts = [{name: "Bob", phone_number: "0987654321"}, {name: "Charlie", phone_number: "6789012345"}];
    const [emergencyContacts, setEmergencyContacts] = React.useState(emergency_contacts);

    const data = [
        {id: 1, fieldName: "Name", fieldValue: name, isEditable: true},
        {id: 2, fieldName: "Phone Number", fieldValue: phone_number, isEditable: false},
    ]

    // const emergency_contacts_data = emergency_contacts.map((contact, index) => {
    //     return {id: index + 3, fieldName1: `Emergency Contact ${index + 1}`, fieldValue: contact.name, isEditable: false}
    // })
  return (
    <SafeAreaView className={`p-4 flex`}>
        <FlatList 
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <InfoField fieldName={item.fieldName} fieldValue={item.fieldValue} isEditable={item.isEditable} />
            )}
        />
        <View className={`flex flex-row`}>
            <CustomButton 
                text={`Log Out`}
                textStyle={`font-pregular`}
                buttonStyle={`flex-1 bg-red-400 rounded-md w-1/2 self-center mr-2`}
                handlePress={() => console.log('Log Out')}
            />
            <CustomButton 
                text={`Save`}
                textStyle={`font-pregular`}
                buttonStyle={`flex-1 bg-red-400 rounded-md w-1/2 self-center ml-2`}
                handlePress={() => console.log('Save')}
            />

        </View>
        
    </SafeAreaView>
  )
}

export default Profile