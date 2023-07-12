import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';

const SignupScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleForgotPassword = () => {
    // Navigate to the forgot password screen
    console.log('Forgot password clicked');
  };

  const handleSignin = () => {
    
    // Navigate to the sign-up screen
    navigation.push('AdminLogin');
    console.log('Sign in clicked');
  };

 

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Signup" onPress={handleLogin} />
       
        <TouchableOpacity onPress={handleSignin}>
          <Text style={styles.link}>Have an account? Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    padding: 30,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 20, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: 300,
  },
  link: {
    color: 'blue',
    marginTop: 10,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});

export default SignupScreen;
