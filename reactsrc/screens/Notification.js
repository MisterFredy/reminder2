import React, { Component } from 'react';
import {SafeAreaView,ScrollView,View,Text,StatusBar,Image,AsyncStorage,TextInput,TouchableOpacity,ImageBackground,BackHandler} from 'react-native';
import { Header,LearnMoreLinks,Colors,DebugInstructions,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import css from '../assets/stylesheet/styles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class Notification extends Component{

     componentDidMount(){
         BackHandler.removeEventListener(
            'hardwareBackPress',
            true
            );
    }
    
    

     login({ navigation }){
            return(
            <View style={css.backgroundWhite}>
                <View style={css.middleItemCenter}>
                <View style={css.aligncenter}>
                   <Image source={require('../assets/images/nextupdate.png')} />
                    <Text>"this feature will be up to next update"</Text>
                </View>
            </View>
            </View>
        )
    }


    render(){
        return(
            this.login(this.props)
        )
    }

}