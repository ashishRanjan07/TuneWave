import {
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
} from 'react-native'
import React, {useState} from 'react';
import { Ionicons } from '@expo/vector-icons';

const faqData = [
  {
    question: 'How do I create a playlist?',
    answer:
      'To create a playlist, go to the "Playlists" section, tap the "Create Playlist" button, give your playlist a name, and then start adding songs to it.',
  },
  {
    question: 'How can I add songs to my library?',
    answer:
      'You can add songs to your library by tapping the "Add to Library" button when listening to a song or by going to the songs details and adding it from there.',
  },
  {
    question: 'How do I search for music?',
    answer:
      'You can search for music by using the search bar at the top of the app. Just enter the name of the song, artist, or album you are looking for, and the results will be displayed below.',
  },
  {
    question: 'How can I download songs for offline listening?',
    answer:
      'To download songs for offline listening, go to the songs details and tap the "Download" button. You can access your downloaded songs in the "Downloads" section.',
  },
  {
    question: 'How do I change my profile picture?',
    answer:
      'To change your profile picture, go to your profile, tap the profile picture, and select a new image from your device.',
  },
];


const Faq = () => {
  const [searchText, setSearchText] = useState('');
  const filteredFAQs = faqData.filter(
    item =>
      item.question.toLowerCase().includes(searchText.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchText.toLowerCase()),
  );


  return (
    <View style={styles.maincontainer}>
      {/* <StatusBar animated={true} backgroundColor="#dc8d26" /> */}
      {/* Search Bar */}
      <View style={styles.searchView}>
        <Ionicons name="search" size={24} color="black" style={styles.icon} />
        <TextInput
          style={{width: '100%'}}
          placeholderTextColor={'black'}
          placeholder="Search your Faq..."
          value={searchText}
          onChangeText={text => setSearchText(text)}
        />
      </View>
      {/* Horizontal Line */}
      <View style={styles.line} />
      {/* Flat list question answer */}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredFAQs}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.renderView}>
            <Text style={styles.question}>{item.question}</Text>
            <Text style={styles.answer}>{item.answer}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default Faq

const styles = StyleSheet.create({
  maincontainer: {
    // backgroundColor: '#dc8d26',
    flex: 1,
  },
  searchView: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 15,
    width: '80%',
    alignSelf: 'center',
    marginVertical: 25,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  icon: {
    marginHorizontal: 15,
    width: 25,
  },
  line: {
    borderWidth: 1,
    marginBottom: 20,
    borderColor: 'white',
  },
  renderView: {
    borderWidth: 2,
    borderColor: 'white',
    gap: 10,
    marginBottom: 15,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  question: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    padding: 10,
    paddingBottom: 0,
    fontSize: 20,
  },
  answer: {
    margin:10,
    textAlign:'center',
    fontSize: 18,
    color: 'black',
  },
})