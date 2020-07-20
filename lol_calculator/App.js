/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
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

const App: () => React$Node = () => {
    useEffect(() => {
        admob().setRequestConfiguration({
            maxAdContentRating: MaxAdContentRating.PG,
            tagForChildDirectedTreatment: true,
            tagForUnderAgeOfConsent: true,
        }).then(() => {
            interstitialMaking();
            rewardedMaking();
        });
    }, []);

    function interstitialMaking() {
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

    function  rewardedMaking() {
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

    function interstitialShow () {
        interstitial.show();
        interstitialMaking();
    }

    function rewardedShow() {
        rewarded.show();
        rewardedMaking();
    }

    return (
        <SafeAreaView style={{flex:1, justifyContent: 'space-around'}}>
            <BannerAd
                unitId={bannerId}
                size={BannerAdSize.SMART_BANNER}
                requestOptions={{
                    requestNonPersonalizedAdsOnly: true,
                }}
                onAdLoaded={() => {

                }}
                onAdFailedToLoad={() => {

                }}
            />
            <BannerAd
                unitId={bannerId2}
                size={BannerAdSize.SMART_BANNER}
                requestOptions={{
                    requestNonPersonalizedAdsOnly: true,
                }}
                onAdLoaded={() => {

                }}
                onAdFailedToLoad={() => {

                }}
            />
            <BannerAd
                unitId={bannerId3}
                size={BannerAdSize.SMART_BANNER}
                requestOptions={{
                    requestNonPersonalizedAdsOnly: true,
                }}
                onAdLoaded={() => {

                }}
                onAdFailedToLoad={() => {

                }}
            />
            <BannerAd
                unitId={bannerId4}
                size={BannerAdSize.SMART_BANNER}
                requestOptions={{
                    requestNonPersonalizedAdsOnly: true,
                }}
                onAdLoaded={() => {

                }}
                onAdFailedToLoad={() => {

                }}
            />
            <Button title='전면 광고' onPress={() => interstitialShow()}></Button>
            <Button title='보상형 광고' onPress={()=> rewardedShow()}></Button>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default App;
