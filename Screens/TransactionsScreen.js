import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const TransactionsScreen = () => {
  const transactions = [
    // October 2020 Transactions
    { name: 'Ahmad Ibrahim', date: 'Oct 02, 01:19 AM', amount: '₹800', month: 'October 2020' },
    { name: 'Sahar Fawzi', date: 'Oct 10, 04:35 PM', amount: '₹920', month: 'October 2020' },
    { name: 'Hiba Saleh', date: 'Oct 15, 05:45 AM', amount: '₹1667', month: 'October 2020' },
    { name: 'Sara Ibrahim', date: 'Oct 18, 02:13 PM', amount: '₹5000', month: 'October 2020' },
    { name: 'Reem Khaled', date: 'Oct 22, 08:40 PM', amount: '₹1340', month: 'October 2020' },
    { name: 'Yara Khalil', date: 'Oct 28, 11:20 AM', amount: '₹2450', month: 'October 2020' },

    // September 2020 Transactions
    { name: 'Sara Ibrahim', date: 'Sep 02, 03:15 PM', amount: '₹2670', month: 'September 2020' },
    { name: 'Ahmad Ismail', date: 'Sep 07, 09:45 AM', amount: '₹1100', month: 'September 2020' },
    { name: 'Reem Khaled', date: 'Sep 12, 01:50 PM', amount: '₹3200', month: 'September 2020' },
    { name: 'Yara Khalil', date: 'Sep 18, 07:30 PM', amount: '₹1467', month: 'September 2020' },
    { name: 'Sahar Fawzi', date: 'Sep 22, 11:15 AM', amount: '₹875', month: 'September 2020' },
    { name: 'Hiba Saleh', date: 'Sep 26, 05:20 AM', amount: '₹4532', month: 'September 2020' },
    { name: 'Reem Khaled', date: 'Sep 29, 10:50 PM', amount: '₹1295', month: 'September 2020' },
  ];

  const [searchText, setSearchText] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false); // New state for search visibility

  const filteredTransactions = transactions.filter(transaction =>
    transaction.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const groupedTransactions = filteredTransactions.reduce((acc, transaction) => {
    const { month } = transaction;
    if (!acc[month]) acc[month] = [];
    acc[month].push(transaction);
    return acc;
  }, {});

  return (
    <ScrollView style={transactionsStyles.container}>
      <View style={transactionsStyles.headerContainer}>
        <Text style={transactionsStyles.headerText}>Transactions</Text>
        {/* Search Icon */}
        <TouchableOpacity onPress={() => setIsSearchVisible(!isSearchVisible)}>
          <Ionicons name="search" size={24} color="#000000" style={transactionsStyles.searchIcon} />
        </TouchableOpacity>
      </View>

      {/* Search Input (visible only when isSearchVisible is true) */}
      {isSearchVisible && (
        <View style={transactionsStyles.searchContainer}>
          <TextInput
            style={transactionsStyles.searchInput}
            placeholder="Search transactions"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
      )}

      {Object.keys(groupedTransactions).map((month, index) => (
        <View key={index}>
          <Text style={transactionsStyles.transactionHeader}>{month}</Text>
          {groupedTransactions[month].map((item, idx) => (
            <View key={idx} style={transactionsStyles.transactionItem}>
              <Ionicons name="person-circle-outline" size={40} color="#000000" style={transactionsStyles.icon} />
              <View style={transactionsStyles.transactionDetails}>
                <Text style={transactionsStyles.transactionName}>{item.name}</Text>
                <Text style={transactionsStyles.transactionDate}>{item.date}</Text>
              </View>
              <Text style={transactionsStyles.transactionAmount}>{item.amount}</Text>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const transactionsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Ensures space between header text and search icon
    padding: 10,
    marginTop: 60,
    marginBottom: 5,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: 90
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  monthHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: '#777',
    marginLeft: 10,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 5,
    marginLeft: 10,
    justifyContent:'space-between', // Ensures space between icon, transaction details, and amount
  },
  icon: {
    marginRight: 10,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionDate: {
    fontSize: 14,
    color: '#777',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionHeader: {
    marginLeft: 15,
  },
  searchIcon: {
    marginLeft: 10, // Adds some spacing between the text and icon
  },
});

export default TransactionsScreen;
