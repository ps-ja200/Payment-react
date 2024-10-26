import React from 'react';
import { SafeAreaView } from 'react-native';
import Dashboard from './Screens/Dashboard'; // Adjust path if necessary
import { Ionicons } from '@expo/vector-icons';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Dashboard />
    </SafeAreaView>
  );
};

export default App;