import {StyleSheet, Text, View,FlatList} from 'react-native';
import React from 'react';

const PrivacyPolicy = () => {

  const ppdata = [
    {
      id: 1,
      topic: 'Privacy Policy',
      description:
        'This privacy policy governs the use of the Offline Music Player application Tune Wave developed by Ashish Ranjan. The Application is designed to play music files stored on the users device without requiring an internet connection.',
    },
    {
      id: 2,
      topic: 'Information Collection and Use',
      description:
        'The Application does not collect any personal information from users. The Application does not require access to any device features or data, including but not limited to location, contacts, or media files.',
    },
    {
      id: 3,
      topic: 'Information Sharing',
      description: 'The Application does not share any user information with third parties.',
    },
    {
      id: 4,
      topic: 'Security',
      description: 'The Application is designed to operate entirely offline and does not transmit any user data over the internet. The Application does not use any third-party services or libraries that may compromise user privacy.',
    },
    {
      id: 5,
      topic: 'Changes to this Privacy Policy',
      description: 'We reserve the right to modify this privacy policy at any time. Changes to this policy will be reflected in the updated version of the Application.',
    },
    {
      id: 6,
      topic: 'Contact Us',
      description: 'If you have any questions or concerns about this privacy policy, please contact us at aviashishranjan@gmail.com.',
    },
  ];

  const renderItem = ({item}) => {
    return(
        <View>
            <Text style={{fontWeight:'bold',fontSize:24,color:'black',padding:10,}}>{item.topic}</Text>
            <Text style={{padding:10,fontSize:18,color:'gray',textAlign:'justify',width:'95%',alignSelf:'center'}}>{item.description}</Text>
        </View>
    )
  }

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
    <FlatList showsVerticalScrollIndicator={false} data={ppdata} renderItem={renderItem} keyExtractor={(item) => item.id}/>
    </View>
  );
}

export default PrivacyPolicy

const styles = StyleSheet.create({})