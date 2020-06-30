import React, { Component } from 'react';
import {SafeAreaView,ScrollView,View,Text,StatusBar,Image,AsyncStorage,TextInput,TouchableOpacity,ImageBackground,BackHandler,ToastAndroid } from 'react-native';
import { Header,LearnMoreLinks,Colors,DebugInstructions,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import css from '../assets/stylesheet/styles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Api } from '../helper/api';

const api = new Api();

export default class Login extends Component{
    
     constructor(props){
   super(props);

   this.state = {
      email: "",
      password: "",
   }
   this.loginApi = this.loginApi.bind(this)
}


        componentDidMount(){
         BackHandler.removeEventListener(
            'hardwareBackPress',
            true
            );
        }

        loginApi(){
           api.login({
            email: this.state.email,
            password: this.state.password
        }).then((response)=>{
            this.setState({loggingIn:false})
            
            console.log('/user/login',response.data);
            let data = response.data;
                //OK
                if(Platform.OS=='android'){
                    ToastAndroid.show("Login success!",ToastAndroid.SHORT)
                }else{
                    // Alert.alert('','Login success!')
                     console.log('Error save user data',error)
                }

                try{
                    let user = response.data
                    let token = user.api_token
                    // Remove Token
                    delete user.token
                    AsyncStorage.setItem('user',JSON.stringify(user));
                    AsyncStorage.setItem('api_token', token);
                    console.log('sukses input asyncstorage')
                    this.props.navigation.navigate('Home');
                    
                    
                }catch(error){
                    console.log('Error save user data',error)
                }

                

        }).catch((error) => {
            this.setState({loggingIn:false})
            console.log('login error',error)

            const { message } = error.response.data
            if(message){
                if(Platform.OS=='android'){
                    ToastAndroid.show(message,ToastAndroid.SHORT)
                }else{
                    Alert.alert('', message)
                }
            }else{
                if(Platform.OS=='android'){
                    ToastAndroid.show(error.response,ToastAndroid.SHORT)
                }else{
                    Alert.alert('', error.response)
                }
            }
        });
        }
    
     login({ navigation }){
            return(
            <View style={css.backgroundWhite}>
                <View style={css.col}>
                    <View style={[css.aligncenter, css.col ,{marginTop:80}]}>
                        
                        <Image source={require('../assets/images/Logo.png')} style={{width:100,height:90}}></Image>
                        <Text style={[css.colorBlue, {alignItems: 'center',fontSize:36,fontFamily:'Montserrat-Bold'}]}>
                                Reminder Biocide
                            </Text>
                    </View>

                    <View style={{marginHorizontal:50,marginTop:40}}>
                        <TextInput
                            style={[css.colorBlue,css.borderbottom,{fontFamily:'Montserrat-SemiBold',borderBottomColor: '#006680'}]}
                            placeholder="Email"
                            placeholderTextColor="#006680"
                             onChangeText={(text)=> this.setState({email:text})}
                            value={this.state.email}
                        />
                        <TextInput
                            style={[css.colorBlue,css.borderbottom,{marginTop:30,fontFamily:'Montserrat-SemiBold',borderBottomColor: '#006680',}]}
                            placeholder="Password"
                            placeholderTextColor="#006680"  
                            secureTextEntry={true}
                            value={this.state.password}
                            onChangeText={(text)=> this.setState({password:text})}
                        />
                    </View>
                    
                    <View style={[{marginTop:60,marginHorizontal:100}]}>
                            <TouchableOpacity style={{backgroundColor:'#006680',width:180,height:48,borderRadius:30}} onPress={() => this.loginApi()}>
                                <Text style={[css.colorwhite,
                                  css.textcenter,
                                  {
                                      fontSize:20,
                                      fontFamily:'Montserrat-SemiBold',
                                      marginTop:10
                                  }]}> Login</Text>
                            </TouchableOpacity>
                    </View>

                    <Text style={[css.colorBlue,css.textcenter,{fontSize:16,fontFamily:'Montserrat-Regular',marginTop:25}]}>or</Text>
                
                <TouchableOpacity >
                    <Text 
                        onPress={() => navigation.navigate('Register')}
                        style={[css.colorBlue,
                                  css.textcenter,
                                  {
                                      fontSize:20,
                                      fontFamily:'Montserrat-SemiBold',
                                      marginTop:25,
                                      marginHorizontal:91
                                  }]}>
                        Create new account
                    </Text>
                </TouchableOpacity>

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