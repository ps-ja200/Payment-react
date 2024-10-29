import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Blue section */}
      <View style={styles.blueBackground}>
        <View style={styles.logoContainer}>
          {/* Main logo */}
          <Image source={require('../images/Vector.png')} style={styles.logo} />
          {/* Nested logo (logo1) */}
          <Image source={require('../images/Vector1.png')} style={styles.logo1} />
        </View>
        <Text style={styles.headerText}>PaySafe</Text>
        <Text style={styles.subHeaderText}>
          The Best Way to <Text style={styles.boldText}>Transfer Money</Text> Safely
        </Text>
      </View>

      {/* Divider line */}
      <View style={styles.divider} />

      {/* White section */}
      <View style={styles.whiteBackground}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dashboard')}>
          <Text style={styles.buttonText}>Get started</Text>
        </TouchableOpacity>
      </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  blueBackground: {
    backgroundColor: '#007bff',
    height: '65%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:25
  },
  logoContainer: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    position: 'relative', // Enable positioning for nested logo
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  logo1: {
    width: 40, 
    height: 40, // Adjust to be smaller than the main logo
    position: 'absolute', // Position this logo on top of the main logo
  },
  headerText: {
    fontSize: 45,
    color: 'white',
    textAlign: 'center',
    bottom:10,
  },
  subHeaderText: {
    fontSize: 16,
    color: 'white',
    position: 'absolute',
    bottom: 40,
    textAlign: 'center',
    width: '100%',
  },
  boldText: {
    fontWeight: 'bold',
  },
  divider: {
    height: 2,
    width: '100%',
  },
  whiteBackground: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 30, // Adjust padding as needed
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 13, 
    paddingHorizontal: 10,
    borderRadius: 13,
    width: '97%', // Set button width to 80% of the screen width
    alignItems: 'center', // Center text within the button
    top:30
    
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#007bff',
    marginTop: 20,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default SignupScreen;