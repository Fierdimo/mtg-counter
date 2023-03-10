import React from "react";
import { Flex, IconButton, Text } from "@react-native-material/core";
import { FlatList, Modal } from "react-native";

import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { Icon, Tdata, Titem } from "../../types/Carousell";
import DiceModal from "./DiceModal";

type TtagCounter = {
  data: Tdata[];
  points: { [x: string]: number };
  Reload: ()=> void;
};

export default function TagCounter({ data, points, Reload }: TtagCounter) {

  const [diceVisible, setDiceVisible] = React.useState<boolean>(false)

  function Tag({ item, index }: Titem) {
    return (
      <Flex direction="row" center key={index}>
        <MaterialCommunityIcons
          name={item.icon as Icon["materialCommunityName"]}
          size={24}
          color="black"
        />
        <Text>{`${points[item.label]}  `}</Text>
      </Flex>
    );
  }

  return (
    <Flex w={"100%"} direction="row" justify="evenly">
      <Flex border={1} radius={100} mr={5}>
        <IconButton
        onPress={()=>setDiceVisible(true)}
          icon={<FontAwesome5 name="dice" size={24} color="black" />}
        />
      </Flex>
      <DiceModal diceVisible={diceVisible} setDiceVisible={setDiceVisible} />

      <Flex center>
        <FlatList horizontal data={data} renderItem={Tag} />
      </Flex>

      <Flex border={1} radius={100} >
        <IconButton
        onPress={()=> Reload()}
          icon={<MaterialCommunityIcons name="reload" size={24} color="black" />}
        />
      </Flex>
    </Flex>
  );
}
