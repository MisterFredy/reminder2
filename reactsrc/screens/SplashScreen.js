/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  AsyncStorage,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import css from '../assets/stylesheet/styles';
import 'react-native-gesture-handler';


export default class SplashScreen extends Component{
    

    constructor(){
        super();
        this.state = {
        }
    }

    componentDidMount(){
         setTimeout(() => {
        this.checkUser()
         }, 2000)
    }


    checkUser = ()=>{
         AsyncStorage.getItem('user',(error,result)=>{
             let user = JSON.parse(result);
             if(error){
                 this.nextLogin();                
             }else if(user != null){
                 this.goToMain();
             }else{
              this.nextLogin();
             }
         });
        
    }


    render(){
        return(
            <View style={css.container}>
                    <View style={css.col}>
                         <Image source={require('../assets/images/Logo.png')} style={{width:140,height:128}} />
                    </View>
            </View>
        )
    }

    goToMain(){
        this.props.navigation.navigate('Home')
    }

    nextLogin(){
        this.props.navigation.navigate('Login')
    }
}
