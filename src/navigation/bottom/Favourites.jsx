import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import { Ionicons,FontAwesome,Entypo,MaterialIcons,Feather } from '@expo/vector-icons';
import FavoritesData from '../../../assets/json/Favorites.json'

const Favourites = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isFavourites, setIsFavourites] = useState(true);

  const openModal = item => {
    setSelectedItem(item);
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);
    setSelectedItem(null);
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.renderView}>
        <View style={styles.view3}>
          <Image source={{uri: item.image}} style={styles.renderImage} />
          <View style={styles.view4}>
            <Text style={styles.text3}>{item.name}</Text>
            <Text style={styles.text4}>{item.singer}</Text>
          </View>
          <Ionicons
            name="play-circle-sharp"
            size={30}
            color="#ff9940"
            style={{marginHorizontal: 10}}
          />
          <TouchableOpacity onPress={() => openModal(item)}>
            <Entypo name="dots-three-vertical" size={30} color="#000000" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderModalContent = () => {
    if (!selectedItem) {
      return <View style={styles.modalContent} />;
    }
    return (
      <View style={styles.modalContent} key={selectedItem.id}>
        <View style={[styles.view3, {gap: 10}]}>
          <Image
            source={{uri: selectedItem.image}}
            style={styles.renderImage}
          />
          <View style={styles.view4}>
            <Text style={styles.text3}>{selectedItem.name}</Text>
            <Text style={styles.text4}>{selectedItem.singer}</Text>
          </View>
          <TouchableOpacity onPress={() => setIsFavourites(!isFavourites)}>
            <MaterialIcons
              name={isFavourites ? 'favorite' : 'favorite-border'}
              size={35}
              color="#ff9940"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.seprateLine} />
        <View style={styles.view5}>
          <View style={styles.view6}>
            <Feather name="arrow-right-circle" size={25} color="#000000" />
            <Text style={styles.text5}>Play Next</Text>
          </View>
          <View style={styles.view6}>
            <MaterialIcons name="queue-music" size={25} color="#000000" />
            <Text style={styles.text5}>Add to Playing Queue</Text>
          </View>
          <View style={styles.view6}>
            <MaterialIcons name="add-circle-outline" size={25} color="#000000" />
            <Text style={styles.text5}>Add to Playlist</Text>
          </View>
          <View style={styles.view6}>
            <Feather name="play-circle" size={25} color="#000000" />
            <Text style={styles.text5}>Go to Album</Text>
          </View>
          <View style={styles.view6}>
            <Feather name="user" size={25} color="#000000" />
            <Text style={styles.text5}>Go to Artist</Text>
          </View>
          <View style={styles.view6}>
            <Feather name="info" size={25} color="#000000" />
            <Text style={styles.text5}>Details</Text>
          </View>
          <View style={styles.view6}>
            <Feather name="phone-call" size={25} color="#000000" />
            <Text style={styles.text5}>Set as Ringtone</Text>
          </View>
          <View style={styles.view6}>
            <Entypo name="block" size={25} color="#000000" />
            <Text style={styles.text5}>Add as Blacklist</Text>
          </View>
          <View style={styles.view6}>
            <Feather name="share" size={25} color="#000000" />
            <Text style={styles.text5}>Share</Text>
          </View>
          <View style={styles.view6}>
            <Feather name="delete" size={25} color="#000000" />
            <Text style={styles.text5}>Delete from Device</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      {/* Header */}
      <View style={styles.view1}>
        <Image
          source={require('../../../assets/images/logo.png')}
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={styles.headerText}>Favourites</Text>
        <Ionicons
          name="search"
          size={35}
          color="black"
          style={{marginHorizontal: 25}}
        />
      </View>

      {/* Button */}
      <View style={styles.buttonHolder}>
        <TouchableOpacity style={styles.touchableOpacityStyle}>
          <Ionicons name="shuffle" size={24} color="white" />
          <Text style={styles.text}>Shuffle</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.touchableOpacityStyle, {backgroundColor: '#fff3e8'}]}>
          <Ionicons name="play-circle-sharp" size={24} color="#ff9940" />
          <Text style={[styles.text, {color: '#ff9940'}]}>Play</Text>
        </TouchableOpacity>
      </View>

      {/* Song List no  */}
      <View style={styles.buttonHolder}>
        <View style={styles.view2}>
          <Text style={styles.text2}>175 favorites</Text>
        </View>

        <TouchableOpacity style={styles.touch2}>
          <Text style={[styles.text2, {color: '#ff9940'}]}>Date Added</Text>
          <FontAwesome name="sort" size={24} color="#ff9940" />
        </TouchableOpacity>
      </View>

      {/* List of Dummy Songs */}
      <View style={{flex: 1, alignSelf:'center',alignItems:'center'}}>
        <FlatList showsVerticalScrollIndicator={false}
          data={FavoritesData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>

      <Modal
        isVisible={isVisible}
        onBackdropPress={closeModal}
        style={styles.modal}
        backdropOpacity={0.7}>
        {renderModalContent()}
      </Modal>
    </View>
  );
}

export default Favourites

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  touchableOpacityStyle: {
    flexDirection: 'row',
    backgroundColor: '#ff9940',
    width: '45%',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    gap: 10,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
  },
  buttonHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    marginVertical: 15,
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
  renderView: {
    padding: 10,
    width: '90%',
    alignSelf: 'center',
  },
  view3: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  renderImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  view4: {
    gap: 5,
    width: '50%',
    justifyContent: 'center',
    marginStart: 15,
    marginEnd: 10,
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
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  seprateLine: {
    height: 0.7,
    backgroundColor: 'gray',
    width: '90%',
    marginVertical: 10,
  },
  view5: {
    width: '100%',
    alignSelf: 'center',
    padding: 10,
    gap: 25,
  },
  view6: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  text5: {
    fontSize: 18,
    color: '#000000',
    fontWeight: '600',
  },

})