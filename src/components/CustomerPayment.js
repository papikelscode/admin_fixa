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
} from "react-native";







export default function CustomerPayment({ navigation }){
   
   return(
    <View style = {style.Container}>
        <View style = {style.Header}>
            <Text style = {style.HeadText}>
                PAYMENT
            </Text>
            <Text style = {style.smallText}>
                CHOOSE YOUR PAYMENT
            </Text>
        </View>
        
        <View style = {style.payType}>
        <Image style={style.img} source = {require('../assets/images/icons8-magnetic-card-96.png')}
         
         />
           <Image style={style.img} source = {require('../assets/images/icons8-stripe-96.png')}
       
       />
         <Image style={style.img} source = {require('../assets/images/icons8-paypal-64.png')}
       
       />
        </View>
        <View style={{
        shadowColor: "white",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        
        elevation: 15,
    }}>

<View style = { style.Card}>
    
    <View style = {style.Cardcontent}>
 
        <Text style = {style.label}>
            NAME OF CARD   
        </Text>
        <TextInput style= {style.TextInput}
    
        >

        </TextInput>
    </View>
    <View style = {style.Cardcontent}>
        <Text style = {style.label}>
          CARD NUMBER 
        </Text>
        <TextInput style= {style.TextInput}  keyboardType={'phone-pad'}
        
        >

        </TextInput>
    </View>
    <View style = {style.Cardcontent}>
        <Text style = {style.label}>
            EXPIRY DATE
        </Text>
        <TextInput style= {style.TextInput}  keyboardType={'phone-pad'}
        
        >

        </TextInput>
    </View>
    <View style = {style.Cardcontent}>
        <Text style = {style.label}>
            CVV
        </Text>
        <TextInput style= {style.TextInput}  keyboardType={'phone-pad'}
        
        >

        </TextInput>
    </View>
        
    </View>

    
</View> 
<TouchableOpacity style={style.loginBtn}>
        <Text style={style.loginText}>MAKE PAYMENT</Text> 
      </TouchableOpacity> 

    </View>
   )
}
const style = StyleSheet.create({
    Container: {
      
       marginTop: 0,
      
       maxHeight: 500
    
      },
      Header: {
        backgroundColor: "#58489E",
        height: 250,
        width: "100%",
      },
      HeadText: {
        fontSize: 30,
        paddingTop: 110,
        color: "white",
        fontWeight: "900",
        paddingLeft: 10,
        
        
      },
     
      smallText: {
        fontSize: 13,
        fontWeight: "900",
        color: "white",
        paddingLeft: 10, 

      },
      payType: {
        display: "flex",
        flexDirection: 'row',
        gap: 10,
       marginLeft: 10,
        alignItems: 'center',
        marginBottom: 50,
        marginTop: 50,
        justifyContent: 'space-evenly'
      },
      img: {
        alignItems: "center",

        height: 80,
        width:80,
        padding: 10,
        gap: 2,
      
    },
    Card: {
        marginLeft: 5,
        width:400,
        height: 300,
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
        
        


    },
    Cardcontent: {
       padding: 10,
       paddingTop: 10,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      
      TextInput: {
        width: 170,
        height: 45,
        alignItems: 'center',
        border: 2,
        borderBottomColor: "black",
        borderBottomWidth: 2,
        marginBottom: 20,


       
       
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
        marginLeft: 50,
        
      },
      loginText: {
        color: "white",
      },

})