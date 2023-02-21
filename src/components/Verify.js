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

export default function Verification(){
 return(
    <View style = {styles.container}>
        <View style = {styles.Header}>
           
        </View>
          <Image style={styles.image} source={require("../assets/images/images.png")} /> 
    <View style={styles.cover}>
    <Text style = {styles.veritext}>
        VERIFICATION CODE
    </Text>
    <Text style = {styles.conftext}>
        CONFIRMATION
    </Text>
    </View>
   
    

    <Text style = {styles.partext}>
      Please type the Verification code below
    </Text>
    
    
    
    <View style = {styles.boxContainer}>
        <TextInput style = {styles.box}  keyboardType={'phone-pad'}></TextInput>
        <TextInput style = {styles.box}  keyboardType={'phone-pad'}></TextInput>
        <TextInput style = {styles.box}  keyboardType={'phone-pad'}></TextInput>
        <TextInput style = {styles.box}  keyboardType={'phone-pad'}></TextInput>
    </View>

    <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>CONFIRM</Text> 
      </TouchableOpacity> 
      <Text style = {styles.partext}>
    Didn't get the code Resend
    </Text>





    </View>
 )











}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    Header: {
        backgroundColor: "#58489E",
        height: 250,
        width: "100%",
      },
    image: {
      marginBottom: 30,
    },
    boxContainer: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
       
        alignItems: 'center',
        marginBottom: 30
      
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
    veritext:{
      
        padding: 10,
        fontSize: 13,
        fontWeight: "bold",
        textAlign: "center"

    },
    conftext: {
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold",
    
      
    },
    cover: {
        marginBottom: 50,
    },
    partext: {
        fontSize: 15,
        marginBottom:90
    },
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "black",
      },
      loginText: {
        color: "white",
      }
});
