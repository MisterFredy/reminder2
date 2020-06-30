import React, { Component  } from 'react';
import {SafeAreaView,ScrollView,View,Text,StatusBar,Image,AsyncStorage,TextInput,TouchableOpacity,ImageBackground,BackHandler,ToastAndroid,Alert,Picker} from 'react-native';
import { Header,LearnMoreLinks,Colors,DebugInstructions,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import css from '../assets/stylesheet/styles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Api } from '../helper/api';

const api = new Api();

export default class addStock extends Component{

     constructor(props) {
                 super(props)
                this.state = {
                 selectedValue : 'selected value',
                 setSelectedValue :'',
                 Biocides: [],
                 refreshing:false,
                 isLoading: true,
                 input_stock:0
                };
                this.arrayholder = [];
                this.GetBiocide = this.GetBiocide.bind(this)
        }
    
     componentDidMount(){
             this.GetBiocide();
    }


    

    async  GetBiocide(){
       let api = new Api();
        await api.create();
        let client = api.getClient();
        let { Biocides } = this.state;
        let url = '/master_biocidies'
       return client.get(url).then((response)=>{
              
            // console.log('refreshing Course Detail: '+url,response.data);
            let { Biocides } = this.state
            this.setState({Biocides: response.data});
               
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


    async TambahStock(){
        let api = new Api();
        await api.create();
        let client = api.getClient();
        let { Biocides } = this.state;
        let url = '/Stock_biocidies'
       return client.post(url,{
               biocide: this.state.selectedValue,
               input_stock: this.state.input_stock,
       }).then((response)=>{
            console.log(response.data)
            Alert.alert('','sukses tambah stock')
            this.props.navigation.navigate('Stock');
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
    
    

     addStock({ navigation }){
            
         
            return(
            <>
                <View style={[css.middleItemCenter,{backgroundColor:'#fff'}]}>
                    <Picker
                        selectedValue={this.state.selectedValue}
                        style={{ height: 50, width: 300 }}
                        onValueChange={(itemValue, itemIndex) => this.setState({selectedValue : itemValue})}
                    >
                         {
                             this.state.Biocides.map( (v)=>{
                                return <Picker.Item label={v.nama} value={v.id} />
                                })
                         } 
                    </Picker>
                    <View>
                    <TextInput
                            style={[css.colorBlue,css.borderbottom,{marginHorizontal:50,width:300,marginTop:30,paddingLeft:10,fontFamily:'Montserrat-SemiBold',borderBottomColor: '#006680',}]}
                            placeholder="Input Stock"
                            placeholderTextColor="#006680"
                            keyboardType="numeric"
                             onChangeText={(text)=> this.setState({input_stock:text})}
                                    value={this.state.input_stock}  
                           
                    />
                    </View>

                    <View style={[{marginTop:60,marginHorizontal:80}]}>
                            <TouchableOpacity style={{backgroundColor:'#006680',width:240,height:48,borderRadius:30}} onPress={() => this.TambahStock()}>
                                <Text style={[css.colorwhite,
                                  css.textcenter,
                                  {
                                      fontSize:20,
                                      fontFamily:'Montserrat-SemiBold',
                                      marginTop:10
                                  }]}> Tambah Stock</Text>
                            </TouchableOpacity>
                    </View>
                </View>
              </>
            
        )
    }


    render(){
        return(
            this.addStock(this.props)
        )
    }

}