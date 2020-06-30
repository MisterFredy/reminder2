import React, { Component } from 'react';
import {SafeAreaView,ScrollView,View,Text,StatusBar,Image,AsyncStorage,TextInput,TouchableOpacity,ImageBackground,BackHandler} from 'react-native';
import { Header,LearnMoreLinks,Colors,DebugInstructions,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import css from '../assets/stylesheet/styles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class Home extends Component{

    constructor(props) {
                 super(props)
                this.state = {
                 username: "",
                 refreshing:false,
                };
        }

     componentDidMount(){
         BackHandler.removeEventListener(
            'hardwareBackPress',
            true
            );
    }
    
    

     login({ navigation }){
            return(
            <View style={css.backgroundWhite}>
                    <View style={css.row}>
                        <View style={css.col,{flex:1}}>
                            <Text style={{marginLeft:30,marginTop:50,fontSize:18, fontWeight: "bold"}}>Hey Fredy</Text>
                            <Text style={{marginLeft:30,marginTop:5,fontSize:18, fontWeight: "normal"}}>it's last activites</Text>
                        </View>
                         <Image source={require('../assets/images/user.png')} style={{marginTop:50,width:64,height:64,marginRight:20}}/>
                    </View>
                    {/*kotakan  */}
                    <View style={css.row}>
                    <TouchableOpacity 
                                    onPress={() => navigation.navigate('addStock')}>
                    <View style={{marginTop:30,marginLeft:20,width:160,height:180,backgroundColor:'#45046a',borderRadius:15}}>
                        <Image source={require('../assets/images/stock.png')} style={{marginTop:20,width:96,height:96,marginLeft:30}}/>
                        <Text style={{marginTop:10,marginLeft:30,fontSize:18,color:'white',fontWeight:'bold'}}>
                            Input Stock
                        </Text>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                                    onPress={() => navigation.navigate('addBiocide')}>
                    <View style={{marginTop:30,marginLeft:10,width:160,height:160,backgroundColor:'#b5076b',borderRadius:15}}>
                    <Image source={require('../assets/images/biocide.png')} style={{marginTop:20,width:96,height:96,marginLeft:30}}/>
                        <Text style={{marginTop:5,marginLeft:25,fontSize:18,color:'white'}}>
                            Input Biocide
                        </Text>
                    </View>
                    </TouchableOpacity>
                    {/* end kotakan */}
                    </View>

                    <View style={{marginTop:30,marginLeft:20,backgroundColor:'#f1ebbb',marginRight:20,borderRadius:5,width:150,height:40}}>
                        <Text style={{marginTop:6,marginLeft:15,fontSize:18,color:'#45046a',fontWeight:"bold"}}>Stock Menipis</Text>
                    </View>
                    
                    <View style={[css.row,{marginLeft:10,padding:10}]}>
                        <Text style={{flex:3,fontSize:16,fontWeight:"bold"}}>Nama</Text>
                        <Text style={{flex:1,fontSize:16,fontWeight:"bold"}}>Stock</Text>
                        <Text style={{flex:1,fontSize:16,fontWeight:"bold"}}>Minimum</Text>
                    </View>
                     <View style={[css.row,{marginLeft:10,padding:10}]}>
                        <Text style={{flex:3,fontSize:16}}>Algacide</Text>
                        <Text style={{flex:1,fontSize:16}}>10</Text>
                        <Text style={{flex:1,fontSize:16}}>10</Text>
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