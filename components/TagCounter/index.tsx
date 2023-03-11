import React from "react";
import { Flex, IconButton, Text } from "@react-native-material/core";
import { FlatList} from "react-native";

import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { Icon, Tdata, Titem } from "../../types/Carousell";
import DiceModal from "./DiceModal";
import { useGlobalContext } from "../../data/backgroundSets";

type TtagCounter = {
  data: Tdata[];
  points: { [x: string]: number };
  Reload: () => void;
  top?: boolean;
};

export default function TagCounter({ data, points, Reload, top=false }: TtagCounter) {
  const { bgSettingTop, bgSettingBottom } = useGlobalContext();
  const IconColor =
    (top ? bgSettingTop?.sliderIconColor : bgSettingBottom?.sliderIconColor) || "white";
    const NumberColor =
    (top ? bgSettingTop?.numberColor : bgSettingBottom?.numberColor) || "white";

  const [diceVisible, setDiceVisible] = React.useState<boolean>(false);

  function Tag({ item, index }: Titem) {
    return (
      <Flex direction="row" center key={index}>
        <MaterialCommunityIcons
          name={item.icon as Icon["materialCommunityName"]}
          size={24}
          color={IconColor}
        />
        <Text color={NumberColor} style={{fontWeight:'bold'}}>{`${points[item.label]}  `}</Text>
      </Flex>
    );
  }

  return (
    <Flex w={"100%"} direction="row" justify="evenly">
      <Flex border={1} radius={100} mr={5} borderColor={IconColor}>
        <IconButton
          onPress={() => setDiceVisible(true)}
          icon={<FontAwesome5 name="dice" size={24} color={IconColor}/>}
        />
      </Flex>
      <DiceModal diceVisible={diceVisible} setDiceVisible={setDiceVisible} />

      <Flex center>
        <FlatList horizontal data={data} renderItem={Tag} />
      </Flex>

      <Flex border={1} radius={100} borderColor={IconColor}>
        <IconButton
          onPress={() => Reload()}
          icon={
            <MaterialCommunityIcons name="reload" size={24} color={IconColor} />
          }
        />
      </Flex>
    </Flex>
  );
}
