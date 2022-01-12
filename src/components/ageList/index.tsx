import React from "react";
import { Text, View } from "react-native";

import * as Styled from "./styles";

interface IAgeList {
  listAges: string[];
}

export const AgeList: React.FC<IAgeList> = ({ listAges }: IAgeList) => {
  const setColor = (age: number) => {
    if (age < 20) {
      return "#2BB1DB";
    } else if (age >= 20 && age <= 40) {
      return "#824DF2";
    } else {
      return "#E48A1F";
    }
  };

  return (
    <Styled.container>
      {listAges.map((age, index) => (
        <Styled.textColored key={index} color={setColor(+age)}>
          {age}
        </Styled.textColored>
      ))}
    </Styled.container>
  );
};
