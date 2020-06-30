/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Image} from 'react-native';
import SplashScreen from './screens/SplashScreen'
import Login from './screens/Login'
import Register from './screens/Register'
import Home from './screens/Home'
import Biocide from './screens/Biocide'
import Stock from './screens/Stock'
import Notification from './screens/Notification'
import addBiocide from './screens/addBiocide'
import editBiocide from './screens/editBiocide'
import addStock from './screens/addStock'


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const AuthStack = createStackNavigator();


function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator  
          initialRouteName='splashscreen'>
            
            <Stack.Screen
          name='splashscreen'
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Login'
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Register'
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Home'
          component={tabnavigator}
          options={{headerShown: false, headerLeft: null}}
        />
        <Stack.Screen
          name='addBiocide'
          component={addBiocide}
        />
         <Stack.Screen
          name='editBiocide'
          component={editBiocide}
        />
        <Stack.Screen
          name='addStock'
          component={addStock}
        />
      </Stack.Navigator>
        
    </NavigationContainer>
  )
}

function tabnavigator(){
    return(
      
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}  
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: () => 
              <Image source={require('./assets/images/home.png')} style={{width:24,height:24}}/>,
           }}/>
            <Tab.Screen name="Biocide" component={Biocide}
            options={{
              tabBarIcon: () => 
              <Image source={require('./assets/images/biocide.png')} style={{width:24,height:24}}/>,
           }} />
            <Tab.Screen name="Stock" component={Stock} 
            options={{
              
              tabBarIcon: () => 
              <Image source={require('./assets/images/stock.png')} style={{width:24,height:24}}/>,
           }}/>
            <Tab.Screen name="Notif" component={Notification} 
            options={{
              tabBarIcon: () => 
              <Image source={require('./assets/images/notif.png')} style={{width:24,height:24}}/>,
           }}/>
        </Tab.Navigator>
    )
        
}



export default MainStackNavigator