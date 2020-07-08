import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button,ScrollView,FlatList,TouchableOpacity } from 'react-native';
import Header from './Components/Header'
export default function App() {
  const [todos,setTodos]=useState([
    {text:'buy coffee', key:'1'},
    {text:'create app', key:'2'},
    {text:'play playstation', key:'3'}


  ])
  return (
    <View style={styles.container}>
      {/* header */}
      <Header/>
      <View style={styles.content}>
        {/* Form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item})=>(
              <Text>{item.text}</Text>
            )}
          />
        </View>
      </View>

    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop:40,
    paddingHorizontal:20
  },
  content:{
    padding:40
  },
  list:{
    marginTop:20
  }
  
  
});
