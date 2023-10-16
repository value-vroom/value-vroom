import React from "react";
import { View, SafeAreaView } from "react-native";
import { CarList } from "../components/CarList";
import { SearchHeader } from "../components/SearchHeader";



export function HomeScreen() {
    return (
        <>
            <SafeAreaView className="bg-gray-200 dark:bg-gray-700"/>
            <View className="flex-1 flex-col pt-1">
                <SearchHeader />
                <CarList />
            </View>
        </>
    )
}