import React from 'react';

import { Container } from './styles';

import ItemList from '../../components/ItemList/index';

export default function Users() {

    return (
        <Container
            colors={['#b1b1b1', '#111']}
        >
            <ItemList/>
        </Container>
    );
}