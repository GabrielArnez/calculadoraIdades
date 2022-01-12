import styled from "styled-components/native";

export const container = styled.SafeAreaView`
  flex: 1;
  background-color: #2c3e50;
  padding: 30px 25px;
`;

export const textAges = styled.Text`
  color: #fff;
  font-size: 23px;
  margin-bottom: 15px;
  margin-top: 25px;
`;

export const inputContainer = styled.View`
  flex-direction: row;
  height: 40px;
  margin-bottom: 15px;
`;

export const input = styled.TextInput`
  background-color: #ffffff;
  flex: 4;
`;

export const button = styled.TouchableHighlight`
  flex: 2;
  background-color: #1abc9c;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
`;

export const containerAges = styled.ScrollView`
  background-color: #fff;
  flex: 10;
  padding: 15px;
`;

export const buttonCalc = styled.TouchableHighlight`
  background-color: #3498db;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

export const textDefault = styled.Text`
  color: #ffffff;
  font-size: 18px;
`;

//Styled Modal
export const modalContainer = styled.View`
  background-color: "rgba(0,0,0,0.8)";
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const modalCenteredView = styled.View`
  background-color: #ffffff;
  width: 50%;
  border-radius: 5px;
  padding: 10px;
  height: 100px;
`;

export const modalContainerButton = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const buttonCloseModal = styled.TouchableHighlight`
  background-color: #1abc9c;
  padding: 5px 15px;
  border-radius: 5px;
`;
