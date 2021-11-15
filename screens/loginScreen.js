
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground } from 'react-native';

// form handler
import { Formik } from 'formik';

//icons
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const image = require("../assets/images/bg.jpg")


const LoginScreen = ({navigation}) =>{
    return (
        <View style = {styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={{width: '100%', height: '100%', borderRadius: 20}}>

           <View style = {styles.textArea}>
                <Text style ={{fontSize: 30, fontWeight: "bold", textAlign: 'center', color: "#665C6C" }}>Hello</Text>
                <Text>Welcome to Adano's Ventures</Text>
           </View>

            <View style = {styles.inputArea}>
                 <Formik
                            initialValues={{
                                 username: '',
                                 password: ''
                                 }}
                            onSubmit={values => console.log(values)}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <View>
                                
                                    <TextInput
                                    onChangeText={handleChange('username')}
                                    onBlur={handleBlur('username')}
                                    value={values.username}
                                    placeholder= "username"
                                    style = {styles.inputs}
                                     />
                                
                                
                                    <TextInput
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    placeholder= "password"
                                    secureTextEntry = {true}
                                    style = {styles.inputs}
                                    
                                     />
                                
                                <TouchableOpacity style = {styles.forgot}>
                                    <Text style = {{color: "blue"}}>forgot password</Text>
                                </TouchableOpacity>

                                <TouchableOpacity  onPress={()=> navigation.navigate('HomeScreen', { name: 'HomeScreen'})} title="Submit" style = {styles.loginBtn}  >
                                    <Text style ={{textAlign: "center", color: "#fff", fontSize: 20, fontWeight: "bold"}}>Login</Text>
                                </TouchableOpacity>
                            </View>
                    )}
                 </Formik>
            </View>

                 <View style={{flexDirection: 'row', alignItems: 'center', marginRight: 35, marginLeft: 35,}}>
                    <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                    <View>
                        <Text style={{width: 80, textAlign: 'center', paddingHorizontal: 5,}}>Login with</Text>
                    </View>
                    <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                 </View>
               

           <View style = {{flex: 1, flexDirection: "row", justifyContent: "center", marginTop: 20, marginBottom: 140,  }}>
               <TouchableOpacity style = {styles.others}>
                    <FontAwesome name="facebook-square" size={30} color="blue" />
               </TouchableOpacity>
                <TouchableOpacity style = {styles.others}>
                    <MaterialCommunityIcons name="gmail" size={30} color="red" />
               </TouchableOpacity>

           </View>
           <View style = {styles.footText}>
                <TouchableOpacity onPress = {()=> navigation.navigate('SignUpScreen', {name: 'SignUpScreen'})}>
                   <Text style = {{color: "blue"}}>Don't have an account?</Text>
               </TouchableOpacity>
           </View>
        
        </ImageBackground>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        color: "#F8F9FA",
        justifyContent: "space-evenly"

    },
    textArea:{
        alignItems: "center",
        marginTop: 80,
    },
    inputArea:{
        marginTop: 40,

    },
    inputs:{
        backgroundColor: "#fff",
        marginLeft: 35,
        marginRight:35,
        padding: 15,
        marginTop: 15,
        borderRadius: 10,


    },
    loginBtn:{
        backgroundColor: "#FA6C58",
        marginTop: 30,
        padding: 15,
        marginRight: 35,
        marginLeft: 35,
        marginBottom: 20,
        borderRadius: 10,



    },
    forgot:{
        marginLeft: 35,
        marginTop: 20,

    }, 
    others: {
        padding: 15,
        borderWidth: 1,
        margin: 30,
        borderColor: "#fff",
        borderRadius: 10
        
    },
    footText: {
        marginBottom: 40,
        alignItems: "center"
    }

})

export default LoginScreen;