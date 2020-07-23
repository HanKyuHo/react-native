import React, {useEffect, useState, useLayoutEffect} from 'react';
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';


function RoomScreen({navigation, route}) {
    const { name } = route.params;

    return (
        <View style={{flex: 1}}>
          <Text>{name}</Text>
        </View>
    )
}

export default RoomScreen;