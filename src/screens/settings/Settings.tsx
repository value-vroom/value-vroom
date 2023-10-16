import React from "react";
import { View, Button, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export function SettingsScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    return (
        <View className="flex-1 items-center justify-center dark:bg-slate-700">
            <Text className="text-white">Settings</Text>
            <Button
                title="Go to Edit Profile"
                onPress={() => navigation.navigate('Edit Profile')}
            />
        </View>
    );
}