import { View, Text, Modal, Pressable } from "react-native";
import React from "react";
import { Flex } from "@react-native-material/core";

import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { Icon } from "../../types/Carousell";

type TDice = {
  diceVisible: boolean;
  setDiceVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function DiceModal({ diceVisible, setDiceVisible }: TDice) {
  const [dice, setDice] =
    React.useState<Icon["materialCommunityName"]>("dice-1");
  let nIntervId: NodeJS.Timer;

  function rndDice() {
    const number = Math.ceil(Math.random() * 6);
    React.startTransition(() =>
      setDice(`dice-${number}` as Icon["materialCommunityName"])
    );
  }

  function rollDice() {
    if (!nIntervId) {
      nIntervId = setInterval(rndDice, 100);
    }
    function stop() {
      clearInterval(nIntervId);
    }
    setTimeout(stop, 1000);
  }
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={diceVisible}
      onRequestClose={() => {
        setDiceVisible(false);
      }}
    >
      <Pressable
        style={{
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => setDiceVisible(false)}
      >
        <Pressable onPress={() => rollDice()}>
          <Flex bg={"white"} border={2} p={40} radius={25} center w={180}>
            <MaterialCommunityIcons name={dice} size={100} color="black" />
          </Flex>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
