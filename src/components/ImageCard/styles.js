import { StyleSheet,Dimensions } from 'react-native'

export default StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'space-between',
       
    },
    image: {
        borderRadius:10,
        width: Dimensions.get('window').width/2,
        height: 120,
        resizeMode: 'stretch'
    },
  
})