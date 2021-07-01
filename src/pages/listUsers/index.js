import React from 'react';

import { Container } from './styles';

import ItemList from '../../components/ItemList/index';

export default function Users() {

    return (
        <Container
            colors={['#0471a1','#192f6a']}
        >
            <ItemList/>
        </Container>
    );
}