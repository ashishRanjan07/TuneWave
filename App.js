import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Splash from './src/screen/Splash'
import StackNavigation from './src/navigation/stack/StackNavigation'
import AudioProvider from './src/context/AudioProvider'
import Player from './src/screen/Player'

const App = () => {
  return (
    <AudioProvider>
  <NavigationContainer>
    <StackNavigation/>
  </NavigationContainer>
  </AudioProvider>
  )
}

export default App

const styles = StyleSheet.create({})