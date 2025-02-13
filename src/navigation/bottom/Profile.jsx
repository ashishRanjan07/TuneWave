import {Image,SafeAreaView,StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react';
import { Feather,FontAwesome } from '@expo/vector-icons';


const Profile = () => {
  const [name, setName] = useState('Ashish Ranjan');
  const [mobile, setMobile] = useState('6206416452');
  const [email, setEmail] = useState('aviashishranjan@gmail.com');
  const [dob, setDob] = useState('15-08-2001');

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView/>
      <Image
        source={require('../../../assets/images/pic.jpg')}
        resizeMode="cover"
        style={{width: '100%', height: '40%'}}
      />
      <Image
        source={require('../../../assets/images/pictwo.jpg')}
        resizeMode="cover"
        style={{
          position: 'absolute',
          height: 200,
          width: 250,
          borderRadius: 200,
          marginTop: '35%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignSelf: 'center',
        }}
      />

      <View style={{marginTop: '30%', gap: 15}}>
        <View style={[styles.viewHolder, {marginTop: -15}]}>
          <Feather name="user" color="gray" size={24} style={{width: '15%'}} />
          <Text style={styles.text}>{name}</Text>
        </View>
        <View style={styles.viewHolder}>
          <Feather
            name="smartphone"
            color="gray"
            size={24}
            style={{width: '15%'}}
          />
          <Text style={styles.text}>{mobile}</Text>
        </View>
        <View style={styles.viewHolder}>
          <Feather
            name="voicemail"
            color="gray"
            size={24}
            style={{width: '15%'}}
          />
          <Text style={styles.text}>{email}</Text>
        </View>
        <View style={styles.viewHolder}>
          <FontAwesome
            name="birthday-cake"
            color="gray"
            size={24}
            style={{width: '15%'}}
          />
          <Text style={styles.text}>{dob}</Text>
        </View>
      </View>
    </View>
  );
}

export default Profile

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  viewHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
    width: '75%',
    alignSelf: 'center',
    backgroundColor:'white',
    elevation:4
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: 'gray',
  },
})