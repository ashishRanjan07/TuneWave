import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';

const Language = () => {
  const [selected, setSelected] = useState(false);
  const GeneralLanguages = [
    {
      id: 1,
      name: 'English',
      code: '(en)',
    },
    {id: 2, name: 'Spanish', code: '(es)'},
    {id: 3, name: 'French', code: '(fr)'},
    {id: 4, name: 'German', code: '(de)'},
    {id: 5, name: 'Chinese', code: '(zh)'},
    {id: 6, name: 'Japanese', code: '(ja)'},
    {id: 7, name: 'Russian', code: '(ru)'},
    {id: 8, name: 'Arabic', code: '(ar)'},
    {id: 9, name: 'Hindi', code: '(hi)'},
    {id: 10, name: 'Portuguese', code: '(pt)'},
  ];

  const SuggestedLanguage = [
    {
      id: 1,
      name: 'English',
      code: '(US)',
    },
    {
      id: 2,
      name: 'English',
      code: '(UK)',
    },
  ];
  
  const renderSuggestedItem = ({item}) => {
    return (
      <View style={styles.languageholder}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.languageText}>
            {item.name}
            {' ' + item.code}
          </Text>
          <TouchableOpacity onPress={() => setSelected(!selected)}>
            {selected ? (
              <FontAwesome
                name="circle"
                size={25}
                color="orange"
                style={{marginHorizontal: 10}}
              />
            ) : (
              <FontAwesome
                name="circle-o"
                size={25}
                color="orange"
                style={{marginHorizontal: 10}}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderGeneralItem = ({item}) => {
    return (
        <View style={styles.languageholder}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.languageText}>
            {item.name}
            {' ' + item.code}
          </Text>
          <TouchableOpacity onPress={() => setSelected(!selected)}>
            {selected ? (
              <FontAwesome
                name="circle"
                size={25}
                color="orange"
                style={{marginHorizontal: 10}}
              />
            ) : (
              <FontAwesome
                name="circle-o"
                size={25}
                color="orange"
                style={{marginHorizontal: 10}}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.mainContainer}>
      <View style={{marginVertical: 10, marginHorizontal: 10}}>
        <Text style={styles.text}>Suggested</Text>
        <View style={{marginVertical: 10}}>
          <FlatList
            data={SuggestedLanguage}
            keyExtractor={item => item.id}
            renderItem={renderSuggestedItem}
          />
        </View>
        <View style={styles.seprateLine} />
        <View>
          <Text style={styles.text}>Others</Text>
          <View style={{marginVertical: 10}}>
            <FlatList
              data={GeneralLanguages}
              keyExtractor={item => item.id}
              renderItem={renderGeneralItem}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export default Language

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    backgroundColor: 'white',
  },
  seprateLine: {
    height: 0.7,
    backgroundColor: 'gray',
    marginBottom: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  languageText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black'
  },
  languageholder: {
    marginVertical: 10,
    padding: 5
  },
})