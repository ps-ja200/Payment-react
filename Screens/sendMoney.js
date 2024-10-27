import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SendMoney = () => {
  const [amount, setAmount] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Send Money</Text>
      <TextInput
        style={styles.input}
        placeholder="Payment Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <TextInput
        style={styles.input}
        placeholder="Add payment note"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Send Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 20, borderRadius: 5 },
  button: { backgroundColor: '#FFC107', padding: 15, borderRadius: 10 },
  buttonText: { textAlign: 'center', color: '#fff', fontWeight: 'bold' }
});

export default SendMoney;
