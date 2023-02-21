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


    export default function Profile({ navigation }){
        return(
            <View style = {style.Container}>
                <View style = {style.Header}>
                <Text style = {style.HeadText}>
                PROFILE
            </Text>
            <Text style = {style.smallText}>
                MANAGE YOUR PROFILE
            </Text>
            <View style = {style.proOption}>
                <TouchableOpacity style = {style.optionbts}>
                <Text style={style.loginText}>PROFILE</Text> 
                </TouchableOpacity>
                <TouchableOpacity style = {style.optionbts}>
                <Text style={style.loginText}>PERMISSION</Text> 
                </TouchableOpacity>
                <TouchableOpacity style = {style.optionbts}>
                <Text style={style.loginText}>INSURANCE </Text> 
                </TouchableOpacity>
               
            </View>
                </View>
                <View style={style.Card}>
                    <View style={style.cardImage}>
                    <Image style={style.image} source={require("../assets/images/images.png")} /> 

                       

                    </View>
                    <TouchableOpacity style={style.changeBtn}>
        <Text style={style.btnText}>UPDATE PICTURE</Text> 
      </TouchableOpacity> 
                    
                    <View style = {style.Cardcontent}>
 
        <Text style = {style.label}>
            NAME  
        </Text>
        <TextInput style= {style.TextInput} editable={false}
    
        >

        </TextInput>
    </View>
    <View style = {style.Cardcontent}>
        <Text style = {style.label}>
          EMAIL ADDRESS
        </Text>
        <TextInput style= {style.TextInput} editable={false}
        
        >

        </TextInput>
    </View>
    <View style = {style.Cardcontent}>
        <Text style = {style.label}>
            PHONE NUMBER
        </Text>
        <TextInput style= {style.TextInput} editable={false}
        
        >

        </TextInput>
    </View>
  

            </View>
            <TouchableOpacity style={style.loginBtn}>
        <Text style={style.btnText}>SAVE</Text> 
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
        height: 350,
        width: "100%",
      },
      HeadText: {
        fontSize: 30,
        paddingTop: 140,
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
      proOption: {
        display: 'flex',
        marginTop: 80,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'space-evenly'
      },
      optionbts: {
        width: "30%",
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        marginBottom: 10,
        backgroundColor: "white",
        

      },
      Card : {
        marginLeft: 5,
        width: 400,
        height: 400,
        padding: 10,
        border: 2,
        borderWidth: 2,
        borderColor: "black",
        marginTop: 25,
        flexWrap: "wrap",
        borderRadius: 30,
        backgroundColor: "white",
        alignItems: 'center'
        
        
      },
      cardImage :{
        alignItems: "center",
        display: "flex",
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 50,
        height: 100,
        border: 2,
        borderWidth: 2,
        marginTop: 15,
        marginBottom: 10,
        marginLeft: 250,
       
      },
      image : {
        alignItems: "center",
        display: "flex",
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 50,
        height: 50,
        border: 2,
        borderWidth: 2,
        width: 100,
      
      
      },
     label:{
        marginLeft: -10,
        paddingTop: 5

     },
     TextInput: {
        marginLeft: -10,
        width: 300,
        height: 10,
        alignItems: 'center',
        border: 2,
        borderBottomColor: "black",
        borderBottomWidth: 2,
        marginBottom: 20,
        paddingTop: 25


       
       
      },
      loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 20,
        backgroundColor: "black",
        marginLeft: 50,
        
      },
      btnText: {
        color: "white",
      },
      changeBtn:{
        width: "40%",
        height: 25,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        marginBottom: 10,
        backgroundColor: "black",
        borderRadius: 50

      }
    })