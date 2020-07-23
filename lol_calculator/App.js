/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    Image,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import admob, {MaxAdContentRating} from '@react-native-firebase/admob';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import HomeScreen from './src/screen/homeScreen';
import LoginScreen from './src/screen/loginScreen';

import AdmobBanner from './src/admob/admobBanner';
import AdmobInterstitial from './src/admob/admobInterstitial';
import AdmobRewarded from './src/admob/admobRewarded';

const Stack = createStackNavigator();

function App({ navigation }) {
    const [admobLoading, setAdmobLoading] = useState(false);
    let screenOption = initScreenOption(navigation);

    initAdmob(setAdmobLoading);

    return (
        <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Login" options={screenOption.loginOption} component={LoginScreen}/>
                    <Stack.Screen name="Home" options={screenOption.homeOption} component={HomeScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
            {admobLoading && <AdmobBanner/>}
            {admobLoading && <AdmobInterstitial/>}
            {admobLoading && <AdmobRewarded/>}
        </SafeAreaView>
    );
};

function initAdmob(setAdmobLoading) {
    useEffect(() => {
        // 광고 초기설정
        admob().setRequestConfiguration({
            maxAdContentRating: MaxAdContentRating.PG,
            tagForChildDirectedTreatment: true,
            tagForUnderAgeOfConsent: true,
        }).finally(function () {
            setAdmobLoading(true);
        });
    }, []);
}

function initScreenOption() {
    let obj = {
        homeOption : {
            title: '메인',
            headerLeft: null,

            headerStyle: {
                backgroundColor: '#f4511e'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        },
        loginOption : {
            title: '로그인',
            headerStyle: {
                backgroundColor: '#6c66f4'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        },

    };

    return obj;
}

const styles = StyleSheet.create({});

export default App;
