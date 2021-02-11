import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;
export const Option = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-vertical: 20px;
  margin-horizontal: 20px;
  border-bottom-width: 1px;
  border-color: lightgray;
`;

export const Row = styled.View``;

export const Title = styled.Text`
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  color: #8d8d8d;
`;

export const TitleContainer = styled.View``;

export const ButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.Pressable`
  border-width: 1px;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  border-color: #676767;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  color: #474747;
`;

export const ValueText = styled.Text`
  margin-horizontal: 20px;
  font-size: 16px;
`;

export const SearchButton = styled.Pressable`
  margin-bottom: 20px;
  background: #f15454;
  align-items: center;
  justify-content: center;
  margin-horizontal: 20px;
  height: 50px;
  border-radius: 15px;
`;

export const SearchButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
`;
