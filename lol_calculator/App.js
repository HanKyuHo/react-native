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
import ChampScreen from './src/screen/champScreen';

import AdmobBanner from './src/admob/admobBanner';
import AdmobInterstitial from './src/admob/admobInterstitial';
import AdmobRewarded from './src/admob/admobRewarded';

const Stack = createStackNavigator();

function App() {
    const [admobLoading, setAdmobLoading] = useState(false);
    let screenOption = initScreenOption();

    initAdmob(setAdmobLoading);

    return (
        <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" options={screenOption.homeOption} component={HomeScreen}/>
                    <Stack.Screen name="Champ" options={screenOption.champOption} component={ChampScreen}/>
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
            headerStyle: {
                backgroundColor: '#f4511e'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        },
        champOption : {
            title: '챔피언 선택창',
            headerStyle: {
                backgroundColor: '#6c66f4'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }
    };

    return obj;
}

const styles = StyleSheet.create({});

export default App;
