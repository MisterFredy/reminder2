import * as axios from 'axios'
import { AsyncStorage } from 'react-native';

class Api {

    constructor(){
        this.api_token = null
        this.client = null
        this.api_url = "http://10.0.2.2/api/"      
    }

    async create(){
        //check weather there's valid setup enterprise server
        // old true/false value
        // let private_server = await AsyncStorage.getItem('private_server');
        await AsyncStorage.getItem('private_server_url').then(value=>{
            if(value){
                this.api_url = `${value}/api/`
            }
        })
        //  console.log(this.api_url)
        
        // this.api_token = await AsyncStorage.getItem('api_token');

        await AsyncStorage.getItem('api_token').then(value=>{
            this.api_token = value
        })
        console.log(this.api_token);
        
        let headers = {
            'Accept':'application/json',
            // 'Content-Type':'application/json',
        }

        if(this.api_token){
            headers.Authorization = `Bearer ${this.api_token}`
        }

        this.client = axios.create({
            baseURL: this.api_url,
            timeout: 10000,
            headers: headers
        })

        return this.client
    }

    /**
     * form data request api setup
     * for uploading file, etc
     */
    async createFormData(){
        try{
            this.api_token = await AsyncStorage.getItem('api_token');
        }catch(error){
            console.log('API:server read api url or api token error')
        }

        let headers = {
            'Accept':'application/json',
            // 'Content-Type': 'multipart/form-data',
        }

        if(this.api_token){
            headers.Authorization = `Bearer ${this.api_token}`
        }

        this.client = axios.create({
            baseURL: this.api_url,
            timeout: 10000,
            headers: headers,
        })

        return this.client
    }

    getClient(){
        return this.client
    }

    logout(){
        AsyncStorage.removeItem('user');
        AsyncStorage.removeItem('api_token');
    }

    login = (data)=>{
        return this.create().then(api => api.post(`/login`, data))
    }

    // api for guest 
    resetPassword = (data)=>{
        return this.create().then(api => api.post(`/user/password/forgot-api`, data))
    }

    getBiocide(){
        return this.create().then(api => api.get('/master_biocidies'))
    }


}

export { Api }