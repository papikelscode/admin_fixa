import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  Modal,
  Pressable
} from 'react-native';
export default function Tracker ({ navigation }){
    const [modalVisible, setModalVisible] = useState(false);
    return(
        <View style = {style.container}>
           <ImageBackground
       
       style={style.header}>
       <Text style={style.heading}>TRACKER</Text>
     </ImageBackground>
<View style = {style.card}>
    <View style = {style.row}>
        <View style = {style.info}>
        
        <View style={style.radioButtonContainer}>
   <TouchableOpacity onPress={() => {}} style={style.radioButton}>
     <View style={style.radioButtonIcon} />
   </TouchableOpacity>
   <TouchableOpacity onPress={() => {}}>
     <Image style={style.radioButtonText} source={require("../assets/images/receive.png")} />
   </TouchableOpacity>
 </View>
            
        </View>
        <View style = {style.info}>
        
        <View style={style.radioButtonContainer}>
   <TouchableOpacity onPress={() => {}} style={style.radioButton}>
     <View style={style.radioButtonIcon} />
   </TouchableOpacity>
   <TouchableOpacity onPress={() => {}}>
     <Image style={style.radioButtonText} source={require("../assets/images/bike.png")} />
   </TouchableOpacity>
 </View>
            
        </View>
        <View style = {style.info}>
        
        <View style={style.radioButtonContainer}>
   <TouchableOpacity onPress={() => {}} style={style.radioButton}>
     <View style={style.radioButtonIcon} />
   </TouchableOpacity>
   <TouchableOpacity onPress={() => {}}>
     <Image style={style.radioButtonText} source={require("../assets/images/check.png")} />
   </TouchableOpacity>
 </View>
            
        </View>
        
    </View>
</View>

{/* <TouchableOpacity style = {style.btn}>
    <Text style = {style.btnText}>
        Completed
    </Text>
</TouchableOpacity> */}
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
            <Text style={style.modalText}>Would you like to leave a comment </Text>
            <TextInput style = {style.TextInput} placeholder="Leave a comment here"></TextInput>
           

            <Pressable
              style={[style.xbutton, style.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={style.textStyle}>SEND COMMENT</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[style.button, style.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={style.textStyle}>Completed</Text>
      </Pressable>
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
      header: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
        paddingBottom: 20,
        width: '100%',
        height: 200,
        backgroundColor: "#58489E"
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
         height:100,
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
     radioButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 0,
        padding: 10,
        
        
  
        
  
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
      radioButtonIcon: {
        height: 14,
        width: 14,
        borderRadius: 7,
        backgroundColor: "#98CFB6",
    
      },
      radioButtonText: {
        fontSize: 13,
        marginLeft: 0
      },
      row: {
        display: "flex",
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'space-around'
      },
      radioButtonText: {
        
      },
      info: {
        display: "flex",
        justifyContent: "space-between"
      },
      btn: {
        width: "30%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        backgroundColor: "#58489E",
        marginLeft: 230
      },
      btnText: {
        color: "white"
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
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        backgroundColor: "#58489E",
        marginLeft: 230
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

