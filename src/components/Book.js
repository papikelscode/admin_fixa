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
  Card,
 
  ScrollView,
} from "react-native";
// import ImagePicker from 'react-native-image-crop-picker';


// export default funtion Booking({ navigation }){
//     return(
// <View style = {style.Container}>

// </View>
//     )
// }
export default function Booking({ navigation }){
    // const myComponent = {
    //     width: 420,
    //     height: 350,
    //     overflowX: 'hidden',
    //     overflowY: 'scroll'
    // };
  
    return(
      <View >
<View style = {style.Container}>
         <View style = {style.Header}>
         <Text style = {style.HeadText}>
                DISPATCH AN ITEM 
            </Text>
            <Text style = {style.smallText}>
                AND HAVE IT DELIVERED WITH OUT DELAY
            </Text>
            
         </View>
         <View style = {style.Card}>
            <TextInput style = {style.TextInput}
            placeholder="Pick up from"
            placeholderTextColor="black"
            
            ></TextInput>
            <TextInput style = {style.TextInput}  placeholder="Drop at "
            placeholderTextColor="black"></TextInput>
            <TextInput style = {style.TextInput}  placeholder="Name of item"
            placeholderTextColor="black"></TextInput>
            <TextInput style = {style.TextInput}  placeholder="Name of receiver"
            placeholderTextColor="black"></TextInput>
            <TextInput style = {style.TextInput}  placeholder="Phone number"
            placeholderTextColor="black"></TextInput>
             <TextInput style = {style.TextInput}  placeholder="Receiver Address"
            placeholderTextColor="black"></TextInput>
             <TextInput style = {style.TextInput}  placeholder="Description of item"
            placeholderTextColor="black"></TextInput>
        
         </View>
         <TouchableOpacity style={style.loginBtn}>
        <Text style={style.loginText}>SEND DISPATCH</Text> 
      </TouchableOpacity> 
     

         
         
 
     </View>
     </View>
        
     
    )
 }
const style = StyleSheet.create({
    Container: {
      
       marginTop: 0,
      
       maxHeight: 500,
       
 
    
      },
      Header: {
        backgroundColor: "#58489E",
        height: 250,
        width: "100%",
      },
   
    Card: {
        marginLeft: 5,
        width:400,
        height:500,
        padding: 10,
      border: 2,
      borderWidth:2,
      borderColor: "whitesmoke",
      marginTop: 10,
    
        zIndex: 0,
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        borderRadius: 30,
        backgroundColor: "white",
        
        


    },
    TextInput: {
        width: 350,
        height: 45,
        justifyContent: "center",
        alignItems: 'center',
        border: 2,
        borderColor: "whitesmoke",
        borderWidth: 2,
        marginBottom: 2,
        marginLeft: 10,
        fontSize: 15,
        padding: 15,
        fontFamily: "Roboto"
    


       
       
      }, 
      HeadText: {
        fontSize: 30,
        paddingTop: 110,
        color: "white",
        fontWeight: "900",
        paddingLeft: 10,
        
        
      },
      loginBtn: {
        width: "60%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 2,
        backgroundColor: "#58489E",
        marginLeft: 80
      },
      loginText: {
        color: "white",
      },
     
      smallText: {
        fontSize: 13,
        fontWeight: "900",
        color: "white",
        paddingLeft: 10, 

      },
      
    })