import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button,ScrollView,FlatList,TouchableOpacity, Alert } from 'react-native';
import Header from './Components/Header'
import TodoItem from './Components/TodoItem'
import AddTodo from './Components/AddTodo'
export default function App() {
  const [todos,setTodos]=useState([
    {text:'buy coffee', key:'1'},
    {text:'create app', key:'2'},
    {text:'play playstation', key:'3'}


  ])
  const   pressHandler =(key)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => todo.key !=key)
    })
  }
  const submitHandler =(text)=>{
    if(text.length > 3){
      setTodos((prevTodos)=>{
        return [
          {text:text,key:Math.random().toString()},
          ...prevTodos
        ]
      })
    }
    else{
      Alert.alert('OOPS!', 'Todos Must be over 3 Characters!!',[
        {
          text:'Understood', onPress:()=>console.log('Alert closed')
        }
      ])

    }
    console.log(Alert)

  }
  return (
    <View style={styles.container}>
      {/* header */}
      <Header/>
      <View style={styles.content}>
        {/* Form */}
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item})=>(
              <TodoItem item={item} pressHandler={pressHandler}/>
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
    
    // paddingTop:40,
    // paddingHorizontal:20
  },
  content:{
    padding:40
  },
  list:{
    marginTop:20
  }
  
  
});
