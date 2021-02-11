import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
export const Container = styled.View`
  width: 100%;
  height: 100%;
`;

export const Background = styled.ImageBackground`
  width: 100%;
  height: 500px;
  justify-content: center;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 80px;
  font-weight: bold;
  color: #fff;
  width: 70%;
  margin-left: 25px;
`;

export const Button = styled.Pressable`
  background: #fff;
  width: 200px;
  height: 40px;
  border-radius: 10px;
  margin-top: 25px;
  margin-left: 25px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const SearchButton = styled.TouchableOpacity`
  position: absolute;
  background: #fff;
  width: ${Dimensions.get('screen').width - 20};
  height: 60px;
  border-radius: 30px;
  margin-horizontal: 10px;
  margin-top: 25px;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  top: 30px;
  z-index: 1;
  elevation: 50;
`;

export const SearchButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
