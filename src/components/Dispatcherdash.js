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



const Dispatcherdash = () => {
    return (
        <ScrollView>
<View style={styles.container}>
        <View style={styles.card}>
        <TextInput style={styles.input} placeholder="Starting from" />
        <TextInput style={styles.input} placeholder="Destination" />
        </View>
        

        <Image style={styles.img} source = {require('../assets/images/map.jpg')} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start Trip</Text>
        </TouchableOpacity>
      </View>
        </ScrollView>
      

    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        position:"relative",
        
      },
      input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        width: '100%',
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
        padding: 30,
        marginTop:50,
        width: '90%',
        // alignItems: 'center',
        position: "relative"
       
      },
      img:{
        
        width:400,
        height:500,
        padding:100,
        marginTop: 30,
     },
     button: {
        backgroundColor: '#58489E',
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
        width: 200,
        alignItems: 'center',
      },
      buttonText: {
        color: '#fff',
        fontWeight: 'bold',
      },
    
})  

export default Dispatcherdash;