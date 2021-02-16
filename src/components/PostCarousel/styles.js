import styled from 'styled-components/native';

export const Container = styled.Pressable`
  padding: 5px;
  height: 120px;
  width: ${(props) => props.width - 60};
  shadow-color: #000;
  shadow-opacity: 0.34;
 shadow-radius: 6.27px;
  shadow-offset: {width: 0, height: 5px};
  elevation:10;
`;
export const InnrtCotainer = styled.View`
  flex-direction: row;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
`;
export const Content = styled.View`
  flex: 1;
  margin-horizontal: 8px;
`;
export const Image = styled.Image`
  height: 100%;
  aspect-ratio: ${1};
  resize-mode: cover;
  border-radius: 10px;
`;

export const BedroomsText = styled.Text`
  margin-vertical: 8px;
  color: #5b5b5b;
`;

export const Description = styled.Text`
  font-size: 15px;
`;

export const Prices = styled.Text`
  font-size: 15px;
  margin-vertical: 8px;
`;

export const Price = styled.Text`
  font-weight: bold;
`;
