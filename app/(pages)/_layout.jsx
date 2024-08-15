import { Stack } from "expo-router";

const Layout = () => {
    return (
        <Stack>
            <Stack.Screen name="home" options={{headerShown: false, headerShadowVisible: false}} />
            <Stack.Screen name="profile" options={{headerShown: true, headerTitle: "My Profile" ,headerShadowVisible: false, headerTitleStyle: {fontWeight: "bold", fontFamily: "Poppins-Bold"}}} />
        </Stack>
    )
}

export default Layout;