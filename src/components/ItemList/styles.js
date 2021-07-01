import styled from 'styled-components/native';
import { FlatList } from 'react-native-gesture-handler';

export const ItemContainer = styled.View`
  flex: 1;
  width: 100%;
  border-radius: 5px;
  background-color: transparent;
`;

export const Item = styled.FlatList`
    flex: 1;
    padding: 5px 18px;
    background-color: transparent;
    margin-bottom: 10px;
`;

export const UserContainer = styled.View`
    flex-direction: row;
    background-color: #EEE;
    margin-top: 10px;
    padding: 10px;
    border-radius: 10px;
    width: 100%;
`;

export const ContainerImage = styled.View`
    width: 100px;
    height: 90px;
    align-self: center;
    border: 1px solid #c6c6c6;
    border-radius: 5px;
`;

export const UserImage = styled.Image`
    width: 100%;
    height: 100%;
`;

export const UserDescriptionContainer = styled.View`
    font-size: 16px;
    margin-left: 15px;
`;

export const UserTextName = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;

export const UserInfos = styled.Text`
    font-size: 16px;
    margin-left: 10px;
`;

export const ContainerLoad = styled.View`
    flex: 1;
    width: 100%;
    height: 30px;
    padding: 30px;
    align-self: center;
`;