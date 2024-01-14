import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native'
import React, { useEffect } from 'react'
import Swiper from 'react-native-swiper'

const DotStyles = {
  activeDotColor: '#dc8d26', 
  dotColor: 'black',
};

const CustomPagination = ({index,total,dotStyles}) => {
  return (
    <View style={styles.pagination}>
      {[...Array(total)].map((_, i) => (
        <View
          key={i}
          style={[
            styles.paginationDot,
            i === index
              ? {
                  width: 45,
                  backgroundColor: dotStyles.activeDotColor,
                }
              : {
                  width: 10,
                  backgroundColor: dotStyles.dotColor,
                },
          ]}
        />
      ))}
    </View>
  )
}

const Splash = ({navigation}) => {

  const NextScreen = () =>{
    navigation.navigate('Registration');
  }
  useEffect(() => {
    setTimeout(() => {
      //     // Navigate from Splash to Welcome after 3 seconds
      navigation.navigate('Registration');
    }, 5000);
  })

  return (
     <View style={styles.mainContainer}>
      <StatusBar animated={true} backgroundColor="#dc8d26" />
      <Image
        source={require('../../assets/images/back.png')}
        resizeMode="cover"
        style={{height: '100%', width: '100%'}}
      />
      <View style={styles.overlay}>
        <Swiper
          loop={true}
          autoplay={true}
          autoplayTimeout={1}
          dotStyle={DotStyles}
          renderPagination={(index, total) => (
            <CustomPagination
              index={index}
              total={total}
              dotStyles={DotStyles}
            />
          )}>
          <Text style={styles.slideText}>
            Ad's free mp3 music player for your device
          </Text>
          <Text style={styles.slideText}>
            Just tap to play your favorite track and feel the rhythm.
          </Text>
          <Text style={styles.slideText}>
            Play, groove, and discover with our MP3 music player app.
          </Text>
        </Swiper>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={NextScreen}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  overlay: {
    borderColor: 'white',
    borderWidth: 2,
    width: '100%',
    height: '35%',
    position: 'absolute',
    backgroundColor: 'white',
    borderTopEndRadius: 75,
    borderTopStartRadius: 75,
    bottom: 0,
  },
  slideText: {
    textAlign: 'center',
    fontSize: 34,
    fontWeight: 'bold',
    color: 'black',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 40,
  },
  pagination: {
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginationDot: {
    // width: 25, // Adjust the width as needed
    height: 10, // Adjust the height as needed
    margin: 5,
    borderRadius: 5, // Use border radius to create rounded rectangles
  },
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