import React from 'react';
import {FlatList} from 'react-native';
import Post from '../../components/Post';
import {Container} from './styles';

import feed from '../../assets/data/feed';

function SearchResults() {
  return (
    <Container>
      <FlatList data={feed} renderItem={({item}) => <Post post={item} />} />
    </Container>
  );
}

export default SearchResults;
