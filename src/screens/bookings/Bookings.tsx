import React from "react";
import { View, Button, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export function BookingsScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Bookings</Text>
            <Button
                title="Go to Manage Car Booking"
                onPress={() => navigation.navigate('Manage Car Booking')}
            />
        </View>
    );
}