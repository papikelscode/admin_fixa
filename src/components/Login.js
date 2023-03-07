import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function LoginScreen({ navigation }){
  const pressHandlers = () => {
     navigation.push('UserSignup');
  }
  return (
    <View style={styles.container}>
      <ImageBackground
       
        style={styles.header}>
        <Text style={styles.heading}>DISPATCHER</Text>
      </ImageBackground>
      <View style={styles.card}>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />

        <TouchableOpacity style={styles.forgotPasswordButton}>
          <Text style={styles.forgotPasswordButtonText}>Forgot?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onpress={pressHandlers}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

<TouchableOpacity style={styles.createAccountButton} onpress={pressHandler} >
          <Text style={styles.createAccountButtonText}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.createAccountButton} >
          <Text style={styles.createAccountButtonText}>Dispatcher create account</Text>
        </TouchableOpacity>

        
      </View>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    width: '100%',
    height: 100,
    backgroundColor: "#58489E"
  },

  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 0,
    paddingBottom: -50
  },
  forgotPasswordButton: {
    width:'100%',
    textAlign:'flex-end',
  },
  forgotPasswordButtonText: {
    color: '#58489E',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign:'right'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    padding: 20,
    marginTop: 100,
    width: '90%',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '100%',
  },
  button: {
    backgroundColor: '#58489E',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  createAccountButton: {
    marginTop: 20,
  },
  createAccountButtonText: {
    color: '#58489E',
    fontSize: 12,
    fontWeight: 'bold',
  },
});





