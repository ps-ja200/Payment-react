import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
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
              <Image source={require('../images/add_icon.png')} style={contactsStyles.addIcon}/>
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
                <Image source={require('../images/person.png')} style={contactsStyles.personimage}/>
                <View style={contactsStyles.contactDetails}>
                  <Text style={contactsStyles.contactName}>{contact.name}</Text>
                  <Text style={contactsStyles.contactEmail}>{contact.email}</Text>
                </View>
                <View style={contactsStyles.contactIcons}>
                  <TouchableOpacity style={contactsStyles.callIcon}>
                    <Image source={require("../images/send_icon.png")} style={contactsStyles.callIcon}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={contactsStyles.messageIcon}>
                  <Image source={require("../images/request_icon.png")} style={contactsStyles.messageIcon}/>
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
      marginTop:60,
      borderBottomWidth:1,
      borderBottomColor: '#dcdcdc',
      paddingBottom:15
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
      marginTop:30,
      marginHorizontal: 10,
      borderWidth: 0.5
    },
    contactItem: {
        flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 7,
    marginBottom: 10,
    justifyContent:'space-between', 
    },
    contactDetails: { flex: 1, marginLeft: 10 },
    contactName: { fontSize: 16, fontWeight: 'bold' },
    contactEmail: { fontSize: 14, color: '#777' },
    contactIcons: { flexDirection: 'row' },
    callIcon: { backgroundColor: '#ffd700', marginRight: 10 ,height:45,width:45,borderRadius:10},
    messageIcon: { backgroundColor: '#007AFF', height:45,width:45,borderRadius:10  },
    personimage:{
      width: 45,
      height: 45,
      borderRadius: 15
    },
    addIcon:{
      height:40,
      width: 40,
      marginRight:10
    }
  });
  
  export default ContactsScreen;