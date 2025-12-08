import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function AppLayout() {
    return(
        <>
            <StatusBar hidden={false} barStyle={"dark-content"} />
            <Stack
                screenOptions={{
                    headerShown:false
                }}
            >
                <Stack.Screen name="user-account-screen" />
            </Stack>
        </>
    )
}