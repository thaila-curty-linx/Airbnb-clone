import styled from 'styled-components/native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

export const Container = styled.View`
  padding: 20px;
  height: 100%;
  width: 100%;
  background: #fff;
`;

export const Input = styled(GooglePlacesAutocomplete)`
  font-size: 36px;
  margin-bottom: 20px;
`;

export const List = styled.FlatList``;

export const ListRow = styled.View`
  flex-direction: row;
  align-items: center;
  padding-vertical: 15px;
  border-bottom-width: 1px;
  border-color: lightgray;
`;

export const IconContainer = styled.View`
  background: #e7e7e7;
  padding: 7px;
  border-radius: 10px;
  margin-right: 15px;
`;

export const TextList = styled.Text``;
