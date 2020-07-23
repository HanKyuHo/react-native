import React, {useEffect, useState, useLayoutEffect} from 'react';
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';


function HomeScreen({navigation}) {
    useLayoutEffect(()=> {
        navigation.setOptions({ headerRight: () => (
                <Button title='logout' onPress={() => navigation.navigate('Login')} />
            )});
    }, []);

    return (
        <ScrollView style={{flex: 1}}>
            <TouchableOpacity style={{height:30}} onPress={() => navigation.navigate('Rooms', { name : 1})}>
                <Text>1번 방</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height:30}} onPress={() => navigation.navigate('Rooms', { name : 2})}>
                <Text>2번 방</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default HomeScreen;