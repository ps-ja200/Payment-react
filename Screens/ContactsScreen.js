import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

const ContactsScreen = () => {
    const [searchText, setSearchText] = useState('');
    const contacts = [
      { name: 'Ahmad Ismail', email: 'ahmad.ismail@gmail.com' },
      { name: 'Sara Ibrahim', email: 'sara.ibrahim@gmail.com' },
      { name: 'Ahmad Ibrahim', email: 'ahmad.ibrahim@gmail.com' },
      { name: 'Reem Khaled', email: 'reem.khaled@gmail.com' },
      { name: 'Hiba Saleh', email: 'hiba.saleh@gmail.com' },
      { name: 'Sahar Fawzi', email: 'sahar.fawzi@gmail.com' },
      { name: 'Nisreen Ismail', email: 'nisreen_542@gmail.com' },
      { name: 'Yara Khalil', email: 'Yara_khalil@hotmail.com' }
    ];

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <View style={contactsStyles.container}>
          <View style={contactsStyles.header}>
            <Text style={contactsStyles.headerText}>Contacts</Text>
            <TouchableOpacity style={contactsStyles.addIcon}>
              <Ionicons name="add-circle-outline" size={24} color="#000" />
            </TouchableOpacity>
          </View>
          <TextInput
            placeholder="🔍 Enter a name"
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
                    <Ionicons name="caretup" size={25} color="#fff" />
                  </TouchableOpacity>
                  <TouchableOpacity style={contactsStyles.messageIcon}>
                    <AntDesign name="caretdown" size={25} color="#fff" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
    );
};

const contactsStyles = StyleSheet.create({
    container: { flex: 1,backgroundColor: '#fff',
    },
     headerText: {
       fontSize: 24,
       fontWeight: 'bold',
       color: '#000000',
       marginLeft:125
     },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between', // Aligns "Contacts" text to the left and "+" icon to the right
      marginTop:30
    },
    addIcon: {
      padding: 30,
    },
    searchInput: {
      backgroundColor: '#fff',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
      fontSize: 16,
      marginBottom: 20,
      marginTop:10,
      marginHorizontal: 10,
      borderWidth: 0.5
    },
    contactItem: {
        flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 5,
    justifyContent:'space-between', 
    },
    contactDetails: { flex: 1, marginLeft: 10 },
    contactName: { fontSize: 16, fontWeight: 'bold' },
    contactEmail: { fontSize: 14, color: '#777' },
    contactIcons: { flexDirection: 'row' },
    callIcon: { backgroundColor: '#ffd700', padding: 8, borderRadius: 10, marginRight: 10 },
    messageIcon: { backgroundColor: '#007AFF', padding: 8, borderRadius: 10 },
  });
  
  export default ContactsScreen;