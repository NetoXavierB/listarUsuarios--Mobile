import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';

import api from '../../services/api';

import {
    UserContainer, 
    UserImage,
    UserDescriptionContainer,
    UserTextName,
    UserInfos,
    ContainerImage,
    ItemContainer,
    Item,
    ContainerLoad
 } from './styles';

const ItemList = () => {   
    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);
    const [page, setPage] = useState(0);

    const loadUsers = async () => {
        await api.get(`&page=${page}&results=10`)
        .then((response) => {
            setLoad(true);
            setData(response.data.results);
            setLoad(false);
            setRefreshing(false);
        }).catch((error) => {
            console.log(error);
            setLoad(false);
            setRefreshing(false);
        }).finally(() => {
            setLoad(false);
            setRefreshing(false);
        });
    }

    const getUsersScroll = async () => {
        setLoad(true);
        const newPage = page+1;
        setPage(newPage);
        await api.get(`&page=${page}&results=6`)
        .then((response) => {
            const newData = [...data];
            newData.push(...response.data.results);
            setData(newData);
        }).catch((error) => {
            console.log(error);
            setLoad(false);
        }).finally(() => {
            setLoad(false);
        });
    }

    RenderUsersList = ( {item} ) => (
        <UserContainer>
            <ContainerImage>
                <UserImage source={{ uri: item.picture.large }}/>
            </ContainerImage>
            <UserDescriptionContainer>
                <UserTextName>{item.name.first} {item.name.last}</UserTextName>
                <UserInfos>{item.location.city + " - " + item.location.state}</UserInfos>
                <UserInfos>{item.gender}</UserInfos>
                <UserInfos>{item.phone}</UserInfos>
                <UserInfos>{item.email}</UserInfos>
            </UserDescriptionContainer>
        </UserContainer>
    );

    renderFooter = () => {
        if (!load) return null;

        return (
            <ContainerLoad>
                <ActivityIndicator size={'large'} color={'#FFF'}/>
            </ContainerLoad>
        );
    };

    const onRefresh = () => {
        setPage(0);
        setRefreshing(true);
        loadUsers();
    }

    useEffect(() => {
        loadUsers();
    }, []);

    return (
        <ItemContainer>
            <Item
                data={data}
                keyExtractor={(item, index) => index}
                renderItem={RenderUsersList}
                onEndReached={getUsersScroll}
                onEndReachedThreshold={0.1}
                ListFooterComponent={renderFooter}
                refreshing={refreshing}
                onRefresh={onRefresh}
            /> 
        </ItemContainer>
    );
}
export default ItemList;
