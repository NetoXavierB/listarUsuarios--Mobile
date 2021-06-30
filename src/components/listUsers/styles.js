import styled from 'styled-components/native';
import { FlatList } from 'react-native-gesture-handler';

export const Item = styled(FlatList)`
    flex: 1;
    padding: 20px 10px;
    background-color: transparent;
`;

export const User = styled.View`
    flex: 1;
    flex-direction: row;
    margin: 5px;
    background: #fff;
    min-width: 350px;
    min-height: 130px;
    padding: 15px 10px;
    border-radius: 20px;
`;

export const ItemContainer = styled.View`
  flex: 1;
  flex-direction: row;
  margin-top: 60px;
  border-radius: 5px;
  background-color: #e83f50;
`;