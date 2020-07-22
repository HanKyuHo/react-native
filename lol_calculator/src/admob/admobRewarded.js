import React, {useEffect, useState} from 'react';
import {Button} from 'react-native';
import admob, {
    RewardedAd,
    RewardedAdEventType,
} from '@react-native-firebase/admob';

function AdmobRewarded() {
    const rewardedId = 'ca-app-pub-3168108779906402/3196691246';
    let rewarded;

    useEffect(() => {
        initRewarded();
    }, []);

    function initRewarded() {
        rewarded = RewardedAd.createForAdRequest(rewardedId, {
            requestNonPersonalizedAdsOnly: true,
        });

        rewarded.onAdEvent((type, error, reward) => {
            if (type === RewardedAdEventType.LOADED) {
            }
            if (type === RewardedAdEventType.EARNED_REWARD) {
            }
        });

        rewarded.load();
    }

    function rewardedShow() {
        rewarded.show();
        initRewarded();
    }

    return(
        <Button title='보상형 광고' onPress={rewardedShow}/>
    );
}

export default AdmobRewarded;