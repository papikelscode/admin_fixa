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
  Alert, 
  Modal,
  Pressable,
 
  ScrollView,
} from "react-native";
// import ImagePicker from 'react-native-image-crop-picker';


// export default funtion Booking({ navigation }){
//     return(
// <View style = {style.Container}>

// </View>
//     )
// }
export default function Receiver({ navigation }){
  const [modalVisible, setModalVisible] = useState(false);
  const order = () => {
    navigation.push('makeorder')
  }
  const Booking = () => {
    navigation.push('Order')
   }
    return(
      <ScrollView>
 <View >
<View style = {style.Container}>
         <View style = {style.Header}>
         <Text style = {style.HeadText}>
                RECEIVE AN ITEM 
            </Text>
            <Text style = {style.smallText}>
                AND HAVE IT DELIVERED WITH OUT DELAY
            </Text>

            <View style={style.Row}>
              <TouchableOpacity style = {style.button} onPress ={Booking}>
                <Text style = {style.buttonText}>
                  SEND ITEM
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style = {style.button}>
                <Text style = {style.buttonText}>
                  RECEIVE ITEM
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style = {style.button} onPress= {order}>
                <Text style = {style.buttonText}>
                  ORDER
                </Text>
              </TouchableOpacity>
            </View>
            
         </View>
         <View style = {style.Card}>
            <TextInput style = {style.TextInput}
            placeholder="Pick up from"
            placeholderTextColor="black"
            
            ></TextInput>
            <TextInput style = {style.TextInput}  placeholder="Pick up phone number"
            placeholderTextColor="black"></TextInput>
            <TextInput style = {style.TextInput}  placeholder="Drop at "
            placeholderTextColor="black"></TextInput>
            <TextInput style = {style.TextInput}  placeholder="Name of item"
            placeholderTextColor="black"></TextInput>
            <TextInput style = {style.TextInput}  placeholder="Description of item"
            placeholderTextColor="black"></TextInput>
              <View style={style.Rows}>
            <View style={style.radioButtonContainer}>
   <TouchableOpacity onPress={() => {}} style={style.radioButton}>
     <View style={style.radioButtonIcon} />
   </TouchableOpacity>
   <TouchableOpacity onPress={() => {}}>
     <Text style={style.radioButtonText}>Express Dispatch</Text>
   </TouchableOpacity>
 </View>
 <View style={style.radioButtonContainer}>
   <TouchableOpacity onPress={() => {}} style={style.radioButton}>
     <View style={style.radioButtonIcon} />
   </TouchableOpacity>
   <TouchableOpacity onPress={() => {}}>
     <Text style={style.radioButtonText}>Standard Dispatch</Text>
   </TouchableOpacity>
 </View>
 <View style={style.radioButtonContainer}>
   <TouchableOpacity onPress={() => {}} style={style.radioButton}>
     <View style={style.radioButtonIconmain} />
   </TouchableOpacity>
   <TouchableOpacity onPress={() => {}}>
     <Text style={style.radioButtonText}>Shedule Dispatch</Text>
   </TouchableOpacity>
 </View>
            </View>
            
             
        
         </View>
         <View style={style.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <Text style={style.modalText}>Your Dispatch request has been sent , Here is your tracking ID</Text>
            <Text style={style.modalText}>11223344</Text>

            <Pressable
              style={[style.xbutton, style.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={style.textStyle}>CLOSE</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[style.button, style.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={style.textStyle}>SEND DISPATCH</Text>
      </Pressable>
    </View> 
     

         
         
 
     </View>
     </View>
      </ScrollView>
     
        
     
    )
 }
const style = StyleSheet.create({
    Container: {
      
       marginTop: 0,
      
      
       
 
    
      },
      Header: {
        backgroundColor: "#58489E",
        height: 150,
        width: "100%",
      },
   
    Card: {
        marginLeft: 5,
        width:450,
        height:550,
        padding: 10,
      border: 2,
      borderWidth:2,
      borderColor: "whitesmoke",
      marginTop: 20,
    
        zIndex: 0,
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        borderRadius: 30,
        backgroundColor: "white",
        
        


    },
    TextInput: {
        width: 350,
        height: 55,
        justifyContent: "center",
        alignItems: 'center',
        border: 2,
        borderColor: "whitesmoke",
        borderWidth: 2,
        marginBottom: 0,
        marginLeft: 10,
        fontSize: 15,
        padding: 15,
        fontFamily: "Roboto"
    


       
       
      }, 
      HeadText: {
        fontSize: 30,
        paddingTop: 10,
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
        marginTop: 20,
        backgroundColor: "#58489E",
        marginLeft: 80
      },
      loginText: {
        color: "white",
      },
      button: {
        width: "30%",
        borderRadius: 20,
        height: 40,
        backgroundColor: "white",
        marginTop: 20,
        alignItems: "center",
        padding: 10

      },
      Row:{
    display: "flex",
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: 'space-evenly'
      },
      buttonText: {
        color: "black",
      },
     
      smallText: {
        fontSize: 13,
        fontWeight: "900",
        color: "white",
        paddingLeft: 10, 

      },
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      xbutton: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        width: "60%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: -15,
        backgroundColor: "#58489E",
        marginLeft: 0
      },
      buttonClose: {
        backgroundColor: '#2196F3',
        width: 150
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
      radioButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 0,
        padding: 10
        
  
        
  
      },
      radioButton: {
        height: 20,
        width: 20,
        backgroundColor: "#F8F8F8",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#E6E6E6",
        alignItems: "center",
        justifyContent: "center",
       
      },
      radioButtonIconmain: {
        height: 14,
        width: 14,
        borderRadius: 7,
        backgroundColor: "#98CFB6"
      },
      radioButtonText: {
        fontSize: 13,
        marginLeft: 0
      }
      
    })