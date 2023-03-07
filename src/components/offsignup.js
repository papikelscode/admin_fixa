import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";





export default function Signup({ navigation }){
   const pressHandler = () => {
      navigation.navigate('ClientLogin');
   }
   
   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View style={styles.container}>
       <View style = {styles.Header}>
           
           </View>
      <Image style={styles.image} source={require("../assets/images/images.png")} /> 
      <StatusBar style="auto" />
      
      <View style = {styles.card}>
      <View style={styles.inputView}>
        <TextInput style={styles.TextInput}
        
        placeholder="First name"
        placeholderTextColor="black"
        >

        </TextInput>
      </View>
      <View style={styles.inputView}>
        <TextInput style={styles.TextInput}
        
        placeholder="Last name"
        placeholderTextColor="black"
        >

        </TextInput>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="black"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
     
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="black"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      <View style = {styles.inputView}>
      <TextInput  style={styles.TextInput} keyboardType={'phone-pad'}
       
       placeholder="Phone Number"
       placeholderTextColor="black"
       />
      </View>
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>SIGN UP</Text> 
      </TouchableOpacity> 
      <View style = {styles.TextInput}>
        <Text style={{textAlign: "center",
        fontSize: 18,
      
    
    }}>
            OR
        </Text>
        <Text style={{textAlign: "center",
         fontSize: 22,
      
    
    }}>
            CONNECT WITH
        </Text>
      </View>
      
      <View style = {styles.socials}>
     
      <Image style={styles.img} source = {require('../assets/images/facebook-new.png')}
         
           />
             <Image style={styles.img} source = {require('../assets/images/google-logo.png')}
         
         />
           <Image style={styles.img} source = {require('../assets/images/twitter.png')}
         
         />
    
      </View>
      
      
    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    
  },
  card: {
    alignContent:"center",
    width:400,
    height: 400,
    padding: 10,
    border: 2,
    borderWidth:2,
    borderColor: "whitesmoke",
    zIndex: 0,
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    borderRadius: 30,
    backgroundColor: "white",
    marginTop: -65,
    
    


},
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "white",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    border: 2,
    borderColor: "black",
    borderWidth: 2,
  },
  Header: {
    backgroundColor: "#58489E",
    height: 250,
    width: "100%",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    placeholderTextColor:"black"
    
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#58489E",
  },
  loginText: {
    color: "white",
  },
  socials: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
   marginLeft: 20,
    alignItems: 'center',
    marginBottom: 120
  
},
box: {
    width: 70,
    height: 70,
    border: 2,
    borderColor: "black",
    borderWidth:2,
    padding: 25,
    margin: 10
},
img: {
    alignItems: "center",

    height: 45,
    width: 50,
    padding: 10,
    gap: 10,
  
}
 
});
    
      
         
      
    
      
  



