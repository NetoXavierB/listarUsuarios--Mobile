import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import { Container } from './styles';

import ItemList from '../../components/listUsers/index';

export default function Users() {

    return (
        <Container>
            {/* <Text style={{ color: '#000' }}>Teste</Text> */}
            <ItemList
                data={[
                    {name: 'Nome do usuario', picture: 'end picture', id: 1},
                    {name: 'Nome do usuario2', picture: 'end picture', id: 2}
                ]}
            />
        </Container>
    );
}