import {StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import { FontAwesome5,Entypo } from '@expo/vector-icons';

const MainScreen = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
    <StatusBar backgroundColor="white" barStyle="dark-content" />
    <View
      style={styles.textView}>
      <Text style={styles.premium}>Subscribe to Premium</Text>
      <Text style={styles.subtitle}>
        Enjoy listening songs with better audio quality, without restrictions,
        amd without ads.
      </Text>
    </View>

    
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.backgroundView} onPress={()=> navigation.navigate('Payment')}>
          <FontAwesome5
            name="crown"
            color="white"
            size={50}
            style={styles.icon}
          />
          <Text
            style={styles.price}>
            Rs.1.00 /month
          </Text>
          <View style={styles.line} />
          <View style={styles.textholder}>
            <View
              style={styles.view1}>
              <Entypo name="check" color="white" size={24} />
              <Text style={styles.text}>
                Listening with better audio quality
              </Text>
            </View>
            <View
              style={styles.view1}>
              <Entypo name="check" color="white" size={24} />
              <Text style={styles.text}>
                Listening without restriction & ads
              </Text>
            </View>
            <View
              style={styles.view1}>
              <Entypo name="check" color="white" size={24} />
              <Text style={styles.text}>
                unlimited skips & shuffles play{'      '}
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> navigation.navigate('Payment')} style={[styles.backgroundView,{backgroundColor:'#a93bff'}]}>
          <FontAwesome5
            name="crown"
            color="white"
            size={50}
            style={styles.icon}
          />
          <Text
            style={styles.price}>
            Rs.2.00 /month
          </Text>
          <View style={styles.line} />
          <View style={styles.textholder}>
            <View
              style={styles.view1}>
              <Entypo name="check" color="white" size={24} />
              <Text style={styles.text}>
                Listening with better audio quality
              </Text>
            </View>
            <View
              style={styles.view1}>
              <Entypo name="check" color="white" size={24} />
              <Text style={styles.text}>
                Listening without restriction & ads
              </Text>
            </View>
            <View
              style={styles.view1}>
              <Entypo name="check" color="white" size={24} />
              <Text style={styles.text}>
                unlimited skips & shuffles play{'      '}
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> navigation.navigate('Payment')} style={[styles.backgroundView,{backgroundColor:'#ff7388'}]}>
          <FontAwesome5
            name="crown"
            color="white"
            size={50}
            style={styles.icon}
          />
          <Text
            style={styles.price}>
            Rs.3.00 /month
          </Text>
          <View style={styles.line} />
          <View style={styles.textholder}>
            <View
              style={styles.view1}>
              <Entypo name="check" color="white" size={24} />
              <Text style={styles.text}>
                Listening with better audio quality
              </Text>
            </View>
            <View
              style={styles.view1}>
              <Entypo name="check" color="white" size={24} />
              <Text style={styles.text}>
                Listening without restriction & ads
              </Text>
            </View>
            <View
              style={styles.view1}>
              <Entypo name="check" color="white" size={24} />
              <Text style={styles.text}>
                unlimited skips & shuffles play{'      '}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  premium: {
    color: 'orange',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    textAlign: 'center',
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
  line: {
    width: '90%',
    borderWidth: 1,
    marginBottom: 20,
    borderColor: 'white',
  },
  backgroundView: {
    backgroundColor: '#ff9940',
    borderRadius: 35,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical:10,
  },
  icon:{marginVertical: 15},
  textView:{
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    gap: 5,
    marginVertical: 20,
  },
  price:{
    color: 'white',
    fontSize: 24,
    fontWeight: '800',
    marginVertical: 10,
  },
  textholder:{marginBottom: 15, gap: 15},
  view1:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: 25,
  },
  text:{color: 'white', fontSize: 18, fontWeight: '600'}
})