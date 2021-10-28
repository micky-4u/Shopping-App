import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

// form handler
import { Formik } from 'formik';

//icons
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const LoginScreen = () =>{
    return (
        <View style = {styles.container}>
           <View style = {styles.textArea}>
                <Text style ={{fontSize: 30, fontWeight: "bold", textAlign: 'center', color: "#665C6C" }}>Sign Up</Text>
                <Text>Start shopping with Adano's Ventures</Text>
           </View>

            <View style = {styles.inputArea}>
                 <Formik
                            initialValues={{
                                 name: '',
                                 email: '',
                                 username: '',
                                 password: ''
                                 }}
                            onSubmit={values => console.log(values)}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <View>
                                    <TextInput
                                    onChangeText={handleChange('name')}
                                    onBlur={handleBlur('name')}
                                    value={values.name}
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
                                    onChangeText={handleChange('username')}
                                    onBlur={handleBlur('username')}
                                    value={values.username}
                                    placeholder= "Username"
                                    style = {styles.inputs}
                                     />
                                
                                
                                    <TextInput
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    placeholder= "Password"
                                    secureTextEntry = {true}
                                    style = {styles.inputs}
                                    
                                     />
                                      <TextInput
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    placeholder= "Re-type password"
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

                 <View style={{flexDirection: 'row', alignItems: 'center', marginRight: 35, marginLeft: 35, marginTop: 45}}>
                    <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                    <View>
                        <Text style={{width:90, textAlign: 'center', paddingHorizontal: 5,}}>SignUP with</Text>
                    </View>
                    <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                 </View>
               

           <View style = {{flex: 1, flexDirection: "row", justifyContent: "center", }}>
               <TouchableOpacity style = {styles.others}>
                    <FontAwesome name="facebook-square" size={30} color="blue" />
               </TouchableOpacity>
                <TouchableOpacity style = {styles.others}>
                    <MaterialCommunityIcons name="gmail" size={30} color="red" />
               </TouchableOpacity>

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