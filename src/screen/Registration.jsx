import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { Feather,Fontisto,Ionicons } from '@expo/vector-icons';

const Registration = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
    <StatusBar animated={true} backgroundColor="#332007" />
    <ImageBackground
      source={require('../../assets/images/reg.png')}
      resizeMode="cover"
      style={styles.imageBackground}>
      <View style={styles.viewHolder}>
        <Text style={styles.text}>Get Started</Text>
        <Text style={styles.text2}>Create an account</Text>
        <View style={styles.inputholder}>
          <Feather
            name="user"
            color="gray"
            size={24}
            style={{marginStart: 15}}
          />
          <TextInput
            placeholder="Name"
            style={styles.textInput}
            placeholderTextColor="gray"
          />
        </View>
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

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={{marginTop:15}} onPress={()=> navigation.navigate('Login')}>
          <Text style={{color:'gray',fontSize:20}}>Already have an account ?</Text>
        </TouchableOpacity>

        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            marginVertical: 30,
            color: 'gray',
          }}>
          ---------- OR ----------
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 25,
            marginVertical: 15,
            color: 'gray',
          }}>
          Registration with
        </Text>
        <View style={{flexDirection: 'row', gap: 20, marginVertical: 25}}>
          <TouchableOpacity>
            <Ionicons name="logo-facebook" size={48} color="blue" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="logo-google" size={48} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  </View>
  )
}

export default Registration

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
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
    marginVertical: 50,
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
  imageBackground: {height: '100%', width: '100%'},
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
})