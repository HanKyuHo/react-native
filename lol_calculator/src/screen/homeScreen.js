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
            <View style={{height:30}}>
                <Text>1번 방</Text>
            </View>
            <View style={{height:30}}>
                <Text>2번 방</Text>
            </View>
        </ScrollView>
    )
}

export default HomeScreen;