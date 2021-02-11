import React from 'react';

import {
  Container,
  Background,
  Title,
  Button,
  ButtonText,
  SearchButton,
  SearchButtonText,
} from './styles';

import Fontisto from 'react-native-vector-icons/Fontisto';

import {useNavigation} from '@react-navigation/native';

function Home() {
  const navigation = useNavigation();

  return (
    <Container>
      <SearchButton
        onPress={() => {
          navigation.navigate('DestinationSearch');
        }}>
        <Fontisto name="search" size={25} color="#f15454" />
        <SearchButtonText>Where are you going?</SearchButtonText>
      </SearchButton>
      <Background source={require('../../assets/images/wallpaper.jpg')}>
        <Title>Go Near</Title>
        <Button onPress={() => {}}>
          <ButtonText>Explore nearby stays</ButtonText>
        </Button>
      </Background>
    </Container>
  );
}

export default Home;
