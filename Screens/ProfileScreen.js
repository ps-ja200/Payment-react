import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView,Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Profile</Text>
        <TouchableOpacity>
          <Image source={require("../images/edit_icon.png")} style={styles.editicon}/>
        </TouchableOpacity>
      </View>

      <View style={styles.profileSection}>
        <View style={styles.profilePicture}>
          <Text style={styles.profileInitial}>P</Text>
        </View>
        <Text style={styles.profileName}>Praveer Jaggi</Text>
      </View>

      <ScrollView contentContainerStyle={styles.optionsList}>
        <TouchableOpacity style={styles.option}>
        <Image source={require("../images/profile_icon.png")} style={styles.optionIcon} />
          <Text style={styles.optionText}>My Info</Text>
          <Image source={require("../images/arrow_icon.png")}style={styles.arrowicon}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
        <Image source={require("../images/card_icon.png")} style={styles.optionIcon} />
          <Text style={styles.optionText}>My Cards</Text>
          <Image source={require("../images/arrow_icon.png")}style={styles.arrowicon}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
        <Image source={require("../images/settings_icon.png")} style={styles.optionIcon} />
          <Text style={styles.optionText}>Settings</Text>
          <Image source={require("../images/arrow_icon.png")}style={styles.arrowicon}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
        <Image source={require("../images/help_icon.png")} style={styles.optionIcon} />
          <Text style={styles.optionText}>Help Center</Text>
          <Image source={require("../images/arrow_icon.png")} style={styles.arrowicon}/>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#f4f4f4',
    marginLeft: 105,
    marginTop: 40
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInitial: {
    fontSize: 40,
    color: '#333',
  },
  profileName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
    marginTop: 10,
  },
  optionsList: {
    paddingHorizontal: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
  },
  optionIcon: {
    marginRight: 15,
    height:30,
    width:30
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold'
  },
  editicon: {
    width:30,
    height:30,
  },
  arrowicon:{
    width:30,
    height:30,
    marginLeft:10,
  }
});

export default ProfileScreen;
