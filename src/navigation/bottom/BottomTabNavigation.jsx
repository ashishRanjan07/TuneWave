import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Ionicons, AntDesign, Entypo,FontAwesome,Feather,MaterialIcons } from '@expo/vector-icons';
import Home from './Home';
import Setting from './Setting';
import Playlist from './Playlist';
import Favourites from './Favourites';
import Profile from './Profile';

const Tab = createMaterialBottomTabNavigator();
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Home} options={{
        tabBarIcon: ({ focused }) => {
          return focused ? <Entypo name="home" size={24} color="orange" /> : <AntDesign name="home" size={24} color="black" />
        }, headerShown: false
      }} />
      <Tab.Screen name='Favourites' component={Favourites} options={{
        tabBarIcon: ({ focused }) => {
          return focused ? <MaterialIcons name="favorite" size={24} color="orange" /> : <MaterialIcons name="favorite-border" size={24} color="black" />
        }, headerShown: false
      }} />
      <Tab.Screen name='Playlist' component={Playlist} options={{
        tabBarIcon: ({ focused }) => {
          return focused ? <MaterialIcons name="playlist-add" size={24} color="orange" />:<MaterialIcons name="playlist-add" size={24} color="black" />
        }, headerShown: false
      }} />
      <Tab.Screen name='Profile' component={Profile} options={{
        tabBarIcon: ({ focused }) => {
          return focused ? <FontAwesome name="user" size={24} color="orange" />:<Feather name="user" size={24} color="black" />
        }, headerShown: false
      }} />
      <Tab.Screen name='Setting' component={Setting} options={{
        tabBarIcon: ({ focused }) => {
          return focused ? <Ionicons name="settings" size={24} color="orange" />:<Ionicons name="settings-outline" size={24} color="black" />
        }, headerShown: false
      }} />


    </Tab.Navigator>
  )
}

export default BottomTabNavigation

