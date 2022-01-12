import React, { useState } from "react";
import { Modal, Text } from "react-native";
import * as Styled from "./styles";

export const Home: React.FC = () => {
  const [listAges, setListAges] = useState<string[]>([]);
  const [age, setAge] = useState<string>();
  const [modalMedia, setModalMedia] = useState(false);

  const insertAges: () => void = () => {
    if (age) {
      setListAges([...listAges, age]);
      setAge("");
    }
  };

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalMedia}
        onRequestClose={() => {
          setModalMedia(modalMedia);
        }}
      >
        <Styled.modalContainer>
          <Styled.modalCenteredView>
            <Text>Quantidade: {listAges.length}</Text>
            <Text>
              Média:
              {listAges.length > 0 &&
                listAges
                  .map((ages) => Number(ages))
                  .reduce((acumulador, valorAtual) => acumulador + valorAtual)}
            </Text>
            <Styled.modalContainerButton>
              <Styled.buttonCloseModal onPress={() => setModalMedia(false)}>
                <Text>Fechar</Text>
              </Styled.buttonCloseModal>
            </Styled.modalContainerButton>
          </Styled.modalCenteredView>
        </Styled.modalContainer>
      </Modal>

      <Styled.container>
        <Styled.textAges>Idades</Styled.textAges>
        <Styled.inputContainer>
          <Styled.input
            onChangeText={(e) => setAge(e)}
            keyboardType="number-pad"
            placeholder="Idade"
            value={age}
          />
          <Styled.button onPress={() => insertAges()}>
            <Text>Inserir</Text>
          </Styled.button>
        </Styled.inputContainer>
        <Styled.containerAges>
          {listAges.map((age, index) => (
            <Text key={index}>{age}</Text>
          ))}
        </Styled.containerAges>
        <Styled.buttonCalc onPress={() => setModalMedia(true)}>
          <Text>Calcular Média</Text>
        </Styled.buttonCalc>
      </Styled.container>
    </>
  );
};
