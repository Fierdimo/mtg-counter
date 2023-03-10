import React, { startTransition } from "react";
import {
  Flex,
  Text,
  Pressable,
  IconButton,
  Button,
} from "@react-native-material/core";

//icons
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
//types
import { Icon, Titem } from "../../types/Carousell";

type TStatusCard = {
  data: Titem;
  points: { [x: string]: number };
  setPoints: React.Dispatch<
    React.SetStateAction<{ [x: string]: number } | null>
  >;
  forceUpdate: any;
};

export default function StatusCard({
  data,
  points,
  setPoints,
  forceUpdate,
}: TStatusCard) {
  const { item, index } = data;

  function addPoints(label: string, value: number) {
    const pointsadded = points[label] + value;
    const lastPoints = points;
    lastPoints[label] = pointsadded;
    startTransition(() => setPoints(lastPoints));
    forceUpdate();
  }

  function backToStart(label: string) {
    const newPoints = points;
    newPoints[label] = item.value;
    startTransition(() => setPoints(newPoints));
    forceUpdate();
  }
  return (
    <Flex key={index} center mt={0} position="relative">
      
      {/** main board */}
      <Pressable
        pressEffect="none"
        onLongPress={() => backToStart(item.label)}
        onPress={() => addPoints(item.label, 1)}
      >
        <Text variant="h1">{points[item.label]}</Text>
      </Pressable>

      <Flex center>
        <MaterialCommunityIcons
          name={item.icon as Icon["materialCommunityName"]}
          size={24}
          color="black"
        />
      </Flex>
      <Text>{item.label}</Text>

      <Flex position="absolute" top={"40%"} right={"15%"} center>
        <IconButton 
          onPress={() => addPoints(item.label, 1)}
          icon={<AntDesign name="pluscircleo" size={47} color="black" />}
        />
        <Flex
          border={3}
          radius={100}
          position="absolute"
          top={"100%"}
          right={"-85%"}
        >
          <IconButton
            icon={<Text variant="h6">+5</Text>}
            onPress={() => addPoints(item.label, 5)}
          />
        </Flex>
      </Flex>

      <Flex position="absolute" top={"40%"} left={"15%"}>
        <IconButton
          onPress={() => addPoints(item.label, -1)}
          icon={<AntDesign name="minuscircleo" size={47} color="black" />}
        />
        <Flex
          border={3}
          radius={100}
          position="absolute"
          top={"100%"}
          left={"-85%"}
        >
          <IconButton
            icon={<Text variant="h6">-5</Text>}
            onPress={() => addPoints(item.label, -5)}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
