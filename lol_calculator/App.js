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
} from 'react-native';
import admob, {
    InterstitialAd,
    AdEventType,
    MaxAdContentRating,
    BannerAd,
    BannerAdSize,
    TestIds,
    RewardedAdEventType,
    RewardedAd,
    FirebaseJsonConfig
} from '@react-native-firebase/admob';

const bannerId = 'ca-app-pub-3168108779906402/2136575222';
const bannerId2 = 'ca-app-pub-3168108779906402/6508841175';
const bannerId3 = 'ca-app-pub-3168108779906402/3968864788';
const bannerId4 = 'ca-app-pub-3168108779906402/7716538101';
const interstitialId = 'ca-app-pub-3168108779906402/7135936254';
const rewardedId = 'ca-app-pub-3168108779906402/3196691246';

var interstitial;
var rewarded;

function App() {
    const [champData, setChampData] = useState({});
    const [renderData, setRenderData] = useState([]);
    const [apiLoading, setApiLoading] = useState(false);

    // 렌더링전에 1회 호출
    useEffect(() => {
        // 광고 초기설정
        admob().setRequestConfiguration({
            maxAdContentRating: MaxAdContentRating.PG,
            tagForChildDirectedTreatment: true,
            tagForUnderAgeOfConsent: true,
        }).then(() => {
            // 광고 초기화
            initInterstitial();
            initRewarded();
        });

        // lol 버전체크
        fetch('https://ddragon.leagueoflegends.com/api/versions.json').then((response) => {
            response.json().then(json => {
                // lol 챔피언들 데이터
                fetch('http://ddragon.leagueoflegends.com/cdn/' + json[0] + '/data/ko_KR/champion.json')
                    .then(response => {
                        return response.json();
                    })
                    .then(json => {
                        setChampData(koreanConvert(json.data));
                        setApiLoading(true);
                    }).catch(err => {
                        console.log(err);
                    });
            });
        });
    }, []);

    useEffect(() => {
       var obj = [];
       var key = Object.keys(champData);
       key.sort();

       for(var i = 0, len = key.length; i<len; i++){
           obj.push(
               <View key={key[i]} style={{flex:1}}>
                   <Text>
                       "{key[i]}" :
                       {'{ \n \t\t"id" :'} {champData[key[i]].id} {',\n'}
                       {'\t\t"key" :'} {champData[key[i]].key} {',\n'}
                       {'\t\t"name" :'} {champData[key[i]].name} {',\n'}
                       {'\t\t"title" :'} {champData[key[i]].title} {',\n'}
                       {'\t\t"blurb" :'} {champData[key[i]].blurb.substr(0, 15)} {'...,\n'}
                       {'\t\t"info" : {\n'}
                       {'\t\t\t\t"attack" :'} {champData[key[i]].info.attack} {',\n'}
                       {'\t\t\t\t"defense" :'} {champData[key[i]].info.defense} {',\n'}
                       {'\t\t\t\t"magic" :'} {champData[key[i]].info.magic} {',\n'}
                       {'\t\t\t\t"difficulty" :'} {champData[key[i]].info.difficulty} {',\n\t\t}\n'}
                       {'\t\t"image" : {\n'}
                       {'\t\t\t\t"full" :'} {champData[key[i]].image.full} {',\n'}
                       {'\t\t\t\t"sprite" :'} {champData[key[i]].image.sprite} {',\n'}
                       {'\t\t\t\t"group" :'} {champData[key[i]].image.group} {',\n'}
                       {'\t\t\t\t"x" :'} {champData[key[i]].image.x} {',\n'}
                       {'\t\t\t\t"y" :'} {champData[key[i]].image.y} {',\n'}
                       {'\t\t\t\t"w" :'} {champData[key[i]].image.w} {',\n'}
                       {'\t\t\t\t"h" :'} {champData[key[i]].image.h} {',\n\t\t}\n'}
                       {'\t\t"tags" :'} {champData[key[i]].tags} {',\n'}
                       {'\t\t"partype" :'} {champData[key[i]].partype} {',\n'}
                       {'\t\t"stats" : {\n'}
                       {'\t\t\t\t"hp" :'} {champData[key[i]].stats.hp} {',\n'}
                       {'\t\t\t\t"hpperlevel" :'} {champData[key[i]].stats.hpperlevel} {',\n'}
                       {'\t\t\t\t"mp" :'} {champData[key[i]].stats.mp} {',\n'}
                       {'\t\t\t\t"mpperlevel" :'} {champData[key[i]].stats.mpperlevel} {',\n'}
                       {'\t\t\t\t"movespeed" :'} {champData[key[i]].stats.movespeed} {',\n'}
                       {'\t\t\t\t"armor" :'} {champData[key[i]].stats.armor} {',\n'}
                       {'\t\t\t\t"armorperlevel" :'} {champData[key[i]].stats.armorperlevel} {',\n'}
                       {'\t\t\t\t"spellblock" :'} {champData[key[i]].stats.spellblock} {',\n'}
                       {'\t\t\t\t"spellblockperlevel" :'} {champData[key[i]].stats.spellblockperlevel} {',\n'}
                       {'\t\t\t\t"attackrange" :'} {champData[key[i]].stats.attackrange} {',\n'}
                       {'\t\t\t\t"hpregen" :'} {champData[key[i]].stats.hpregen} {',\n'}
                       {'\t\t\t\t"hpregenperlevel" :'} {champData[key[i]].stats.hpregenperlevel} {',\n'}
                       {'\t\t\t\t"mpregen" :'} {champData[key[i]].stats.mpregen} {',\n'}
                       {'\t\t\t\t"mpregenperlevel" :'} {champData[key[i]].stats.mpregenperlevel} {',\n'}
                       {'\t\t\t\t"crit" :'} {champData[key[i]].stats.crit} {',\n'}
                       {'\t\t\t\t"critperlvel" :'} {champData[key[i]].stats.critperlvel} {',\n'}
                       {'\t\t\t\t"attackdamage" :'} {champData[key[i]].stats.attackdamage} {',\n'}
                       {'\t\t\t\t"attackdamageperlevel" :'} {champData[key[i]].stats.attackdamageperlevel} {',\n'}
                       {'\t\t\t\t"attackspeed" :'} {champData[key[i]].stats.attackspeed} {',\n'}
                       {'\t\t\t\t"attackspeedperlevel" :'} {champData[key[i]].stats.attackspeedperlevel} {',\n'}
                       {'}'}
                   </Text>
               </View>
           );
       }

       setRenderData(obj);
    }, [apiLoading]);

    function initInterstitial() {
        interstitial = InterstitialAd.createForAdRequest(interstitialId, {
            requestNonPersonalizedAdsOnly: true,
            keywords: ['fashion', 'clothing'],
        });

        interstitial.onAdEvent((type, error) => {
            if (type === AdEventType.LOADED) {
            } else if (type === AdEventType.ERROR) {
            }
        });

        interstitial.load();
    }

    function initRewarded() {
        rewarded = RewardedAd.createForAdRequest(rewardedId, {
            requestNonPersonalizedAdsOnly: true,
            keywords: ['game'],
        });

        rewarded.onAdEvent((type, error, reward) => {
            if (type === RewardedAdEventType.LOADED) {
            }
            if (type === RewardedAdEventType.EARNED_REWARD) {
            }
        });

        rewarded.load();
    }

    function interstitialShow() {
        interstitial.show();
        initInterstitial();
    }

    function rewardedShow() {
        rewarded.show();
        initRewarded();
    }

    function koreanConvert(data) {
        var krData = {};
        var key = Object.getOwnPropertyNames(data);

        for(var i = 0, len = key.length; i<len; i++){
            krData[data[key[i]].name] = data[key[i]];
            krData[data[key[i]].name].name = key[i];
        }

        return krData;
    }


    return (
        <SafeAreaView style={{flex: 1}}>
            <BannerAd unitId={bannerId2} size={BannerAdSize.SMART_BANNER}
                      requestOptions={{requestNonPersonalizedAdsOnly: true,}}/>
            <ScrollView style={{flex:1}}>
                    {apiLoading && renderData}
            </ScrollView>
            <BannerAd unitId={bannerId4} size={BannerAdSize.SMART_BANNER}
                      requestOptions={{requestNonPersonalizedAdsOnly: true,}}/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default App;
