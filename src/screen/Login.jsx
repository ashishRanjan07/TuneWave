import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import { Feather,Fontisto,Ionicons } from '@expo/vector-icons';
const Login = ({navigation}) => {
  const [showForgetpasswordDialogbox, setShowForgetPasswordDialogbox] =
  useState(false);
const [count, setCount] = useState(0);
const [otplength, setOtpLength] = useState(0);

const handleChangePassword = () => {
  Alert.alert('Success', 'Password updated successfully');
  setShowForgetPasswordDialogbox(false);
  setCount(0);
  setOtpLength(0);
};
  return (
      <ImageBackground source={require('../../assets/images/reg.png')}
      resizeMode="cover"
      style={styles.imageBackground}>
       <ScrollView style={styles.mainContainer}>
       <View style={styles.viewHolder}>
             <Text style={styles.text}>Get Started</Text>
             <Text style={styles.text2}>Login to account</Text>
   
             <View style={styles.inputholder}>
               <Fontisto
                 name="email"
                 color="gray"
                 size={24}
                 style={{marginStart: 15}}
               />
   
               <TextInput
                 placeholder="Email"
                 style={styles.textInput}
                 placeholderTextColor="gray"
               />
             </View>
             <View style={styles.inputholder}>
               <Feather
                 name="lock"
                 color="gray"
                 size={24}
                 style={{marginStart: 15}}
               />
               <TextInput
                 placeholder="Password"
                 style={styles.textInput}
                 placeholderTextColor="gray"
               />
             </View>
             <View style={styles.login}>
               <TouchableOpacity
                 onPress={() => setShowForgetPasswordDialogbox(true)}
                 style={styles.passwordf}>
                 <Text style={[styles.textInput, {textAlign: 'right'}]}>
                   Forget Password?
                 </Text>
               </TouchableOpacity>
             </View>
   
             <View style={styles.buttonContainer}>
               <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Bottom')}>
                 <Text style={styles.buttonText}>Login</Text>
               </TouchableOpacity>
             </View>
   
             <TouchableOpacity style={{marginTop:15}} onPress={()=> navigation.navigate('Registration')}>
               <Text style={{color:'gray',fontSize:20}}>Create an account ?</Text>
             </TouchableOpacity>
   
             <Text style={styles.OR}>---------- OR ----------</Text>
             <Text style={styles.loginWith}>Login with</Text>
             <View style={{flexDirection: 'row', gap: 20, marginVertical: 25}}>
               <TouchableOpacity>
                 <Ionicons name="logo-facebook" size={48} color="blue" />
               </TouchableOpacity>
               <TouchableOpacity>
                 <Ionicons name="logo-google" size={48} color="red" />
               </TouchableOpacity>
             </View>
           </View>
           {showForgetpasswordDialogbox === true && (
             <View
               style={styles.fpasswordholder}>
               <Text
                 style={styles.texthead}>
                 Forget Password
               </Text>
               {count === 0 && (
                 <>
                   <View style={[styles.inputholder, {alignSelf: 'center'}]}>
                     <Fontisto
                       name="email"
                       color="gray"
                       size={24}
                       style={{marginStart: 15}}
                     />
   
                     <TextInput
                       placeholder="Email"
                       style={styles.textInput}
                       placeholderTextColor="gray"
                     />
                   </View>
                   <View style={styles.buttonContainer}>
                     <TouchableOpacity
                       style={styles.button}
                       onPress={() => setCount(1)}>
                       <Text style={styles.buttonText}>Request OTP</Text>
                     </TouchableOpacity>
                   </View>
                 </>
               )}
               {count === 1 && (
                 <View style={[styles.inputholder, {alignSelf: 'center'}]}>
                   <Fontisto
                     name="codepen"
                     color="gray"
                     size={24}
                     style={{marginStart: 15}}
                   />
   
                   <TextInput
                     maxLength={6}
                     placeholder="Enter OTP"
                     style={styles.textInput}
                     placeholderTextColor="gray"
                     onChangeText={text => setOtpLength(text)}
                   />
                 </View>
               )}
               {otplength.length === 6 && (
                 <Text style={styles.otpmessage}>
                   Otp Verified
                 </Text>
               )}
               {count === 1 && otplength.length === 6 && (
                 <View>
                   <Text
                     style={styles.texthead}>
                     Set up new password
                   </Text>
                   <View style={[styles.inputholder, {alignSelf: 'center'}]}>
                     <Feather
                       name="lock"
                       color="gray"
                       size={24}
                       style={{marginStart: 15}}
                     />
                     <TextInput
                       placeholder="New password"
                       style={styles.textInput}
                       placeholderTextColor="gray"
                     />
                   </View>
                   <View style={styles.buttonContainer}>
                     <TouchableOpacity
                       style={styles.button}
                       onPress={handleChangePassword}>
                       <Text style={styles.buttonText}>Change Password</Text>
                     </TouchableOpacity>
                   </View>
                 </View>
               )}
             </View>
           )}
       </ScrollView>
   
      </ImageBackground>
   
  )
}

export default Login

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    alignContent: 'center',
  },
  inputholder: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    width: '85%',
    marginBottom: 20,
    borderRadius: 25,
    padding: 5,
  },
  text: {
    color: 'gray',
    fontSize: 32,
    textAlign: 'center',
    marginVertical: 25,
  },
  text2: {
    color: 'gray',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 20,
  },
  viewHolder: {

    marginVertical: 75,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
    fontSize: 20,
    marginStart: 30,
    color: 'gray',
  },
  imageBackground: { height: '100%', width: '100%' },
  buttonContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#dc8d20',
    padding: 15,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
  },
  login: { width: '80%', marginBottom: 20 },
  passwordf: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '50%',
    alignSelf: 'flex-end',
  },
  OR: {
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 30,
    color: 'gray',
  },
  loginWith: {
    textAlign: 'center',
    fontSize: 25,
    marginVertical: 15,
    color: 'gray',
  },
  fpasswordholder: {
    position: 'absolute',
    backgroundColor: 'white',
    width: '95%',
    height: 'auto',
    top: 25,
    borderRadius: 25,
    alignSelf: 'center',
  },
  texthead: {
    fontSize: 20,
    padding: 15,
    color: 'gray',
    textAlign: 'center',
  },
  otpmessage: {
    color: 'green',
    fontSize: 16, 
    textAlign: 'center'
  }
})