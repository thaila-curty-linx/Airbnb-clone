import React from 'react';

import {
  Container,
  Image,
  BedroomsText,
  Description,
  Prices,
  Price,
  Content,
  InnrtCotainer,
} from './styles';
import {useWindowDimensions} from 'react-native';

import {useNavigation} from '@react-navigation/native';

function PostCarousel({post}) {
  const width = useWindowDimensions().width;

  const navigation = useNavigation();

  function goToPostPage() {
    navigation.navigate('PostPage', {postId: post.id});
  }

  return (
    <Container onPress={goToPostPage} width={width}>
      <InnrtCotainer>
        <Image source={{uri: post.image}} />
        <Content>
          <BedroomsText>
            {post.bed} bed {post.bedroom} bedroom
          </BedroomsText>
          <Description numberOfLines={2}>
            {post.type}. {post.title}
          </Description>
          <Prices>
            <Price> ${post.newPrice}</Price>/ night
          </Prices>
        </Content>
      </InnrtCotainer>
    </Container>
  );
}

export default PostCarousel;
