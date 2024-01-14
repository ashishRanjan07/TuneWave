import {Image, ScrollView, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import { Octicons,Entypo,AntDesign,MaterialIcons,Ionicons,Feather,FontAwesome } from '@expo/vector-icons';


const Setting = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
    {/* Banner Image */}
    <TouchableOpacity style={styles.image} onPress={()=>navigation.replace('Main Screen')}>
      <Image
        source={require('../../../assets/images/setting.jpeg')}
        resizeMode="cover"
        style={styles.imageView}
      />
    </TouchableOpacity>
     {/* Horizontal Line */}
     <View style={styles.hr} />
      {/* List of Options */}
      <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={styles.listview}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Octicons
            name="share"
            size={35}
            color="black"
            style={{padding: 5, marginStart: 10}}
          />
          <Text
            style={styles.text}>
            Backup
          </Text>
        </View>
        <View>
          <Entypo name="chevron-right" size={35} color="black" style={{}} />
        </View>
      </View>

      <TouchableOpacity onPress={()=> navigation.navigate('Notification')}
        style={styles.listview}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <MaterialIcons
            name="notifications-none"
            size={35}
            color="black"
            style={{padding: 5, marginStart: 10}}
          />
          <Text
            style={styles.text}>
            Notification
          </Text>
        </View>
        <View>
          <Entypo name="chevron-right" size={35} color="black" style={{}} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Language')}
        style={styles.listview}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <FontAwesome
            name="check-square-o"
            size={35}
            color="black"
            style={{padding: 5, marginStart: 10}}
          />
          <Text
            style={styles.text}>
            Language
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={styles.text}>
            English (US)
          </Text>
          <Entypo name="chevron-right" size={35} color="black" style={{}} />
        </View>
      </TouchableOpacity>

      <View
        style={styles.listview}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <AntDesign
            name="eyeo"
            size={35}
            color="black"
            style={{padding: 5, marginStart: 10}}
          />
          <Text
            style={styles.text}>
            Dark Mode
          </Text>
        </View>
        <View>
          <Entypo name="chevron-right" size={35} color="black" style={{}} />
        </View>
      </View>

      <View
        style={styles.listview}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Feather
            name="send"
            size={35}
            color="black"
            style={{padding: 5, marginStart: 10}}
          />
          <Text
            style={styles.text}>
            Share App
          </Text>
        </View>
        <View>
          <Entypo name="chevron-right" size={35} color="black" style={{}} />
        </View>
      </View>

      <View
        style={styles.listview}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Ionicons
            name="language"
            size={35}
            color="black"
            style={{padding: 5, marginStart: 10}}
          />
          <Text
            style={styles.text}>
           Change Language
          </Text>
        </View>
        <View>
          <Entypo name="chevron-right" size={35} color="black" style={{}} />
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Privacy Policy')}
        style={styles.listview}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <MaterialIcons
            name="privacy-tip"
            size={35}
            color="black"
            style={{padding: 5, marginStart: 10}}
          />
          <Text
            style={styles.text}>
           Privacy Policy
          </Text>
        </View>
        <View>
          <Entypo name="chevron-right" size={35} color="black" style={{}} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('FAQ')}
        style={styles.listview}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Octicons
            name="question"
            size={35}
            color="black"
            style={{padding: 5, marginStart: 10}}
          />
          <Text
            style={styles.text}>
            FAQ
          </Text>
        </View>
        <View>
          <Entypo name="chevron-right" size={35} color="black" style={{}} />
        </View>
      </TouchableOpacity>

      <View
        style={styles.listview}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <AntDesign
            name="logout"
            size={35}
            color="black"
            style={{padding: 5, marginStart: 10}}
          />
          <Text
            style={styles.text}>
            Quit
          </Text>
        </View>
        <View>
          <Entypo name="chevron-right" size={35} color="black" style={{}} />
        </View>
      </View>
      </ScrollView>
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '95%',
    height: '30%',
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    elevation: 10,
    borderRadius: 30,
  },
  imageView: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
  },
  hr: {
    borderWidth: 1,
    borderColor: '#d4d3d8',
    marginVertical: 20,
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  text:{
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    marginStart: 15,
  },
  listview:{
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom:15,
    elevation:3,
    borderRadius:10,
    padding:5,
    backgroundColor:'white'
  }
})