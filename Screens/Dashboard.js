import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Dashboard Screen Component
const Dashboard = () => {
  const navigation = useNavigation();
  
  return (
    <ScrollView style={dashboardStyles.container}>
      {/* Header */}
      <View style={dashboardStyles.header}>
        <Text style={dashboardStyles.headerText}>Dashboard</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image source={require('../images/person.png')} style={dashboardStyles.profileImage} />
        </TouchableOpacity>
      </View>

      {/* Balance Section */}
      <View style={dashboardStyles.balanceSection}>
        <Text style={dashboardStyles.greetingText}>Hi, Praveer!</Text>
        <Text style={dashboardStyles.balanceText}>Total Balance</Text>
        <Text style={dashboardStyles.amountText}>₹16551</Text>
        <Image source={require('../images/noti.png')} style={dashboardStyles.notificationIcon} />
      </View>

      {/* Buttons */}
      <View style={dashboardStyles.buttonsContainer}>
        <TouchableOpacity
          style={dashboardStyles.sendButton}
          onPress={() => navigation.navigate('ContactsScreen')} // Navigate to ContactsScreen
        >
          <Text style={dashboardStyles.buttonText}>Send Money</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={dashboardStyles.requestButton}
          onPress={() => navigation.navigate('ContactsScreen')} // Navigate to RequestMoney screen
        >
          <Text style={dashboardStyles.buttonText}>Request Money</Text>
        </TouchableOpacity>
      </View>

      {/* Transaction List */}
      <View style={dashboardStyles.transactionHeader}>
        <Text style={dashboardStyles.transactionText}>Last Transactions</Text>
        <TouchableOpacity>
          <Text style={dashboardStyles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>

      {/* Transactions */}
      <View style={dashboardStyles.transactionList}>
        {[
          { name: 'Yara Khalil', date: 'Oct 14, 10:24 AM', amount: '₹451', image: require('../images/person send.png') },
          { name: 'Sara Ibrahim', date: 'Oct 12, 02:13 PM', amount: '₹368', image: require('../images/person receive.png') },
          { name: 'Ahmad Ibrahim', date: 'Oct 11, 01:19 AM', amount: '₹950', image: require('../images/person receive.png') },
          { name: 'Reem Khaled', date: 'Oct 07, 09:10 PM', amount: '₹110', image: require('../images/person send.png') },
          { name: 'Hiba Saleh', date: 'Oct 04, 05:45 AM', amount: '₹56', image: require('../images/person receive.png') }
        ].map((item, index) => (
          <View key={index} style={dashboardStyles.transactionItem}>
            <Image source={item.image} style={dashboardStyles.transactionImage} />
            <View style={dashboardStyles.transactionDetails}>
              <Text style={dashboardStyles.transactionName}>{item.name}</Text>
              <Text style={dashboardStyles.transactionDate}>{item.date}</Text>
            </View>
            <Text style={dashboardStyles.transactionAmount}>{item.amount}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const dashboardStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f0f0' },
  header: {
    backgroundColor: '#007AFF',
    paddingVertical: 30,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  headerText: { color: '#fff', fontSize: 28, fontWeight: 'bold' },
  balanceSection: {
    backgroundColor: '#007AFF',
    padding: 20,
    alignItems: 'flex-start',
    paddingBottom: 50,
  },
  greetingText: { color: '#fff', fontSize: 18 },
  balanceText: { color: '#fff', fontSize: 16, marginTop: 10 },
  amountText: { color: '#fff', fontSize: 30, fontWeight: 'bold' },
  notificationIcon: { position: 'absolute', right: 25, top: 100, height: 40, width: 40 },
  buttonsContainer: { flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 20 },
  sendButton: { backgroundColor: '#FFC107', paddingVertical: 15, paddingHorizontal: 30, borderRadius: 10 },
  requestButton: { backgroundColor: '#007AFF', paddingVertical: 15, paddingHorizontal: 30, borderRadius: 10 },
  buttonText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  transactionText: { fontSize: 18, fontWeight: 'bold' },
  viewAllText: { color: '#007AFF', fontSize: 16 },
  transactionList: {},
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  profileImage: { width: 40, height: 40, borderRadius: 25 },
  transactionImage: { width: 45, height: 45, borderRadius: 10 }, // Adjust this as needed for each image
  transactionDetails: { flex: 1, marginLeft: 10 },
  transactionName: { fontSize: 16, fontWeight: 'bold' },
  transactionDate: { fontSize: 14, color: '#777' },
  transactionAmount: { fontSize: 16, fontWeight: 'bold' },
});

export default Dashboard;