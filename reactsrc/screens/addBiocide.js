import React, { Component } from 'react';
import {Alert,SafeAreaView,ScrollView,ActivityIndicator,View,Text,StatusBar,Image,AsyncStorage,TextInput,TouchableOpacity,ToastAndroid,ImageBackground,BackHandler} from 'react-native';
import { Header,LearnMoreLinks,Colors,DebugInstructions,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import css from '../assets/stylesheet/styles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Api } from '../helper/api';
const api = new Api();

export default class addBiocide extends Component{


    constructor(props){
   super(props);

   this.state = {
      nama: "",
      minimum_stock: "",
      jenis:"",
      stock:"",
      isLoading: false,
   }
   this.postAPI = this.postAPI.bind(this)
}

     componentDidMount(){
         BackHandler.removeEventListener(
            'hardwareBackPress',
            true
            );
    }


    async postAPI(){
        let isLoading = this.state;
        this.setState({isLoading:true});
        let api = new Api();
        await api.create();
        let client = api.getClient();
        let { Biocides } = this.state;
        let url = '/master_biocidies'
       return client.post(url,{
               nama: this.state.nama,
               minimum_stock: this.state.minimum_stock,
               jenis: this.state.jenis,
               stock: this.state.stock
       }).then((response)=>{
                Alert.alert('','Berhasil Tambah Biocide')
                this.setState({isLoading:false});
                this.props.navigation.navigate('Biocide');
        }).catch((error) => {
            const msg = error.message                
            // console.log(msg+url, error.message)
            if(Platform.OS=='android'){
                ToastAndroid.show(msg,ToastAndroid.SHORT)
            }else{
                Alert.alert('',msg)
            }
        })
    }
    
    

     addbiocide({ navigation }){
         const {isLoading} = this.state;
         if(isLoading){
              return(
                  <View style={css.middleItemCenter}>
                        <ActivityIndicator size="large" color="#0000ff" />
                 </View>
              )
          }else{
            return(
            <>
                    <TextInput
                                    style={[css.colorBlue,css.borderbottom,{marginHorizontal:50,width:300,fontFamily:'Montserrat-SemiBold',borderBottomColor: '#006680',marginTop:20}]}
                                    placeholder="Nama"
                                    placeholderTextColor="#006680"
                                    onChangeText={(text)=> this.setState({nama:text})}
                                    value={this.state.nama}  
                            />
                    <TextInput
                            style={[css.colorBlue,css.borderbottom,{marginHorizontal:50,width:300,marginTop:30,paddingLeft:10,fontFamily:'Montserrat-SemiBold',borderBottomColor: '#006680',}]}
                            placeholder="minimum stock"
                            placeholderTextColor="#006680"
                            onChangeText={(text)=> this.setState({minimum_stock:text})}
                                    value={this.state.minimum_stock}   
                    />
                    <TextInput
                            style={[css.colorBlue,css.borderbottom,{marginHorizontal:50,width:300,marginTop:30,paddingLeft:10,fontFamily:'Montserrat-SemiBold',borderBottomColor: '#006680',}]}
                            placeholder="jenis"
                            placeholderTextColor="#006680"
                            onChangeText={(text)=> this.setState({jenis:text})}
                                    value={this.state.jenis}   
                    />
                    <TextInput
                            style={[css.colorBlue,css.borderbottom,{marginHorizontal:50,marginTop:20,width:300,paddingLeft:10,fontFamily:'Montserrat-SemiBold',borderBottomColor: '#006680',}]}
                            placeholder="stock saat ini"
                            placeholderTextColor="#006680" 
                            onChangeText={(text)=> this.setState({stock:text})}
                                    value={this.state.stock}  
                    />

                    <View style={[{marginTop:60,marginHorizontal:80}]}>
                            <TouchableOpacity style={{backgroundColor:'#006680',width:240,height:48,borderRadius:30}} onPress={() => this.postAPI()}>
                                <Text style={[css.colorwhite,
                                  css.textcenter,
                                  {
                                      fontSize:20,
                                      fontFamily:'Montserrat-SemiBold',
                                      marginTop:10
                                  }]}> Tambah Biocide</Text>
                            </TouchableOpacity>
                    </View>
              </>
            
        )
          }
    }


    render(){
        return(
            this.addbiocide(this.props)
        )
    }

}