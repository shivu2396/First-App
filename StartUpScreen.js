
import React from "react";
import { StyleSheet,Image,TouchableOpacity,View } from 'react-native';


import {heightPercentageToDP as hp,widthPercentageToDP as wp,} from 'react-native-responsive-screen'
 
function StartUpScreen({navigation}) {
return (
<View style={styles.CONTAINER}>
<View style ={styles.BOX}>
</View>
<View>
<TouchableOpacity onPress = {() => navigation.navigate('Home')} >
<Image source={require('D:/Book/Img/my_icon.png')} style={styles.IMG}/>
</TouchableOpacity>
</View>
</View>
);
}

 const styles = StyleSheet.create({
 CONTAINER: {
    flex: 1,
    backgroundColor:'#FF6EA1',
 },

BOX:{
    marginStart:'5%',
    width: wp('0.7%'),
    height:hp ('110%'),
    borderTopRadius:'230%',
    backgroundColor: 'white'
 },
 
IMG:{
   
  right:'40%',
   bottom:'410%',
     marginStart:'75%',
     height:hp('15%'),
     width: wp('35%'),
},
});

export default StartUpScreen;
  



