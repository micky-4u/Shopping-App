import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, ImageBackground, Image } from 'react-native';

// color grading import
import { LinearGradient } from 'expo-linear-gradient';
const image = require("../images/bg.jpg")

const WelcomeScreen = ({navigation}) =>{
    return (
        <View style = {styles.container1}>
           <ImageBackground source={image} resizeMode="cover" style={{width: '100%', height: '100%', borderRadius: 20}}>

            <View style ={styles.imageArea}>
                <Image source={require("../images/homeimg.jpg")} resizeMode="cover" style={{width: '100%', height: '100%', borderRadius: 20}}/>
                
            </View>

            <View style={styles.textArea}>
                <Text style = {{fontSize: 30, fontWeight: "bold", textAlign: 'center', color: "#000"}} >
                    Welcome to{"\n"}
                    Adano's Ventures
                </Text>
                <Text style ={{textAlign: "center", fontSize: 16, paddingTop: 30, color: "#000", fontWeight: "bold", shadowColor:"#000"}}>
                    Quality and affordable mobile phones{"\n"}
                    accessaries and all the electronics
                </Text>
            </View>
            <View style ={styles.buttons}>
                <TouchableOpacity style = {styles.btn1} onPress = {()=> navigation.navigate('SignUpScreen', { name: 'SignUpScreen' })} >
                    <Text style ={{fontWeight: "bold",color: "#878787"}}>SignUp</Text>
                </TouchableOpacity>
                   
                
                <TouchableOpacity style = {styles.btn2} onPress = {()=> navigation.navigate('LoginScreen', { name: 'LoginScreen' })} >
                    <Text style ={{fontWeight: "bold",color: "#fff"}}>Login</Text>
                </TouchableOpacity>
            
                   
            </View>
            </ImageBackground>
        </View>

    )
}

const styles = StyleSheet.create({
    container1:{
        flex: 1,
        backgroundColor: "#F8F9FA",
        justifyContent: 'space-evenly',
        
    },
    mainText: {
        
    },
    background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 700,
    },
    
    imageArea:{
        flex: 1,
        height: 400,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#AD00FF"
    },
    textArea: {
        alignItems: "center",
        marginTop: 60,

    },
    buttons:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 90,
        marginBottom: 30,

        
        

    },
    btn1: {
        height: 30,

        borderColor: "#fff",
        padding: 26,
        paddingHorizontal: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#fff"
        
        
        
    },
    btn2: {
        height: 30,
        borderColor: "#fff",
        padding: 26,
        paddingHorizontal: 50,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        backgroundColor: "rgba(225,225,225,0.1)",
        borderTopLeftRadius: -20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        right: 10,
        

    },

})



export default WelcomeScreen;
