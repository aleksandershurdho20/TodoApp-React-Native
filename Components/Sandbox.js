import React from 'react';
import { StyleSheet, Text,View } from 'react-native';

export default function Sandbox (){
    return(
        <View style={styles.container}>
            <Text>HI</Text>
            <Text style={styles.boxOne}>HI</Text>
            <Text style={styles.boxTwo}>HI</Text>
            <Text style={styles.boxThree}>HI</Text>
            <Text style={styles.boxFour}>HI</Text>



        </View>
    )
}
const styles=StyleSheet.create({
container:{
    flex:1,
    paddingTop:40,
    backgroundColor:'#ddd',

},
boxOne:{
    padding:10,
    backgroundColor:'blue'
},
boxTwo:{
    padding:10,
    backgroundColor:'red'
},
boxThree:{
    padding:10,
    backgroundColor:'green'
},
boxFour:{
    padding:10,
    backgroundColor:'pink'
},
})