import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';


export default function Userdash({ navigation }){
  const pressHandler = () => {
    navigation.push('Track');
 }
 const profile = () => {
  navigation.push('Profile')
 }
 const Booking = () => {
  navigation.push('Order')
 }
const payment = () => {
  navigation.push('payment')
}
const history = () => {
  navigation.push('history')
}
const order = () => {
  navigation.push('makeorder')
}

    return(
        
            <View style={style.Container}>
                <View style={style.Header}>
                <TouchableOpacity>
                <Image style={style.image} source={require("../assets/images/images.png")} /> 
                <Text style={style.buttonTexts}> Welcome MR HighTower</Text>
                </TouchableOpacity>
              
                <TouchableOpacity style = {style.optionbts}>
                <Image style={style.imagenoti} source={require("../assets/images/noti.png")} /> 

                </TouchableOpacity>
                </View>
               <View style = {style.card}>
               <View style = {style.Row}>
                    <TouchableOpacity style = {style.optionbts} onPress={pressHandler}>
                <Image style={style.imageopt} source={require("../assets/images/track.png")} /> 
                <Text style={style.buttonText}>Track Item</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {style.optionbts} onPress={order} >
                <Image style={style.imageopt} source={require("../assets/images/order.png")} /> 
                <Text style={style.buttonText}>Place Order</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {style.optionbts} onPress={Booking}>
                <Image style={style.imageopt} source={require("../assets/images/dispatch.png")} /> 
                <Text style={style.buttonText}>Send Dispatch</Text>
                </TouchableOpacity>
                    </View>
                    <View style = {style.Row}>
                    <TouchableOpacity style = {style.optionbts} onPress={payment}>
                <Image style={style.imageopt} source={require("../assets/images/payment.png")} /> 
                <Text style={style.buttonText}>Payment</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {style.optionbts} onPress = {history}>
                <Image style={style.imageopt} source={require("../assets/images/history.png")} /> 
                <Text style={style.buttonText}>History</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {style.optionbts} onPress={profile}>
                <Image style={style.imageopt} source={require("../assets/images/profile.png")} /> 
                <Text style={style.buttonText}>Profile</Text>
                </TouchableOpacity>
                    </View>
               </View>
               
                    
                
                
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
        height: 200,
        width: "100%",
        paddingTop: 50,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
      },
      image: {
        alignItems: "center",
        display: "flex",
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 50,
        height: 50,
        border: 2,
        borderWidth: 2,
        width: 70,
        height: 70,
      },
    imagenoti: {
        height: 50,
        width: 50,
        marginTop: -25
       
       
    },
    buttonText:{
textAlign: "center"
    },
    buttonTexts: {
color: "white",
paddingTop: 10,
fontSize: 17
    },
    imageopt: {
        height: 70,
        width: 80,
       alignItems:"center",
       justifyContent: "center",
       
        
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
        padding: 10,
        marginTop: 50,
        width: '100%',
        alignItems: 'center',
       
        paddingLeft: 55,
        paddingRight: 50

       
      },
    
      Row:{
        display: "flex",
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 25,
        
        
          },
          optionbts: {
            padding: 30
          }
    })

