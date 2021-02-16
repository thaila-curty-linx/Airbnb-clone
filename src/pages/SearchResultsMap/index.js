import React, {useState, useEffect, useRef} from 'react';
import MapView from 'react-native-maps';
import {Container, PostContainer, Carousel} from './styles';
import places from '../../assets/data/feed';
import CustomMarker from '../../components/CustomMarker';
import PostCorousel from '../../components/PostCarousel';
import {useWindowDimensions} from 'react-native';

function SearchResultsMap() {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const width = useWindowDimensions().width;

  const flatlistRef = useRef();
  const mapRef = useRef();
  const viewConfig = useRef({itemVisiblePercentThreshold: 70});
  const onViewChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id);
    }
  });

  useEffect(() => {
    if (!selectedPlaceId || !flatlistRef) {
      return;
    }
    const index = places.findIndex((place) => place.id === selectedPlaceId);
    flatlistRef.current.scrollToIndex({index});

    const selectedPlace = places[index];
    const region = {
      latitude: selectedPlace.coordinate.latitude,
      longitude: selectedPlace.coordinate.longitude,
      latitudeDelta: 0.6,
      longitudeDelta: 0.8,
    };
    mapRef.current.animateToRegion(region);
  }, [selectedPlaceId]);

  return (
    <Container>
      <MapView
        ref={mapRef}
        style={{width: '100%', height: '100%'}}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}>
        {places.map((place) => (
          <CustomMarker
            onPress={() => {
              setSelectedPlaceId(place.id);
            }}
            isSelected={place.id === selectedPlaceId}
            key={place.id}
            coordinate={place.coordinate}
            price={place.newPrice}
          />
        ))}
      </MapView>
      <PostContainer>
        <Carousel
          horizontal
          data={places}
          renderItem={({item}) => <PostCorousel post={item} />}
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 80}
          snapToAlignment="center"
          ref={flatlistRef}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </PostContainer>
    </Container>
  );
}

export default SearchResultsMap;
