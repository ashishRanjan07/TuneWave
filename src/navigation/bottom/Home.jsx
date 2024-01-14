import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Songs from '../drawer/Songs';
import Artist from '../drawer/Artist';
import Albums from '../drawer/Albums';
import Folder from '../drawer/Folder';


const TopBar = createMaterialTopTabNavigator();

const Home = () => {
  return (
    <View style={styles.mainContainer}>
     <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
      <Image source={require('../../../assets/images/logo.png')} resizeMode='contain' style={{height:75,width:100,marginStart:15}}/>
      <Text style={{fontSize:24,fontWeight:'700',color:'orange'}}>Tune Wave</Text>
      <Ionicons name="search" size={35} color="black" style={{marginHorizontal:25}} />
     </View>

      <TopBar.Navigator
        scrollEnabled={true} 
        screenOptions={{
          tabBarScrollEnabled:true,
          tabBarLabelStyle:{
            fontSize:18,
            color:'orange',
          }
        }} 
      >
        <TopBar.Screen name="Songs" component={Songs} />
        <TopBar.Screen name="Artists" component={Artist} />
        <TopBar.Screen name="Albums" component={Albums} />
        <TopBar.Screen name="Folder" component={Folder} />
      </TopBar.Navigator>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  }
})