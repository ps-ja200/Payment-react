import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'; // Correct icon import

const Dashboard = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Dashboard</Text>
        <Ionicons name="person-circle-outline" size={40} color="#fff" />
      </View>

      {/* Balance Section */}
      <View style={styles.balanceSection}>
        <Text style={styles.greetingText}>Hi, Danish!</Text>
        <Text style={styles.balanceText}>Total Balance</Text>
        <Text style={styles.amountText}>₹16551</Text>
        <Ionicons name="notifications-outline" size={25} color="#fff" style={styles.notificationIcon} />
      </View>

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.buttonText}>Send Money</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.requestButton}>
          <Text style={styles.buttonText}>Request Money</Text>
        </TouchableOpacity>
      </View>

      {/* Transaction List */}
      <View style={styles.transactionHeader}>
        <Text style={styles.transactionText}>Last Transactions</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>

      {/* Transactions */}
      <View style={styles.transactionList}>
        {[
          { name: 'Yara Khalil', date: 'Oct 14, 10:24 AM', amount: '₹451' },
          { name: 'Sara Ibrahim', date: 'Oct 12, 02:13 PM', amount: '₹368' },
          { name: 'Ahmad Ibrahim', date: 'Oct 11, 01:19 AM', amount: '₹950' },
          { name: 'Reem Khaled', date: 'Oct 07, 09:10 PM', amount: '₹110' },
          { name: 'Hiba Saleh', date: 'Oct 04, 05:45 AM', amount: '₹56' }
        ].map((item, index) => (
          <View key={index} style={styles.transactionItem}>
            <Ionicons name="person-circle-outline" size={40} color="#000" />
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionName}>{item.name}</Text>
              <Text style={styles.transactionDate}>{item.date}</Text>
            </View>
            <Text style={styles.transactionAmount}>{item.amount}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0'
  },
  header: {
    backgroundColor: '#007AFF',
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  balanceSection: {
    backgroundColor: '#007AFF',
    padding: 20,
    alignItems: 'flex-start',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  greetingText: {
    color: '#fff',
    fontSize: 18
  },
  balanceText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 10
  },
  amountText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  notificationIcon: {
    position: 'absolute',
    right: 20,
    top: 10
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 20
  },
  sendButton: {
    backgroundColor: '#FFC107',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10
  },
  requestButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  transactionText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  viewAllText: {
    color: '#007AFF',
    fontSize: 16
  },
  transactionList: {
    paddingHorizontal: 20
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10
  },
  transactionDetails: {
    flex: 1,
    marginLeft: 10
  },
  transactionName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  transactionDate: {
    fontSize: 14,
    color: '#777'
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default Dashboard;
