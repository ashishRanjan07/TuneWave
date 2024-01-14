import {StyleSheet, Text, View, FlatList, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

const Payment = ({navigation}) => {
  const paymentMethod = [
    {
      id: 1,
      name: 'PayPal',
      image: require('../../../assets/images/paypal.png'),
    },
    {
      id: 2,
      name: 'Google Pay',
      image: require('../../../assets/images/google.png'),
    },
    {
      id: 3,
      name: 'Phone Pay',
      image: require('../../../assets/images/phonepay.png'),
    },
    {
      id: 4,
      name: 'Paytm',
      image: require('../../../assets/images/paytm.png'),
    },
    {
      id: 5,
      name: 'Cred Pay',
      image: require('../../../assets/images/cred.png'),
    },
    {
      id: 6,
      name: 'Amazon Pay',
      image: require('../../../assets/images/amazon-pay.png'),
    },
    {
        id: 7,
        name: 'Add New Card',
        image: require('../../../assets/images/atm-card.png'),
      },
  ];

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={()=> navigation.navigate('Payment Review')}
        style={styles.view1}>
        <View
          style={styles.view2}>
          <Image source={item.image} style={{height: 30, width: 30}} />
          <Text
            style={styles.text}>
            {item.name}
          </Text>
        </View>
        <View style={{marginEnd: 20}}>
          <Feather name="check-circle" size={35} color="orange" />
        </View>
        </TouchableOpacity>
    );
  };


   return (
    <View style={styles.maincontainer}>
      <View style={{marginTop: 25}}>
        <Text style={{fontSize: 18, color: 'black', padding: 10}}>
          Select the payment method you want to use.
        </Text>
      </View>

      <FlatList
        data={paymentMethod}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default Payment

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  view1:{
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    elevation: 10,
    width: '90%',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  view2:{
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  text:{
    marginHorizontal: 20,
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  }
})