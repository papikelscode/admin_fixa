import React, { Component } from 'react'

import { StyleSheet, Text, View, Image,  Button,
    TouchableOpacity, } from 'react-native';




export default function Splash({ navigation }){
   const pressHandler = () => {
      navigation.push('AdminLogin');
   }
   const handleSignUp = () =>{
      navigation.push('AdminSignup')
   }
   
      return(
         <View style={style.container}>
          <Image style={style.img} source = {require('../assets/images/homescreen.jpg')}
         
           /> 
           
             
                     <TouchableOpacity style={style.loginBtn} onPress={pressHandler} >
         <Text style={style.loginText}>Login</Text>  
         </TouchableOpacity>
         
                     <TouchableOpacity style={style.loginBtn} onPress={handleSignUp} >
         <Text style={style.loginText}>Sign up</Text>  
         </TouchableOpacity>
      
                   
            </View>
      )
      }
         
      const style = StyleSheet.create({
         container: {
            alignItems: 'center',
            marginTop: 5,
            padding: 0,
            maxHeight: 500,
            backgroundColor: "white"
         
           
         
            
         },
         text:{
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            fontSize: 30,
           
      
         },
         img:{
            width:400,
            height:500,
            padding:50,
            
         },
         smallletter:{
            width: 300,
            textAlign:'center',
            padding: 10
         },
        //  btn:{
        //     width: 300,
        //     height: 700,
        //   borderRadius: 20,
        //   textAlign: "center",
        //   borderRadius: 25
          
        //  },
         loginBtn: {
            width: "80%",
            borderRadius: 25,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 3,
            backgroundColor: "#58489E",
          },
          loginText: {
            color: "white",
            fontSize: 17,
          },
      })  
      
  



