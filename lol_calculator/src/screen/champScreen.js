
import React, {useEffect, useState} from 'react';
import {
    ScrollView,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';

function ChampScreen({route, navigation}) {
    const {apiLoading} = route.params;
    const {champData} = route.params;
    const {version} = route.params;
    const [renderData, setRenderData] = useState([]);

    useEffect(()=>{
        let obj = [];
        let key = Object.keys(champData);
        key.sort();

        let imgSource = '';
        for (let i = 0, len = key.length; i < len; i++) {
            imgSource = 'http://ddragon.leagueoflegends.com/cdn/' + version + '/img/champion/' + champData[key[i]].name + '.png';
            obj.push(
                <TouchableOpacity key={key[i]} style={{margin:1}} onPress={() => alert(key[i])}>
                    <Image source={{uri: imgSource}} style={{width: 100, height: 100}}/>
                </TouchableOpacity>
            );
        }

        setRenderData(obj);
    }, []);

    return (
        <ScrollView style={{flex: 1}}>
            {apiLoading &&
            <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
                {renderData}
            </View>
            }
        </ScrollView>
    );
}

export default ChampScreen;