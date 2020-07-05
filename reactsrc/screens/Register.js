import React, { Component } from 'react';
import {SafeAreaView,ScrollView,View,ToastAndroid,Text,StatusBar,Image,AsyncStorage,TextInput,TouchableOpacity,ImageBackground,Alert,Keyboard,KeyboardAvoidingView,TouchableWithoutFeedback} from 'react-native';
import { Header,LearnMoreLinks,Colors,DebugInstructions,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import css from '../assets/stylesheet/styles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Api } from '../helper/api';
const api = new Api();

export default class Register extends Component{
    constructor(props){
   super(props);

   this.state = {
      email: "",
      password: "",
      username:"",
      phone:0,
   }
   
   this.registerApi = this.registerApi.bind(this)
}

     async registerApi(){
        this.setState({loading:true,})

        let api = new Api();
        await api.create();
        let client = api.getClient();

        const { email, username, password, password_confirmation,phone } = this.state

        client.post('/register',{
            email: email,
            name: username,
            password: password,
            phone: phone,
        }).then((response)=>{
            console.log('/user/register',response.data);
             //OK
                Alert.alert('','Register success')
                this.props.navigation.navigate('Login');
        }).catch((error) => {
            // console.log('register error', error.response)
            let {data} = error.response;
            Alert.alert('',JSON.stringify(data.errors))
            //ToastAndroid.show(JSON.stringify(data.errors),ToastAndroid.SHORT)
            //this.setState({ loading:false, message:data.message, errors:{...data.errors} })
        })
        
    }

    Register({ navigation }){
            return(
                 <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={{flex:1}}
                >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={css.backgroundDarkBlue}>
                <View style={css.col}>
                    <View style={[css.aligncenter,{marginTop:80}]}>
                        <Text style={[css.colorwhite, {alignItems: 'center',fontSize:60,fontFamily:'Montserrat-Bold'}]}>
                            Register
                        </Text> 
                    </View>

                    <View style={{marginHorizontal:50,marginTop:80}}>
                        <TextInput
                                style={[css.colorwhite,css.borderbottom,{fontFamily:'Montserrat-SemiBold'}]}
                                placeholder="Username"
                                placeholderTextColor="#fff"
                                value={this.state.username}
                                onChangeText={(text)=> this.setState({username:text})}
                            />
                        <TextInput
                            style={[css.colorwhite,css.borderbottom,{fontFamily:'Montserrat-SemiBold',marginTop:10}]}
                            placeholder="Email"
                            placeholderTextColor="#fff"
                            value={this.state.email}
                                onChangeText={(text)=> this.setState({email:text})}
                        />
                        <TextInput
                            style={[css.colorwhite,css.borderbottom,{fontFamily:'Montserrat-SemiBold',marginTop:10}]}
                            placeholder="Password"
                            placeholderTextColor="#fff"  
                            secureTextEntry={true}
                            value={this.state.password}
                             onChangeText={(text)=> this.setState({password:text})}
                        />
                        <TextInput
                            style={[css.colorwhite,css.borderbottom,{fontFamily:'Montserrat-SemiBold',marginTop:10}]}
                            placeholder="Confirm Password"
                            placeholderTextColor="#fff"  
                            secureTextEntry={true}
                        />
                        <TextInput
                            style={[css.colorwhite,css.borderbottom,{fontFamily:'Montserrat-SemiBold',marginTop:10}]}
                            placeholder="telephone (Gunakan 62 bukan 0 tanpa +)"
                            placeholderTextColor="#fff"  
                            keyboardType={'numeric'}
                             value={this.state.phone}
                             onChangeText={(text)=> this.setState({phone:text})}
                        />
                    </View>
                    
                    <View style={{marginTop:60,marginHorizontal:80}}>
                        <TouchableOpacity style={{backgroundColor:'#fff',width:240,height:48,borderRadius:30}} onPress={() => this.registerApi()}>
                                <Text style={[css.colorBlue,
                                  css.textcenter,
                                  {
                                      fontSize:20,
                                      fontFamily:'Montserrat-SemiBold',
                                      marginTop:10
                                  }]}> Create Account</Text>
                            </TouchableOpacity>
                    </View>
            </View>
                
            </View>
            </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        )
    }

    render(){
        return(
            this.Register(this.props)
        )
    }

}