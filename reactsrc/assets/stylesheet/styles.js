import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  backgroundDarkBlue:{
      backgroundColor: '#006680',
      height:'100%'
  },
  backgroundWhite:{
      backgroundColor: '#fff',
      height:'100%'
  },
  colorBlue:{
    color: '#006680',
  },
  borderbottom:{
     borderBottomColor: 'white',
     borderBottomWidth: 0.5,
  },
  colorwhite:{
    color: '#FFFFFF'
  },
  middleItemCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  aligncenter:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  textcenter:{
    textAlign: 'center'
  },
  row:{
    flexDirection: 'row'
  },
  col:{
    flexDirection: 'column'
  },
  backgroundRed:{
    backgroundColor: '#8B0000',
    height:'100%'
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  floatingButton:{
        width: 64,  
        height: 64,   
        borderRadius: 32,                                               
        position: 'absolute',                                     
        bottom: 10,                                                    
        right: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    content:{
      marginHorizontal:10,
      marginTop:10
    }
});