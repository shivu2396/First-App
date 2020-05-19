import * as React from 'react';
import {StyleSheet,Text,Image,Button,View} from 'react-native';
import {heightPercentageToDP as hp,widthPercentageToDP as wp,} from 'react-native-responsive-screen'
 
function HomeScreen({navigation}) { 
    return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      </View>
  );
}

export default HomeScreen;