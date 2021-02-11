import React from 'react';

import {
  Container,
  Image,
  BedroomsText,
  Description,
  Prices,
  OldPrices,
  TotalPrice,
  Price,
} from './styles';

function Post({post}) {
  console.log(post);
  return (
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
    </Container>
  );
}

export default Post;
