import React, {useState} from 'react';

import {
  Container,
  Input,
  List,
  TextList,
  IconContainer,
  ListRow,
} from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import {googleKey} from '../../utils/key';

import {useNavigation} from '@react-navigation/native';

function DestinationSearch() {
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();
  return (
    <Container>
      <Input
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          navigation.navigate('Guests');
          console.log('oill');
        }}
        fetchDetails
        query={{
          key: googleKey,
          language: 'en',
          types: '(cities)',
        }}
        suppressDefaultStyles
        renderRow={(item) => (
          <ListRow>
            <IconContainer>
              <Entypo name="location-pin" size={35} color="#000" />
            </IconContainer>
            <TextList>{item.description}o</TextList>
          </ListRow>
        )}
      />
      {/* <Input
        placeholder="Where are you going?"
        value={inputText}
        onChangeText={setInputText}
      /> */}

      {/* <List
        data={searchResults}
        renderItem={({item}) => (
          <ListRow
            onPress={() => {
              navigation.navigate('Guests');
            }}>
            <IconContainer>
              <Entypo name="location-pin" size={35} color="#000" />
            </IconContainer>
            <TextList>{item.description}</TextList>
          </ListRow>
        )}
      /> */}
    </Container>
  );
}

export default DestinationSearch;
