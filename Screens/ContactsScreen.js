import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const ContactsScreen = () => {
    const [searchText, setSearchText] = useState('');
    const contacts = [
      { name: 'Ahmad Ismail', email: 'ahmad.ismail@gmail.com' },
      { name: 'Yara Khalil', email: 'yara.khalil@gmail.com' },
      { name: 'Sara Ibrahim', email: 'sara.ibrahim@gmail.com' },
      { name: 'Sahar Fawzi', email: 'sahar.fawzi@gmail.com' },
      { name: 'Reem Khaled', email: 'reem.khaled@gmail.com' },
      { name: 'Hiba Saleh', email: 'hiba.saleh@gmail.com' },
    ];
  
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchText.toLowerCase())
    );
  
    return (
      <View style={contactsStyles.container}>
        <Text style={contactsStyles.headerText}>Contacts</Text>
        <TextInput
          placeholder="Enter a name"
          style={contactsStyles.searchInput}
          value={searchText}
          onChangeText={text => setSearchText(text)}
        />
        <ScrollView>
          {filteredContacts.map((contact, index) => (
            <View key={index} style={contactsStyles.contactItem}>
              <Ionicons name="person-circle-outline" size={40} color="#000" />
              <View style={contactsStyles.contactDetails}>
                <Text style={contactsStyles.contactName}>{contact.name}</Text>
                <Text style={contactsStyles.contactEmail}>{contact.email}</Text>
              </View>
              <View style={contactsStyles.contactIcons}>
                <TouchableOpacity style={contactsStyles.callIcon}>
                  <Ionicons name="call-outline" size={25} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={contactsStyles.messageIcon}>
                  <Ionicons name="mail-outline" size={25} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  };
  
  const contactsStyles = StyleSheet.create({
    container: { flex: 1,backgroundColor: '#f0f0f0',
     },
      headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000',
        marginLeft: 110,
        marginTop: 35,
      },
    searchInput: {
      backgroundColor: '#fff',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
      fontSize: 16,
      marginBottom: 20,
      marginTop:40
    },
    contactItem: {
        flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 5,
    marginLeft: 10,
    justifyContent:'space-between', 
    },
    contactDetails: { flex: 1, marginLeft: 10 },
    contactName: { fontSize: 16, fontWeight: 'bold' },
    contactEmail: { fontSize: 14, color: '#777' },
    contactIcons: { flexDirection: 'row' },
    callIcon: { backgroundColor: '#28A745', padding: 8, borderRadius: 10, marginRight: 10 },
    messageIcon: { backgroundColor: '#007AFF', padding: 8, borderRadius: 10 },
  });
  
  export default ContactsScreen;