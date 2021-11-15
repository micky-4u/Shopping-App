import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground } from 'react-native';

// form handler
import { Formik } from 'formik';

//icons
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

const image = require("../assets/images/bg.jpg")


const Checkout = ({navigation}) =>{
    return (
        
        <View style = {styles.container}>

           <View style = {styles.textArea}>
                <Text style ={{fontSize: 30, fontWeight: "bold", textAlign: 'center', color: "#665C6C" }}>Add Shipping Details</Text>
                <Text></Text>
           </View>

            <View style = {styles.inputArea}>
                 <Formik
                            initialValues={{
                                 Fullname: '',
                                 email: '',
                                 Adress: '',
                                 Llalndmark: '',
                                 repass: ''
                                 }}
                            onSubmit={values => console.log(values)}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <View>
                                    <TextInput
                                    onChangeText={handleChange('Fullname')}
                                    onBlur={handleBlur('Fullname')}
                                    value={values.Fullname}
                                    placeholder= "Name"
                                    style = {styles.inputs}
                                     /><TextInput
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    placeholder= "Email"
                                    style = {styles.inputs}
                                     />
                                    <TextInput
                                    onChangeText={handleChange('Adress')}
                                    onBlur={handleBlur('Adress')}
                                    value={values.Adress}
                                    placeholder= "Adress"
                                    style = {styles.inputs}
                                     />
                                
                                
                                    <TextInput
                                    onChangeText={handleChange('Llalndmark')}
                                    onBlur={handleBlur('Llalndmark')}
                                    value={values.Llalndmark}
                                    placeholder= "Llalndmark"
                                    secureTextEntry = {true}
                                    style = {styles.inputs}
                                    
                                     />
                                      <TextInput
                                    onChangeText={handleChange('repass')}
                                    onBlur={handleBlur('repass')}
                                    value={values.repass}
                                    placeholder= ""
                                    secureTextEntry = {true}
                                    style = {styles.inputs}
                                    
                                     />


                                <TouchableOpacity  onPress={handleSubmit} title="Submit" style = {styles.loginBtn}>
                                    <Text style ={{textAlign: "center", color: "#fff", fontSize: 20, fontWeight: "bold"}}>Done</Text>
                                </TouchableOpacity>
                            </View>
                    )}
                 </Formik>
            </View>

              
               

          
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
        marginTop: 50,
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
        margin: 20,
        paddingHorizontal:20,
        borderColor: "#fff",
        borderRadius: 10
        
    },
    footText: {
        marginBottom: 40,
        alignItems: "center"
    }

})

export default Checkout;