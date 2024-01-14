import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image
} from 'react-native';
import React,{useState} from 'react';
import { Entypo,FontAwesome5 } from '@expo/vector-icons';
import Modal from 'react-native-modal';

const ReviewSummary = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    navigation.navigate('Bottom')
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar
        animated={true}
        backgroundColor="white"
        barStyle="dark-content"
      />
      <View style={styles.backgroundView}>
        <FontAwesome5
          name="crown"
          color="white"
          size={50}
          style={styles.icon}
        />
        <Text style={styles.price}>Rs.1.00 /month</Text>
        <View style={styles.line} />
        <View style={styles.textholder}>
          <View style={styles.view1}>
            <Entypo name="check" color="white" size={24} />
            <Text style={styles.text}>Listening with better audio quality</Text>
          </View>
          <View style={styles.view1}>
            <Entypo name="check" color="white" size={24} />
            <Text style={styles.text}>Listening without restriction & ads</Text>
          </View>
          <View style={styles.view1}>
            <Entypo name="check" color="white" size={24} />
            <Text style={styles.text}>
              unlimited skips & shuffles play{'      '}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={styles.viewamount}>
        <View
          style={styles.texttype}>
          <Text>Amount</Text>
          <Text>1.00</Text>
        </View>
        <View
          style={styles.texttype}>
          <Text>Tax</Text>
          <Text>0.01</Text>
        </View>
        <View style={{borderWidth: 1, borderColor: 'gray'}} />
        <View
          style={styles.texttype}>
          <Text>Total</Text>
          <Text>1.01</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.touchbutton} onPress={()=>setModalVisible(!isModalVisible)} >
        <Text
          style={styles.btntext}>
          Continue
        </Text>
      </TouchableOpacity>
      <Modal isVisible={isModalVisible}>
        <View style={{ justifyContent:'center',alignItems:'center',backgroundColor:'white',padding:25,width:'90%',alignSelf:'center',borderRadius:20 }}>
          <Image source={require('../../../assets/images/cong.png')} resizeMode='cover' style={{height:220,width:250}}/>
          <Text style={{marginTop:-25,marginBottom:20,textAlign:'center',fontSize:16,fontWeight:'500'}}>You have successfully subscribed monthly premium Enjoy the benefits!</Text>
         <TouchableOpacity style={{width:'80%',alignSelf:'center',alignItems:'center',padding:10,borderRadius:10, backgroundColor: '#ff9940',}} onPress={toggleModal}>
          <Text style={{fontSize:16,fontWeight:'600',color:'white'}}>OK</Text>
         </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

export default ReviewSummary

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  backgroundView: {
    backgroundColor: '#ff9940',
    borderRadius: 35,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 25,
  },
  icon: {marginVertical: 15},
  price: {
    color: 'white',
    fontSize: 24,
    fontWeight: '800',
    marginVertical: 10,
  },
  textholder: {marginBottom: 15, gap: 15},

  line: {
    width: '90%',
    borderWidth: 1,
    marginBottom: 20,
    borderColor: 'white',
  },
  view1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: 25,
  },
  text: {color: 'white', fontSize: 18, fontWeight: '600'},
  touchbutton: {
    position: 'absolute',
    bottom: 10,
    borderRadius: 10,
    backgroundColor: '#ff9940',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ff9940',
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  btntext:{
    padding: 15,
    fontSize: 18,
    color: 'white',
    fontWeight: '800',
  },
  viewamount:{
    borderWidth: 2,
    borderRadius: 15,
    borderColor: 'white',
    backgroundColor: 'white',
    elevation: 10,
    width: '90%',
    alignSelf: 'center',
  },
  texttype:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  }
})