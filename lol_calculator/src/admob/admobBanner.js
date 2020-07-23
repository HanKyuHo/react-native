import React, {useEffect, useState} from 'react';
import {
    BannerAd,
    BannerAdSize,
} from '@react-native-firebase/admob';

function AdmobBanner() {
    const bannerId = 'ca-app-pub-3168108779906402/2136575222';
    const bannerId2 = 'ca-app-pub-3168108779906402/6508841175';
    const bannerId3 = 'ca-app-pub-3168108779906402/3968864788';
    const bannerId4 = 'ca-app-pub-3168108779906402/7716538101';

    return(
        <BannerAd unitId={bannerId2} size={BannerAdSize.SMART_BANNER}
                  requestOptions={{requestNonPersonalizedAdsOnly: true}}/>
    );
}

export default AdmobBanner;