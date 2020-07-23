import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    Button,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';

function loginScreen({navigation}) {
    useEffect(() => {

    },[]);

    return (
        <View style={{flexDirection:'column', marginLeft: '25%', marginTop: '40%'}}>
            <TextInput  style={{width:200, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius : 5 }}/>
            <TextInput style={{width:200, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius : 5, marginTop : 10 }}/>
            <TouchableOpacity style={{height:40, width:200, padding: 10, backgroundColor : '#6c66f4', justifyContent:'center', alignContent:'center', marginTop: 10, borderRadius : 5}}>
                <Text style={{color:'white', fontSize: 15}}>
                    로그인
                </Text>
            </TouchableOpacity>
        </View>

    )
}

export default loginScreen;