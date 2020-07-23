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
        <View style={{flexDirection:'row'}}>
            <View style={{flexDirection:'column'}}>
                <TextInput  style={{width:200, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius : 5 }}/>
                <TextInput style={{width:200, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius : 5 }}/>
            </View>
            <TouchableOpacity style={{height:80, backgroundColor : 'blue'}} onPress={() => navigation.navigate('Home')}>
                <Text>
                    로그인
                </Text>
            </TouchableOpacity>
        </View>

    )
}

export default loginScreen;