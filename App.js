import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './src/components/splashScreen';
import Signup  from './src/components/Signup';
import Verification from './src/components/Verify';
import CustomerPayment from './src/components/CustomerPayment';
import Profile from './src/components/Profile';
import Booking from './src/components/Book';

export default function App() {
  return (
  <Splash />,
<Signup />,
<Verification />,
<CustomerPayment />,
<Profile />,
<Booking /> 
  );
}


