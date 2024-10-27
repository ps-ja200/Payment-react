import React, { useState, useEffect } from 'react';
import { SafeAreaView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import Dashboard from './Screens/Dashboard';
import TransactionsScreen from './Screens/TransactionsScreen';
import ContactsScreen from './Screens/ContactsScreen';
import ProfileScreen from './Screens/ProfileScreen';

// Import images
import homeIcon from './images/home_icon.png';
import transactionsIcon from './images/arrows_icon.png';
import contactsIcon from './images/contacts_icon.png';
import profileIcon from './images/user_icon.png';

const Tab = createBottomTabNavigator();

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        setFontsLoaded(true);
      } catch (error) {
        console.warn(error);
      } finally {
        SplashScreen.hideAsync();
      }
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // Don't render anything until fonts are loaded
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size,focused }) => {
              let iconSource;

              if (route.name === 'Home') {
                iconSource = homeIcon;
              } else if (route.name === 'Transactions') {
                iconSource = transactionsIcon;
              } else if (route.name === 'Contacts') {
                iconSource = contactsIcon;
              } else if (route.name === 'Profile') {
                iconSource = profileIcon;
              }

              return (
                <Image
          source={iconSource}
          style={{
            width: focused ? size * 1.2 : size, // Increase size when active
            height: focused ? size * 1.2 : size,
            tintColor: color,
          }}
          resizeMode="contain"
        />
              );
            },
            tabBarActiveTintColor: '#000000',
            tabBarInactiveTintColor: 'gray',
            tabBarLabelStyle:{
              fontWeight: 'bold'
            },
            headerShown: false,
          })}
        >
          <Tab.Screen name="Home" component={Dashboard} />
          <Tab.Screen name="Transactions" component={TransactionsScreen} />
          <Tab.Screen name="Contacts" component={ContactsScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
