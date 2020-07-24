import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    Button,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';

function signScreen({navigation}) {
    useEffect(() => {

    }, []);

    return (
        <View style={{flexDirection: 'column', marginLeft: '25%', marginTop: '10%'}}>
            <TextInput style={{width: 200, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5}}/>
            <TextInput style={{width: 200, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, marginTop : 10}}/>
            <TouchableOpacity style={{
                height: 40,
                width: 200,
                padding: 10,
                backgroundColor: '#1da356',
                justifyContent: 'center',
                alignContent: 'center',
                marginTop: 10,
                borderRadius : 5
            }} onPress={() => navigation.navigate('Home')}>
                <Text style={{color: 'white', fontSize: 15}}>
                    회원가입
                </Text>
            </TouchableOpacity>
        </View>

    )
}

export default signScreen;