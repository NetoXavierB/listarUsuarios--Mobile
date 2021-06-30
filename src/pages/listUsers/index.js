import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

export default function Users() {

    
    useEffect(() => {
        console.log("rapai");
    },[]);

    return (
        <View style={{ backgroundColor: '#000'}}>
            <Text>Teste</Text>
        </View>
    );
}