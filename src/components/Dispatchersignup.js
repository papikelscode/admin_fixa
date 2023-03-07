import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';

const Dispatchersignup = () => {
  return (
    <ScrollView>
  <View style={styles.container}>
      <ImageBackground
       
        style={styles.header}>
        <Text style={styles.heading}>DISPATCHER SIGNUP</Text>
      </ImageBackground>
      <View style={styles.card}>
        <TextInput style={styles.input} placeholder="Name" />
        <TextInput style={styles.input} placeholder="Email Address" />
        <TextInput style= {styles.input} keyboardType={'phone-pad'} placeholder = "Phone number " />
       


       

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>

       
      </View>
    </View>

    </ScrollView>
  
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
    paddingTop: 50,
    paddingBottom: 20,
    width: '100%',
    height: 200,
    backgroundColor: "#58489E"
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
    fontSize: 30,
    
    color: "white",
    fontWeight: "900",
    paddingRight: 150,
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
    padding: 40,
    marginTop: 90,
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

export default Dispatchersignup;
