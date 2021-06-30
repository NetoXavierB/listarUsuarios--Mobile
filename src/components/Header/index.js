import React from 'react';

import { Text } from 'react-native';

import { Container } from './styles';
import { Ionicons } from '@expo/vector-icons';

const Header =  ({name}) => {
    return(
        <Container>
            <Text style={{ color: '#FFF', fontSize: 18 }}>{name}</Text>
            <Ionicons name="md-checkmark-circle" size={32} color="green" />
        </Container>
    )
}

export default Header;