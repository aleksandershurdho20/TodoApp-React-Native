import React,{useState} from 'react';
import { StyleSheet, Text,TextInput,Button,View } from 'react-native';

export default function AddTodo ({submitHandler}){
    const [text,setText]=useState();

    const changeHandler = (val) =>{
        setText(val)
    }
    return(
        <View>
            <TextInput
                style={StyleSheet.inputContainer}
                placeholder='New todo'
                onChangeText={(val)=>changeHandler(val)}
            />
            <Button onPress={()=>submitHandler(text)} title="Add To Do" color='coral'/>
        </View>
    )
}
const styles = StyleSheet.create({
    inputContainer:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderRadius:1,
        borderWidth:1,
        borderColor:'#e8e8e8',
        borderStyle:'solid',
    }
})