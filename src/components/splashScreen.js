import React, { Component } from 'react'

import { StyleSheet, Text, View, Image,  Button,
    TouchableOpacity, } from 'react-native';




export default function Splash({ navigation }){
   const pressHandler = () => {
      navigation.navigate('ClientLogin');
   }
   
   
      return(
         <View style={style.container}>
         <Image style={style.img} source = {require('../assets/images/splashscreen.jpg')}
         
           />
             
             <Text style={style.text}>
                        Courier and parcel
                    </Text>
                    <Text style={style.text}>
                        delivery at its finest
                    </Text>
                    <Text style={style.smallletter}>
                        Door-to-door integrated logistics service
                        solutions for all kinds of parcels
                    </Text>
                    {/* <View style={style.loginBtn}>
                    <Button style={style.loginBtn} 
        onPress={() => navigation.navigate('ClientLogin')
      }
        title="Get Started"
        color="green"
        
       
      />
                    </View> */}
                     <TouchableOpacity style={style.loginBtn}>
        <Text style={style.loginText}>GET STARTED</Text> 
      </TouchableOpacity>
                   
            </View>
      )
      }
         
      const style = StyleSheet.create({
         container: {
            alignItems: 'center',
            marginTop: 100,
            padding: 20,
            maxHeight: 500
         
           
         
            
         },
         text:{
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            fontSize: 30,
      
         },
         img:{
            width:400,
            height:500,
            padding:50
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
            backgroundColor: "green",
          },
          loginText: {
            color: "white",
            fontSize: 17,
          },
      })  
      
  



