import React from 'react';
import { Text, View } from 'react-native';

import { Item, User, ItemContainer } from './styles';

const ItemList = ({ data = null }) => {

    return (
        data !== null &&
            <ItemContainer>
                <Item
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        console.log(item),
                        <User>
                            <Text>{item.name}</Text>
                        </User>
                    )}
                />
            </ItemContainer>
    );
}

export default ItemList;