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
                 Biocides: [],
                 refreshing:false,
                 isLoading: true,
                };
                this.GetAPI = this.GetAPI.bind(this)
        }

     componentDidMount(){
         BackHandler.removeEventListener(
            'hardwareBackPress',
            true
            );
    }

    async  GetAPI(){
       let api = new Api();
        await api.create();
        let client = api.getClient();
        let { Biocides } = this.state;
        let url = '/reminder'
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

                    <View style={{marginTop:30,marginLeft:20,backgroundColor:'#f1ebbb',marginRight:20,borderRadius:5,width:200,height:40}}>
                        <Text style={{marginTop:6,marginLeft:15,fontSize:18,color:'#45046a',fontWeight:"bold"}}>Stock Menipis</Text>
                    </View>
                    
                   
                     <View style={[css.row,{marginLeft:10,padding:10}]}>
                        <Text style={{flex:3,fontSize:16}}>Algacide</Text>
                        <Text style={{flex:1,fontSize:16}}>10</Text>
                        <Text style={{flex:1,fontSize:16}}>10</Text>
                    </View>

                     <FlatList key="flatList"
                                    data={this.state.Biocides}
                                    ListHeaderComponent={() => (
                                        <>          
                                        <View style={[css.row,{marginLeft:10,padding:10}]}>
                                            <Text style={{flex:3,fontSize:16,fontWeight:"bold"}}>Nama</Text>
                                            <Text style={{flex:1,fontSize:16,fontWeight:"bold"}}>Jenis</Text>
                                            <Text style={{flex:1,fontSize:16,fontWeight:"bold"}}>Minimum</Text>
                                            <Text style={{flex:1,fontSize:16,fontWeight:"bold"}}>Stock</Text>
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
            </View>
        )
    }


    render(){
        return(
            this.login(this.props)
        )
    }

}