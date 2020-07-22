import React, {useEffect, useState} from 'react';
import {
    Button,
} from 'react-native';
import admob, {
    InterstitialAd,
    AdEventType,
} from '@react-native-firebase/admob';

function AdmobInterstitial() {
    const interstitialId = 'ca-app-pub-3168108779906402/7135936254';
    let interstitial;

    useEffect(() => {
        initInterstitial();
    }, []);

    function initInterstitial() {
        interstitial = InterstitialAd.createForAdRequest(interstitialId, {
            requestNonPersonalizedAdsOnly: true,
        });

        interstitial.onAdEvent((type, error) => {
            if (type === AdEventType.LOADED) {
            } else if (type === AdEventType.ERROR) {

            }
        });

        interstitial.load();
    }

    function interstitialShow() {
        interstitial.show();
        initInterstitial();
    }

    return(
      <Button title='전면 광고' onPress={interstitialShow}/>
    );
}

export default AdmobInterstitial;