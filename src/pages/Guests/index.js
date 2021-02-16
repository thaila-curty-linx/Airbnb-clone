import React, {useState, useCallback} from 'react';
import {View} from 'react-native';
import {
  Container,
  Row,
  TitleContainer,
  Title,
  ButtonContainer,
  Button,
  ButtonText,
  SubTitle,
  Option,
  ValueText,
  SearchButton,
  SearchButtonText,
} from './styles';
import {useNavigation} from '@react-navigation/native';

function Guests() {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const navigation = useNavigation();

  const decrementAdults = useCallback(() => {
    if (adults > 0) {
      setAdults(adults - 1);
    }
  }, [adults]);

  const incrementAdults = useCallback(() => {
    setAdults(adults + 1);
  }, [adults]);

  const decrementChildren = useCallback(() => {
    if (children > 0) {
      setChildren(children - 1);
    }
  }, [children]);

  const incrementChildren = useCallback(() => {
    setChildren(children + 1);
  }, [children]);

  const decrementinfants = useCallback(() => {
    if (infants > 0) {
      setInfants(infants - 1);
    }
  }, [infants]);

  const incrementinfants = useCallback(() => {
    setInfants(infants + 1);
  }, [infants]);

  return (
    <View style={{justifyContent: 'space-between', height: '100%'}}>
      <Container>
        <Option>
          <Row>
            <Title>Adults</Title>
            <SubTitle>Ages 13 or above</SubTitle>
          </Row>
          <ButtonContainer>
            <Button
              onPress={() => {
                decrementAdults();
              }}>
              <ButtonText>-</ButtonText>
            </Button>
            <ValueText>{adults}</ValueText>
            <Button
              onPress={() => {
                incrementAdults();
              }}>
              <ButtonText>+</ButtonText>
            </Button>
          </ButtonContainer>
        </Option>

        <Option>
          <Row>
            <Title>Children</Title>
            <SubTitle>Ages 2-12</SubTitle>
          </Row>
          <ButtonContainer>
            <Button
              onPress={() => {
                decrementChildren();
              }}>
              <ButtonText>-</ButtonText>
            </Button>
            <ValueText>{children}</ValueText>
            <Button
              onPress={() => {
                incrementChildren();
              }}>
              <ButtonText>+</ButtonText>
            </Button>
          </ButtonContainer>
        </Option>

        <Option>
          <Row>
            <Title>Infants</Title>
            <SubTitle>Under 2 </SubTitle>
          </Row>
          <ButtonContainer>
            <Button
              onPress={() => {
                decrementinfants();
              }}>
              <ButtonText>-</ButtonText>
            </Button>
            <ValueText>{infants}</ValueText>
            <Button
              onPress={() => {
                incrementinfants();
              }}>
              <ButtonText>+</ButtonText>
            </Button>
          </ButtonContainer>
        </Option>
      </Container>
      <SearchButton
        onPress={() => {
          navigation.navigate('Home', {
            screen: 'Explore',
            params: {screen: 'SearchResults'},
          });
        }}>
        <SearchButtonText>Search</SearchButtonText>
      </SearchButton>
    </View>
  );
}

export default Guests;
