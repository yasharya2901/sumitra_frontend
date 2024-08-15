import { Stack } from "expo-router";

const Layout = () => {
    return (
        <Stack>
            <Stack.Screen name="home" options={{title: "HomePage", headerShown: true, headerShadowVisible: false, headerTitleAlign: "center" ,headerTitleStyle: {fontWeight: "bold", fontFamily: "Poppins-Bold"}}} />
        </Stack>
    )
}

export default Layout;