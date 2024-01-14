import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Splash from '../../screen/Splash';
import Registration from '../../screen/Registration';
import Login from '../../screen/Login';
import DrawerNavigation from '../drawer/DrawerNavigation';
import BottomTabNavigation from '../bottom/BottomTabNavigation';
import Faq from '../../screen/Faq';
import PrivacyPolicy from '../../screen/PrivacyPolicy';
import Notification from '../../screen/Notification';
import Language from '../../screen/Language';
import MainScreen from '../../screen/premium/MainScreen';
import Payment from '../../screen/premium/Payment';
import ReviewSummary from '../../screen/premium/ReviewSummary';
import Player from '../../screen/Player';

const stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
      <stack.Screen name='Registration' component={Registration} options={{headerShown:false}}/>
      <stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
      <stack.Screen name='Drawer' component={DrawerNavigation} options={{headerShown:false}}/>
      <stack.Screen name='Bottom' component={BottomTabNavigation} options={{headerShown:false}}/>
      <stack.Screen name='FAQ' component={Faq}/>
      <stack.Screen name='Privacy Policy' component={PrivacyPolicy}/>
      <stack.Screen name='Notification' component={Notification}/>
      <stack.Screen name='Language' component={Language}/>
      <stack.Screen name='Main Screen' component={MainScreen}/>
      <stack.Screen name='Payment' component={Payment}/>
      <stack.Screen name='Payment Review' component={ReviewSummary}/>
      <stack.Screen name='Player' component={Player} options={{headerShown:false}}/>
    </stack.Navigator>

  )
}

export default StackNavigation

const styles = StyleSheet.create({})