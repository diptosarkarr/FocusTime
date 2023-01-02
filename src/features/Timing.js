import React from 'react';
import {View,StyleSheet} from 'react-native';
import{RoundedButton} from '../components/RoundedButton'

export const Timing=({onChnageTime})=>(
  <>
  <View style={styles.buttonWrapper}>
<RoundedButton title='10' size={75} onPress={()=>onChnageTime(10)} />
</View>

<View style={styles.buttonWrapper}>
<RoundedButton title='15' size={75} onPress={()=>onChnageTime(15)} />
</View>

<View style={styles.buttonWrapper}>
<RoundedButton title='20' size={75} onPress={()=>onChnageTime(20)} />
</View>
  </>
)


const styles=StyleSheet.create({
  buttonWrapper:{
    padding:10,
  }
})