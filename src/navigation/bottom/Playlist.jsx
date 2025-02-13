import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  SafeAreaView,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Modal from 'react-native-modal';
import { Ionicons,Feather,FontAwesome,Entypo } from '@expo/vector-icons';
import PlaylistData from '../../../assets/json/PlaylistData.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AudioContext } from '../../context/AudioProvider';
const Playlist = () => {

 const context= useContext(AudioContext)
 const {playlist,addToPlayList,updateState} = context

  const [isVisible, setIsVisible] = useState(false);
  const [playListName, setPlayListName] = useState('');

  const openModal = item => {
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);
  };

  const createPlaylist=async(playListName)=>{
   const result = await AsyncStorage.getItem('Playlist');
   if(result !== null){
    const audios =[];
    if(addToPlayList){
      audios.push(addToPlayList);
    }
   const newList = {
    id:Date.now(),
    title:playListName,
    audios:audios
   }

   const updatedList = [...playlist,newList];
   updateState(context,{addToPlayList:null,playlist:updatedList});
   AsyncStorage.setItem('Playlist',JSON.stringify(updatedList))

   }
   closeModal()
    console.log(playListName)
  }

  const handleSubmit =()=>{
    if(!playListName.trim()){
     setIsVisible(!isVisible)
    }else{
     createPlaylist(playListName)
      setPlayListName('')
      setIsVisible(!isVisible)
    }
  }

  const renderModalContent = () => {
    return (
      <View style={styles.modalContent}>
        <Text style={styles.text1}>New Playlist</Text>
        <View style={styles.seprateLine} />
        <TextInput
          style={styles.textInput}
          placeholder="My Top 50 Songs"
          onChangeText={text => setPlayListName(text)}
          placeholderTextColor="black"
        />
        <View style={styles.seprateLine} />
        <View style={styles.view10}>
          <TouchableOpacity
            onPress={() => setIsVisible(!isVisible)}
            style={[styles.touch, {backgroundColor: '#fff3e8'}]}>
            <Text style={[styles.text7, {color: '#ff9940'}]}>Cancle</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSubmit}
            style={[styles.touch, {backgroundColor: '#ff9940'}]}>
            <Text style={styles.text7}>Create</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderPlaylist = ({item}) => {
    return (
      <View style={styles.view6}>
        <View style={styles.view7}>
          <Image source={{uri: item.image}} style={styles.renderImage} />
          <View style={styles.view9}>
            <Text style={styles.text3}>{item.name}</Text>
            <Text style={styles.text4}>{item.total}</Text>
          </View>
          <TouchableOpacity>
            <Entypo name="dots-three-vertical" size={30} color="#000000" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.mainContainer}>
      {/* Header  */}
        <SafeAreaView/>
      <View style={styles.view1}>
        <Image
          source={require('../../../assets/images/logo.png')}
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={styles.headerText}>Playlist</Text>
        <Ionicons
          name="search"
          size={35}
          color="black"
          style={{marginHorizontal: 25}}
        />
      </View>
      <View style={styles.seprateLine} />
      {/* Song List no  */}
      <View style={styles.buttonHolder}>
        <View style={styles.view2}>
          <Text style={styles.text2}>09 Playlists</Text>
        </View>

        <TouchableOpacity style={styles.touch2}>
          <Text style={[styles.text2, {color: '#ff9940'}]}>Recently Added</Text>
          <FontAwesome name="sort" size={24} color="#ff9940" />
        </TouchableOpacity>
      </View>
      <View style={styles.seprateLine} />
      {/* Add new Playlist */}
      <TouchableOpacity onPress={() => openModal()} style={styles.view8}>
        <View style={styles.view4}>
          <Feather name="plus" size={40} color="white" />
        </View>
        <View>
          <Text style={styles.text2}>Add New Playlist</Text>
        </View>
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        isVisible={isVisible}
        onBackdropPress={closeModal}
        style={styles.modal}
        backdropOpacity={0.7}>
        {renderModalContent()}
      </Modal>
      <View style={styles.seprateLine} />

      {/* Render Flatlist data */}
      <View style={{flex: 1, alignSelf: 'center', alignItems: 'center'}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={PlaylistData}
          renderItem={renderPlaylist}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

export default Playlist

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  view1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    height: 75,
    width: 100,
    marginStart: 15,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ff9940',
  },
  buttonHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    marginVertical: 15,
  },
  view2: {
    width: '40%',
    padding: 10,
    alignItems: 'center',
  },
  text2: {
    color: 'black',
    fontSize: 18,
    fontWeight: '800',
  },
  touch2: {
    width: '40%',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    gap: 15,
  },
  seprateLine: {
    height: 0.7,
    backgroundColor: 'gray',
  },
  view8: {
    justifyContent: 'center',
    marginVertical: 10,
    flexDirection: 'row',
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
    gap: 15,
  },
  view4: {
    backgroundColor: '#ff9940',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  renderView: {
    borderWidth: 2,
    padding: 5,
    width: '90%',
    alignSelf: 'center',
  },
  renderImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  text3: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  text4: {
    fontSize: 14,
    color: 'gray',
    fontWeight: '500',
  },
  modalContent: {
    height: 'auto',
    backgroundColor: 'white',
    borderRadius: 15,
  },
  view6: {
    padding: 10,
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  view7: {
    color: 'green',
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  view9: {width: '60%', gap: 10, marginHorizontal: 15},
  text1: {
    textAlign: 'center',
    padding: 15,
    fontSize: 18,
    fontWeight: '800',
    color: 'black',
  },
  textInput: {
    textAlign: 'center',
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
    padding: 10,
  },
  touch: {width: '40%', padding: 15, alignItems: 'center', borderRadius: 10},
  text7: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
  },
  view10: {
    flexDirection: 'row',
    marginVertical: 10,
    padding: 10,
    justifyContent: 'space-around',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
})