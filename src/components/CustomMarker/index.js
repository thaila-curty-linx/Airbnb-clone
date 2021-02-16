import React from 'react';
import {Marker} from 'react-native-maps';
import {PlaceContainer, PlacePriceText} from './styles';

function CustomMarker({coordinate, price, onPress, isSelected}) {
  return (
    <Marker coordinate={coordinate} onPress={onPress}>
      <PlaceContainer isSelected={isSelected}>
        <PlacePriceText isSelected={isSelected}>${price}</PlacePriceText>
      </PlaceContainer>
    </Marker>
  );
}

export default CustomMarker;
