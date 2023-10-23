import * as React from 'react';
import { View, Text, Button } from 'react-native';
import Modal from 'react-native-modal';

export function InvoiceModal(
    {
        isVisible,
        setModalVisible
    }: {
        isVisible: boolean
        setModalVisible: (isVisible: boolean) => void
    }
) {
    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={() => setModalVisible(false)}
            onSwipeComplete={() => setModalVisible(false)}
            swipeDirection="down"
            useNativeDriver={true}
            useNativeDriverForBackdrop={true}
            hasBackdrop={true}
            style={{ justifyContent: 'flex-end', margin: 0 }}
        >
            <View className="p-4 pb-16 h-64 bg-white rounded-t-2xl">
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>Modal Bottom Sheet</Text>
                <Text style={{ fontSize: 16, marginBottom: 8 }}>Swipe down to close</Text>
                <Button
                    title="Close"
                    onPress={() => setModalVisible(false)}
                />
            </View>
        </Modal>
    );
}