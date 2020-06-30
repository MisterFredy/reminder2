import React, { Component } from 'react';
import {SafeAreaView,FlatList,View,Text,StatusBar,Image,AsyncStorage,TextInput,RefreshControl,TouchableOpacity,ImageBackground,BackHandler,ScrollView,ToastAndroid} from 'react-native';
import { Header,LearnMoreLinks,Colors,DebugInstructions,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import css from '../assets/stylesheet/styles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Api } from '../helper/api';

const api = new Api();

export default class Biocide extends Component{

    constructor(props) {
                 super(props)
   
                this.state = {
                 Biocides: [],
                 refreshing:false,
                 isLoading: true,
                 text:''
                };
                this.arrayholder = [];
                this.GetAPI = this.GetAPI.bind(this)
        }

     componentDidMount(){
             this.GetAPI();
    }


  async  GetAPI(){
       let api = new Api();
        await api.create();
        let client = api.getClient();
        let { Biocides } = this.state;
        let url = '/master_biocidies'
       return client.get(url).then((response)=>{
              
            // console.log('refreshing Course Detail: '+url,response.data);
            let { Biocides } = this.state
                this.setState({Biocides:response.data}, () => {
                    // search holder
                     this.arrayholder = response.data;
                    });
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
    
    

     Biocide({ navigation }){
            const {Biocides} = this.state;
         if(Biocides.length <= 0){
             return(
                        <View style={css.middleItemCenter}>
                            <View style={css.aligncenter}>
                            <Image source={require('../assets/images/empty.png')} />
                            <Text>"Data Biocide is empty"</Text>
                            
                            </View> 
                            <TouchableOpacity style={[css.floatingButton,{backgroundColor:'#d92027',marginBottom:20}]} 
                                    onPress={() => navigation.navigate('addBiocide')}>
                                <Image source={require('../assets/images/add.png')} style={{marginTop:8,marginLeft:8}} />
                            </TouchableOpacity>
                            </View>
             ) 
         }else{
             
            return(
             
                <>
                
            <View style={css.backgroundWhite}>
            <FlatList key="flatList"
                                    data={this.state.Biocides}
                                    ListHeaderComponent={() => (
                                        <>
                                         
                                       <View style={[css.row,{marginLeft:10,marginTop:20,padding:20,marginRight:10,backgroundColor:'#DCDCDC'}]}>
                                            <Text style={[{flex:4,fontSize:16,fontWeight:"bold"}]}>Nama</Text>
                                            <Text style={{flex:4,fontSize:16,fontWeight:"bold"}}>Jenis</Text>
                                            <Text style={{flex:4,fontSize:16,fontWeight:"bold",marginRight:10}}>Minimum</Text>
                                            <Text style={{flex:4,fontSize:16,fontWeight:"bold",marginRight:10}}>Stock sekarang</Text>
                                        </View>
                                        </>
                                    )}
                                    keyExtractor={(item, index) => (`${item}--${index}`)}
                                    refreshing={ this.state.refreshing }
                                    onRefresh={()=> this.GetAPI() }
                                    renderItem = {({ item, index }) => (
                                   <TouchableOpacity style={{borderColor:'#006680'}}>
                                        <View style={[css.row,{marginLeft:10,marginTop:20}]}>
                                            <Text style={{ flex:4,fontSize:16,fontWeight:"bold"}}>{item.nama}</Text>
                                            <Text style={{flex:4,fontSize:16,fontWeight:"bold"}}>{item.jenis}</Text>
                                            <Text style={{flex:4,fontSize:16,fontWeight:"bold"}}>{item.minimum_stock}</Text>
                                            <Text style={{flex:4,fontSize:16,fontWeight:"bold",marginRight:10}}>{item.stock}</Text>
                                        </View>
                                    </TouchableOpacity>
                                    )
                        } />

            
                <TouchableOpacity style={[css.floatingButton,{backgroundColor:'#d92027',marginBottom:20}]} 
                                    onPress={() => navigation.navigate('addBiocide')}>
                    <Image source={require('../assets/images/add.png')} style={{marginTop:8,marginLeft:8}} />
                </TouchableOpacity>
                </View>  
                </>
            )

            return listBiocides;
         } 
      }
            
            
           
           
        
           


    render(){
        return(
            this.Biocide(this.props)
        )
    }

}