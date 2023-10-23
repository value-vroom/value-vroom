import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';

export function CheckoutDrawer(
    {
        onPurchase,
        onCancel,
        children,
        readyToPurchase
    }:
        {
            onPurchase: () => void,
            onCancel: () => void,
            children?: React.ReactNode
            readyToPurchase: boolean
        }
) {
    return (
        <>
        <View className="flex-col py-4 bg-slate-300 rounded-t-2xl space-y-4">
            <View className="flex-row justify-between px-8">
                {readyToPurchase ? children : <Text className="text-white font-bold text-lg">Please specify booking time for the car.</Text>}
            </View>
            <View className="w-full h-px  bg-slate-400"></View>
            <View className='flex-row justify-evenly'>
                <TouchableOpacity className="bg-white border-2 border-primary py-4 px-12 rounded-xl" onPress={onCancel}>
                    <Text className='text-primary font-bold text-lg'>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity className={` py-4 px-12 rounded-xl ${readyToPurchase ? "bg-primary" : "bg-gray-400"}`} onPress={onPurchase} disabled={!readyToPurchase}>
                    <Text className={`font-bold text-lg ${readyToPurchase ? "text-white" : "text-gray-300"}`}>Purchase</Text>
                </TouchableOpacity>
            </View>
        </View>
        <SafeAreaView className="bg-slate-300 rounded-b-2xl"/>
        </>
    );
}