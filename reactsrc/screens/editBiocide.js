import React, { Component } from 'react';
import {SafeAreaView,ScrollView,View,Text,StatusBar,Image,AsyncStorage,TextInput,TouchableOpacity,ImageBackground,BackHandler} from 'react-native';
import { Header,LearnMoreLinks,Colors,DebugInstructions,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import css from '../assets/stylesheet/styles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class editBiocide extends Component{

        constructor(props) {
                 super(props)
   
                this.state = {
                 categories: []
                };
        }

     componentDidMount(){
         BackHandler.removeEventListener(
            'hardwareBackPress',
            true
            );
    }
    
    

     editbiocide({ navigation }){
            return(
            <>
                    <TextInput
                                    style={[css.colorBlue,{paddingLeft:10,fontFamily:'Montserrat-SemiBold',borderBottomColor: '#006680',}]}
                                    placeholder="Nama"
                                    placeholderTextColor="#006680"  
                            />
                    <TextInput
                            style={[css.colorBlue,{paddingLeft:10,fontFamily:'Montserrat-SemiBold',borderBottomColor: '#006680',}]}
                            placeholder="minimum stock"
                            placeholderTextColor="#006680"  
                    />
                    <TextInput
                            style={[css.colorBlue,{paddingLeft:10,fontFamily:'Montserrat-SemiBold',borderBottomColor: '#006680',}]}
                            placeholder="jenis"
                            placeholderTextColor="#006680"  
                    />
                    <TextInput
                            style={[css.colorBlue,{paddingLeft:10,fontFamily:'Montserrat-SemiBold',borderBottomColor: '#006680',}]}
                            placeholder="stock saat ini"
                            placeholderTextColor="#006680"  
                    />
              </>
            
        )
    }


    render(){
        return(
            this.editbiocide(this.props)
        )
    }

}