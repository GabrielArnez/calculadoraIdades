import React, { useState } from "react";
import { Alert, Modal, Text } from "react-native";
import { AgeList } from "../../components/AgeList";
import * as Styled from "./styles";

export const Home: React.FC = () => {
  const [listAges, setListAges] = useState<string[]>([]);
  const [age, setAge] = useState<string>();
  const [modalMedia, setModalMedia] = useState(false);

  const insertAges: () => void = () => {
    if (age && !age.includes(".") && !age.includes("-") && !age.includes(",")) {
      setListAges([...listAges, age]);
      setAge("");
    } else {
      Alert.alert("Insira um valor valido.");
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
            keyboardType="numeric"
            placeholder="Idade"
            value={age}
          />
          <Styled.button onPress={() => insertAges()}>
            <Styled.textDefault>Inserir</Styled.textDefault>
          </Styled.button>
        </Styled.inputContainer>
        <Styled.containerAges>
          <AgeList listAges={listAges} />
        </Styled.containerAges>
        <Styled.buttonCalc
          onPress={() => {
            if (listAges.length > 0) {
              setModalMedia(true);
            } else {
              Alert.alert("Insira ao menos um valor na lista.");
            }
          }}
        >
          <Styled.textDefault>Calcular Média</Styled.textDefault>
        </Styled.buttonCalc>
        <Styled.buttonCalc onPress={() => setListAges([])}>
          <Styled.textDefault>Limpar Lista</Styled.textDefault>
        </Styled.buttonCalc>
      </Styled.container>
    </>
  );
};
