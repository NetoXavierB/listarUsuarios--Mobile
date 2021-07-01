import React from 'react';

import { Container } from './styles';
import { FontAwesome } from '@expo/vector-icons';

const Header =  ({name}) => {
    return(
        <Container>
            <FontAwesome name="users" size={28} color="#FFF" />
        </Container>
    )
}

export default Header;