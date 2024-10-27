import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Profile</Text>
        <TouchableOpacity>
          <Ionicons name="pencil-outline" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.profileSection}>
        <View style={styles.profilePicture}>
          <Text style={styles.profileInitial}>D</Text>
        </View>
        <Text style={styles.profileName}>Danish Choudhary</Text>
      </View>

      <ScrollView contentContainerStyle={styles.optionsList}>
        <TouchableOpacity style={styles.option}>
          <Ionicons name="person-outline" size={20} color="#000" style={styles.optionIcon} />
          <Text style={styles.optionText}>My Info</Text>
          <Ionicons name="chevron-forward-outline" size={20} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Ionicons name="card-outline" size={20} color="#000" style={styles.optionIcon} />
          <Text style={styles.optionText}>My Cards</Text>
          <Ionicons name="chevron-forward-outline" size={20} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Ionicons name="settings-outline" size={20} color="#000" style={styles.optionIcon} />
          <Text style={styles.optionText}>Settings</Text>
          <Ionicons name="chevron-forward-outline" size={20} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Ionicons name="help-circle-outline" size={20} color="#000" style={styles.optionIcon} />
          <Text style={styles.optionText}>Help Center</Text>
          <Ionicons name="chevron-forward-outline" size={20} color="#000" />
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
    paddingVertical: 5,
    backgroundColor: '#f4f4f4',
    marginLeft: 115,
    marginTop: 40
  },
  title: {
    fontSize: 18,
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
    paddingVertical: 25,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
  },
  optionIcon: {
    marginRight: 15,
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold'
  },
});

export default ProfileScreen;
