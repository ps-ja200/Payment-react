import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, Modal } from 'react-native';

const RequestMoney = ({ route, navigation }) => {
    const { name } = route.params;

    // State for payment amount, note, and success message
    const [amount, setAmount] = useState('');
    const [note, setNote] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    const handleRequestPayment = () => {
        // Validate input
        if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
            Alert.alert('Invalid Amount', 'Please enter a valid payment amount.');
            return;
        }

        // Show success modal and reset input fields
        setShowSuccess(true);
        setAmount('');
        setNote('');
    };

    return (
        <View style={styles.container}>
            {/* Header with Back Button */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image 
                        source={require('../images/back_icon.png')} 
                        style={styles.backButton}
                    />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Request Money</Text>
            </View>

            {/* Profile Section */}
            <View style={styles.profileSection}>
                <View style={styles.profileImage}>
                    <Text style={styles.profileInitial}>{name.charAt(0)}</Text>
                </View>
                <View>
                    <Text style={styles.profileName}>{name}</Text>
                </View>
            </View>

            {/* Payment Amount Input */}
            <Text style={styles.label}>Payment Amount</Text>
            <TextInput
                style={[styles.input, styles.amountInput]}
                placeholder="0.00"
                keyboardType="numeric"
                value={amount}
                onChangeText={setAmount}
            />

            {/* Payment Note Input */}
            <Text style={styles.label}>Payment Note</Text>
            <TextInput
                style={[styles.input, styles.noteInput]}
                placeholder="Add payment note"
                multiline
                value={note}
                onChangeText={setNote}
            />

            {/* Request Payment Button */}
            <TouchableOpacity style={styles.sendButton} onPress={handleRequestPayment}>
                <Image 
                    source={require('../images/request_icon.png')} 
                    style={{ width: 18, height: 18 }}
                />
                <Text style={styles.sendButtonText}>Request Payment</Text>
            </TouchableOpacity>

            {/* Success Message Modal */}
            {showSuccess && (
                <Modal
                    transparent={true}
                    animationType="slide"
                    visible={showSuccess}
                    onRequestClose={() => setShowSuccess(false)}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.successBox}>
                            <Image source={require('../images/sent_illustration.png')} style={styles.successIcon} />
                            <Text style={styles.successMessage}>The amount has been requested successfully!.</Text>
                            <TouchableOpacity
                                style={styles.closeButton}
                                onPress={() => {
                                    setShowSuccess(false);
                                    navigation.goBack();
                                }}
                            >
                                <Text style={styles.closeButtonText}>Ok, Thanks!</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 40,
        borderBottomWidth: 0.5,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 60,
        padding: 20,
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
        padding: 10,
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    profileInitial: {
        fontSize: 24,
        color: '#999',
        fontWeight: 'bold',
    },
    profileName: {
        fontSize: 18,
        fontWeight: '600',
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 10,
        color: '#333',
        marginLeft: 10,
    },
    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#007AFF',
        borderRadius: 10,
        padding: 10,
        fontSize: 16,
        marginBottom: 20,
        marginHorizontal: 10,
    },
    amountInput: {
        height: 50,
        textAlign: 'left',
        color: '#007AFF',
    },
    noteInput: {
        height: 80,
        textAlignVertical: 'top',
    },
    sendButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#007AFF',
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 250,
        marginHorizontal: 10,
    },
    sendButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    backButton:{
        width: 24,
        height: 24,
        resizeMode: 'contain',
        tintColor: '#000000',
        marginLeft: 10,
    },
    // Success Message Modal Styles
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    successBox: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        height: '50%'
    },
    successIcon: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    successTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4BB543', 
        marginBottom: 10,
    },
    successMessage: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
        marginBottom: 30,
    },
    closeButton: {
        backgroundColor: '#007AFF',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 80,
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default RequestMoney;
