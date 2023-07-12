import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './src/components/splashScreen';
import LoginScreen from './src/components/Login';
import Verification from './src/components/Verify';
import CustomerPayment from './src/components/CustomerPayment';
import Profile from './src/components/Profile';
import Booking from './src/components/Book';
import Signup from './src/components/Signup';
import Dispatchersignup from './src/components/Dispatchersignup';
import Dispatcherdash from './src/components/Dispatcherdash';
import Receiver from './src/components/Recieveitem';
import Orderitem from './src/components/Orderitem';
import Dispatchmodal from './src/components/Dispatchmodal';
import Userdash from './src/components/Userdash';
import Tracker from './src/components/Track';
import Dispatchmessage from './src/components/Dispatchermessage';
import Dispatchprofile from './src/components/Dispatchprofile';
import Dispatchaccount from './src/components/Dispatchwork';
import Dispatchhistory from './src/components/History';
import Userhistory from './src/components/Userhistory';
import Navigator from './src/navigation/mainStack'
export default function App() {
  return (
    

<Navigator />
  );
}


