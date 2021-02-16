import React from 'react';
import {ScrollView} from 'react-native';

import {
  Container,
  Image,
  BedroomsText,
  Description,
  Prices,
  OldPrices,
  TotalPrice,
  Price,
  LongDescription,
} from './styles';

function DetailePost({post}) {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <Container>
        <Image source={{uri: post.image}} />
        <BedroomsText>
          {post.bed} bed {post.bedroom} bedroom
        </BedroomsText>
        <Description numberOfLines={2}>
          {post.type}. {post.title}
        </Description>
        <Prices>
          <OldPrices>${post.oldPrice}</OldPrices>
          <Price> ${post.newPrice}</Price>/ night
        </Prices>
        <TotalPrice>${post.totalPrice}</TotalPrice>
        <LongDescription>{post.description}</LongDescription>
      </Container>
    </ScrollView>
  );
}

export default DetailePost;
