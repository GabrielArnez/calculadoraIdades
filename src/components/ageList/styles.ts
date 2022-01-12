import styled from "styled-components/native";

interface ITextColored {
  color: string;
}

export const container = styled.View``;

export const textColored = styled.Text<ITextColored>`
  color: ${(props) => props.color};
  font-size: 16px;
`;
