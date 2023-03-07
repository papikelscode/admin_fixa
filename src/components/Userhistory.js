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
  ImageBackground,
 
  ScrollView,
} from "react-native";

export default function Userhistory({ navigation }){
    const [modalVisible, setModalVisible] = useState(false);
    return(
        <View style={style.container}>
            <ImageBackground
       
       style={style.header}>
       <Text style={style.heading}>HISTORY</Text>
     </ImageBackground>

     <View style= {style.card}>
        <Text style = {style.inputText}>Dispatcher Parcel Alert</Text>
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
            <Text style={style.modalText}>You made delivery parcel , Here is the parcel details </Text>
            <View style={style.cardx}>
            <View style = {style.Cardcontent}>
 
 <Text style = {style.label}>
     PRODUCT NAME  
 </Text>
 <TextInput style= {style.TextInputx} editable={false}

 >

 </TextInput>
</View>
<View style = {style.Cardcontent}>
 
 <Text style = {style.label}>
     PRODUCT SIZE 
 </Text>
 <TextInput style= {style.TextInputx} editable={false}

 >

 </TextInput>
</View>
<View style = {style.Cardcontent}>
 
 <Text style = {style.label}>
     LOCATION 
 </Text>
 <TextInput style= {style.TextInputx} editable={false}

 >

 </TextInput>
</View>
<View style = {style.Cardcontent}>
 
 <Text style = {style.label}>
     PRICE 
 </Text>
 <TextInput style= {style.TextInputx} editable={false}

 >

 </TextInput>
</View>
<Pressable
              style={[style.xbutton, style.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={style.textStyle}>CLOSE</Text>
            </Pressable>

            </View>
           

           
          </View>
        </View>
      </Modal>
      <Pressable
        style={[style.button, style.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={style.textStyle}>Open</Text>
      </Pressable>
    </View> 
     </View>
     <View style= {style.card}>
        <Text style = {style.inputText}>Dispatcher Parcel Alert</Text>
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
            <Text style={style.modalText}>You delivered parcel , Here is the parcel details </Text>
            <View style={style.cardx}>
            <View style = {style.Cardcontent}>
 
 <Text style = {style.label}>
     PRODUCT NAME  
 </Text>
 <TextInput style= {style.TextInputx} editable={false}

 >

 </TextInput>
</View>
<View style = {style.Cardcontent}>
 
 <Text style = {style.label}>
     PRODUCT SIZE 
 </Text>
 <TextInput style= {style.TextInputx} editable={false}

 >

 </TextInput>
</View>
<View style = {style.Cardcontent}>
 
 <Text style = {style.label}>
     LOCATION 
 </Text>
 <TextInput style= {style.TextInputx} editable={false}

 >

 </TextInput>
</View>
<View style = {style.Cardcontent}>
 
 <Text style = {style.label}>
     PRICE 
 </Text>
 <TextInput style= {style.TextInputx} editable={false}

 >

 </TextInput>
</View>
            </View>
           
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
        <Text style={style.textStyle}>Open</Text>
      </Pressable>
    </View> 
     </View>
     
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      row: {
        display: "flex",
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      header: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
        paddingBottom: 20,
        width: '100%',
        height: 150,
        backgroundColor: "#58489E"
      },
      label:{
        marginLeft: -10,
        paddingTop: 5

     },
     TextInputx: {
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
      heading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
      },
    
     card: {
         marginLeft: 5,
         width:400,
         height:80,
         padding: 10,
       border: 2,
       borderWidth:2,
       borderColor: "whitesmoke",
       marginTop: 20,
     
         zIndex: 0,
         display: "flex",
         justifyContent: "space-evenly",
         flexWrap: "wrap",
         borderRadius: 30,
         backgroundColor: "white",
         
         
 
 
     },
     inputText:{
        fontSize: 18,
        padding: 10
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
        width: 100,
        borderRadius: 25,
        height: 25,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "#58489E",
        marginLeft: 70
      },
      buttonClose: {
        backgroundColor: '#58489E',
        width: 150
      },
      buttonCloses: {
        backgroundColor: 'red',
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
        fontSize: 17,
        fontWeight: "bold"
      },
      TextInput: {
        width: 250,
        height: 45,
        justifyContent: "center",
        alignItems: 'center',
        border: 2,
        borderColor: "whitesmoke",
        borderWidth: 2,
        marginBottom: 10,
        marginLeft: 10,
        fontSize: 15,
        padding: 15,
        fontFamily: "Roboto"
    


       
       
      }, 

    })