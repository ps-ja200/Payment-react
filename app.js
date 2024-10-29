import React, { useState, useEffect } from 'react';
import { SafeAreaView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as SplashScreen from 'expo-splash-screen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import SignUpScreen from './Screens/SignUpScreen';
import Dashboard from './Screens/Dashboard';
import TransactionsScreen from './Screens/TransactionsScreen';
import ContactsScreen from './Screens/ContactsScreen';
import ProfileScreen from './Screens/ProfileScreen';
import SendMoney from './Screens/SendMoney';
import RequestMoney from './Screens/RequestMoney';

import homeIcon from './images/home_icon.png';
import transactionsIcon from './images/arrows_icon.png';
import contactsIcon from './images/contacts_icon.png';
import profileIcon from './images/user_icon.png';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const DashboardStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="ContactsScreen" component={ContactsScreen} />
      <Stack.Screen name="SendMoney" component={SendMoney} />
      <Stack.Screen name="RequestMoney" component={RequestMoney} />
    </Stack.Navigator>
  );
};


const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size, focused }) => {
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
              width: focused ? size * 1.2 : size,
              height: focused ? size * 1.2 : size,
              tintColor: focused ? '#000000' : color,
            }}
            resizeMode="contain"
          />
        );
      },
      tabBarActiveTintColor: '#000000',
      tabBarInactiveTintColor: 'gray',
      tabBarLabelStyle: {
        fontWeight: 'bold',
      },
      headerShown: false,
      tabBarStyle: {
        display:
          getFocusedRouteNameFromRoute(route) === 'SendMoney' ||
          getFocusedRouteNameFromRoute(route) === 'RequestMoney'
            ? 'none'
            : 'flex',
      },
    })}
  >
    <Tab.Screen name="Home" component={DashboardStack} />
    <Tab.Screen name="Transactions" component={TransactionsScreen} />
    <Tab.Screen name="Contacts" component={ContactsScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

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
    return null; 
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Dashboard" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
