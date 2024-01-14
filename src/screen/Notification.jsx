import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';


const Notification = () => {
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={{marginVertical: 10, marginHorizontal: 10}}>
      <View style={styles.seprateLine} />
        <View
          style={styles.viewHolder}>
          <View style={styles.view1}>
            <Text style={styles.header}>
              New Music
            </Text>
            <Text style={styles.subHeader}>
              Push
            </Text>
          </View>
          <TouchableOpacity>
            <AntDesign name="rightcircleo" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.seprateLine} />
        <View
          style={styles.viewHolder}>
          <View style={{gap: 5, width: '80%'}}>
            <Text style={styles.header}>
              Playlist Updates
            </Text>
            <Text style={styles.subHeader}>
              Push, Email
            </Text>
          </View>
          <TouchableOpacity>
            <AntDesign name="rightcircleo" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.seprateLine} />


        <View
          style={styles.viewHolder}>
          <View style={{gap: 5, width: '80%'}}>
            <Text style={styles.header}>
              Artist Updates
            </Text>
            <Text style={styles.subHeader}>
              Push,Email
            </Text>
          </View>
          <TouchableOpacity>
            <AntDesign name="rightcircleo" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.seprateLine} />


        <View
          style={styles.viewHolder}>
          <View style={{gap: 5, width: '80%'}}>
            <Text style={styles.header}>
              New Music
            </Text>
            <Text style={styles.subHeader}>
              Push
            </Text>
          </View>
          <TouchableOpacity>
            <AntDesign name="rightcircleo" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.seprateLine} />

        <View
          style={styles.viewHolder}>
          <View style={{gap: 5, width: '80%'}}>
            <Text style={styles.header}>
              Music Offers
            </Text>
            <Text style={styles.subHeader}>
              Push, Email
            </Text>
          </View>
          <TouchableOpacity>
            <AntDesign name="rightcircleo" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.seprateLine} />


        <View
          style={styles.viewHolder}>
          <View style={{gap: 5, width: '80%'}}>
            <Text style={styles.header}>
              Payment & Subscriptions
            </Text>
            <Text style={styles.subHeader}>
              Push, Email
            </Text>
          </View>
          <TouchableOpacity>
            <AntDesign name="rightcircleo" size={30} color="black" />
          </TouchableOpacity>
        </View>
 <View style={styles.seprateLine} />

        <View
          style={styles.viewHolder}>
          <View style={{gap: 5, width: '80%'}}>
            <Text style={styles.header}>
              New Features
            </Text>
            <Text style={styles.subHeader}>
              Push
            </Text>
          </View>
          <TouchableOpacity>
            <AntDesign name="rightcircleo" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.seprateLine} />


        <View
          style={styles.viewHolder}>
          <View style={{gap: 5, width: '80%'}}>
            <Text style={styles.header}>
              Security
            </Text>
            <Text style={styles.subHeader}>
              Push, Email
            </Text>
          </View>
          <TouchableOpacity>
            <AntDesign name="rightcircleo" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.seprateLine} />

      </View>
    </ScrollView>
  );
};

export default Notification

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    height: '100%',
  },
  seprateLine: {
    height: 0.7,
    backgroundColor: 'gray',
  },
  viewHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  view1: {
    gap: 5,
    width: '80%'
  },
  header: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black'
  },
  subHeader: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black'
  }
})