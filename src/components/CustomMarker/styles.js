import styled from 'styled-components/native';

export const PlaceContainer = styled.View`
  background: #fff;
  padding: 6px;
  border-radius: 20px;
  border-color: gray;
  border-width: 1.5px;
  background: ${(props) => (props.isSelected ? '#000' : '#fff')};
`;

export const PlacePriceText = styled.Text`
  color: ${(props) => (props.isSelected ? '#fff' : '#000')};
  font-weight: bold;
`;
