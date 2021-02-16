import React from 'react';

import DetailePost from '../../components/DetailePost';
import places from '../../assets/data/feed';
import {useRoute} from '@react-navigation/native';

import {Container} from './styles';

function PostScreen() {
  const route = useRoute();

  const post = places.find((place) => place.id === route.params.postId);

  return (
    <Container>
      <DetailePost post={post} />
    </Container>
  );
}

export default PostScreen;
