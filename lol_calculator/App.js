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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from './src/screen/homeScreen';
import LoginScreen from './src/screen/loginScreen';
import RoomScreen from './src/screen/roomScreen';
import SignScreen from './src/screen/signScreen';

import AdmobBanner from './src/admob/admobBanner';
import AdmobInterstitial from './src/admob/admobInterstitial';
import AdmobRewarded from './src/admob/admobRewarded';

import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
let screenOption = initScreenOption();


function loginNavi() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" options={screenOption.loginOption} component={LoginScreen}/>
        </Stack.Navigator>
    )
}

function signNavi() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Sign" options={screenOption.signOption} component={SignScreen}/>
        </Stack.Navigator>
    )
}

function homeNavi() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" options={screenOption.homeOption} component={HomeScreen}/>
            <Stack.Screen name="Rooms" options={screenOption.roomOption} component={RoomScreen}/>
        </Stack.Navigator>
    )
}

function tabNavi() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="로그인" component={loginNavi} options={{
                tabBarIcon: ({focused}) => {
                    return (
                        <Icon name="user" color="#4F8EF7" size={24}/>
                    )
                }
            }}/>
            <Tab.Screen name="회원가입" component={signNavi} options={{
                tabBarIcon: ({focused}) => {
                    return (
                        <Icon name="adduser" color="#4F8EF7" size={24}/>
                    )
                }
            }}/>
        </Tab.Navigator>
    )
}

function DrawNavi() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={tabNavi}/>
            <Drawer.Screen name="메뉴1" component={homeNavi}/>
        </Drawer.Navigator>
    )
}

function App() {
    const [admobLoading, setAdmobLoading] = useState(false);

    initAdmob(setAdmobLoading);

    return (
        <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
                <DrawNavi/>
            </NavigationContainer>
            {admobLoading && <AdmobBanner/>}
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
        homeOption: {
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
        loginOption: {
            title: '로그인',
            headerStyle: {
                backgroundColor: '#6c66f4'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        },
        signOption: {
            title: '회원가입',
            headerLeft: null,
            headerStyle: {
                backgroundColor: '#1da356'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        },
        roomOption: {
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
