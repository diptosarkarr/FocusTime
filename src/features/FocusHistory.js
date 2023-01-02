import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import {colors} from '../utils/colors';
import {spacing} from '../utils/sizes'

export const FocusHistory=({history})=>{
  if(!history || !history.length) return <Text style={styles.exception}>We haven't focus on anything.</Text>
  const renderItem=({item})=>(<Text style={styles.item}>- {item}</Text>)
  return(
  <View style={styles.container} >
  <Text style={styles.title}>Focusing On The Item:</Text>
  <FlatList
  data={history}
  renderItem={renderItem}
  />

  </View>
)};

const styles=StyleSheet.create({
  container:{
    flex:1,
    padding:spacing.lg,

  },
  title:{
    color:colors.white,
    fontWeight:'bold',
  },
  item:{
    color:colors.white,
    paddingTop:spacing.sm,
  },
  exception:{
    color:colors.white,
    paddingTop:spacing.sm,
    paddingLeft:spacing.lg,
  }
  
})