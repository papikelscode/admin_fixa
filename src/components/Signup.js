import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function SignupScreen({ navigation }){
  const pressHandler = () => {
     navigation.push('Verification');
  }
  
  return (
    <ScrollView>
<View style={styles.container}>
      <ImageBackground
       
        style={styles.header}>
        <Text style={styles.heading}>DISPATCHER</Text>
      </ImageBackground>
      <View style={styles.card}>
      <TextInput style={styles.input} placeholder="First name" />
      <TextInput style={styles.input} placeholder="Last name" />
      <TextInput style={styles.input} placeholder="Phone Number" keyboardType={'phone-pad'}/>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />


        <TouchableOpacity style={styles.button}  onPress={pressHandler}>
          <Text style={styles.buttonText}>Signup</Text>
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
    marginBottom: 10,
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
    marginTop: 50,
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


