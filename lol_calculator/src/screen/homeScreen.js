import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    Image,
} from 'react-native';


function HomeScreen({navigation}) {
    const [champData, setChampData] = useState({});
    const [apiLoading, setApiLoading] = useState(false);
    const [nowVersion, setNowVersion] = useState('');
    let a = '';

    useEffect(() => {
        // lol 버전체크
        fetch('https://ddragon.leagueoflegends.com/api/versions.json').then((response) => {
            return response.json();
        }).then(json => {
            a = json[0];
            // lol 챔피언들 데이터
            fetch('http://ddragon.leagueoflegends.com/cdn/' + a + '/data/ko_KR/champion.json')
                .then(response => {
                    return response.json();
                })
                .then(json => {
                    setNowVersion(a);
                    setChampData(koreanConvert(json.data));
                    setApiLoading(true);
                }).catch(err => {
                console.log(err);
            });
        });
    },[]);

    function koreanConvert(data) {
        var krData = {};
        var key = Object.getOwnPropertyNames(data);

        for (var i = 0, len = key.length; i < len; i++) {
            krData[data[key[i]].name] = data[key[i]];
            krData[data[key[i]].name].name = key[i];
        }

        return krData;
    }

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{position:'absolute', bottom: 0, right:0}}>{apiLoading && nowVersion}</Text>
            <Button
                title="챔피언 선택하기"
                onPress={() => navigation.navigate('Champ', {champData : champData, apiLoading : apiLoading, version : nowVersion})}
            />
        </View>
    )
}

export default HomeScreen;