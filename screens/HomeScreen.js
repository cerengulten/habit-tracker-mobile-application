import { View, Text , StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <View style={{flex:1}}>
      <SafeAreaView style={styles.topContainer}>
        <Text style= {styles.name}>Habit Tracker</Text>
        <TouchableOpacity>
          <AntDesign name="pluscircleo" size={24} color="black" />
        </TouchableOpacity>
      </SafeAreaView>
      
    </View>
  )
}

const styles = StyleSheet.create({
  name:{
    fontSize: 30,
    fontWeight: 'bold',
  },
  topContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 20,
    marginLeft: 20,
  },
})