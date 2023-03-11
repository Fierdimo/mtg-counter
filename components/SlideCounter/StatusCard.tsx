import React, { startTransition } from "react";
import { Flex, Text, Pressable, IconButton } from "@react-native-material/core";

//icons
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
//types
import { Icon, Titem } from "../../types/Carousell";
import { useGlobalContext } from "../../data/backgroundSets";

type TStatusCard = {
  data: Titem;
  points: { [x: string]: number };
  setPoints: React.Dispatch<
    React.SetStateAction<{ [x: string]: number } | null>
  >;
  forceUpdate: any;
  top: boolean;
};

export default function StatusCard({
  data,
  points,
  setPoints,
  forceUpdate,
  top,
}: TStatusCard) {
  const { item, index } = data;
  const { bgSettingTop, bgSettingBottom } = useGlobalContext();

  const IconColor =
    (top ? bgSettingTop?.iconColor : bgSettingBottom?.iconColor) || "white";
  const TextShadowColor =
    (top ? bgSettingTop?.textShadowColor : bgSettingBottom?.textShadowColor) ||
    "red";
  const NumberColor =
    (top ? bgSettingTop?.numberColor : bgSettingBottom?.numberColor) || "white";

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
        <Text
          variant="h1"
          style={{
            margin: 10,
            fontWeight: "bold",
            color:NumberColor,
            textShadowOffset: { height: 7, width: 0 },
            textShadowColor: TextShadowColor,
            textShadowRadius: 20,
          }}
        >
          {points[item.label]}
        </Text>
      </Pressable>

      <Flex center>
        <MaterialCommunityIcons
          name={item.icon as Icon["materialCommunityName"]}
          size={24}
          color={NumberColor}
        />
      </Flex>
      <Text
        style={{
          margin: 10,
          fontWeight: "bold",
          color: NumberColor,
          textShadowOffset: { height: 2, width: 2 },
          textShadowColor: TextShadowColor,
          textShadowRadius: 3,
        }}
      >
        {item.label}
      </Text>

      <Flex position="absolute" top={"40%"} right={"15%"} center>
        <IconButton
          onPress={() => addPoints(item.label, 1)}
          icon={<AntDesign name="pluscircleo" size={47} color={IconColor} />}
        />
        <Flex
          border={3}
          radius={100}
          position="absolute"
          top={"100%"}
          right={"-85%"}
          style={{ borderColor: IconColor }}
        >
          <IconButton
            icon={
              <Text variant="h6" color={IconColor}>
                +5
              </Text>
            }
            onPress={() => addPoints(item.label, 5)}
          />
        </Flex>
      </Flex>

      <Flex position="absolute" top={"40%"} left={"15%"}>
        <IconButton
          onPress={() => addPoints(item.label, -1)}
          icon={<AntDesign name="minuscircleo" size={47} color={IconColor} />}
        />
        <Flex
          border={3}
          radius={100}
          position="absolute"
          top={"100%"}
          left={"-85%"}
          style={{ borderColor: IconColor }}
        >
          <IconButton
            icon={
              <Text variant="h6" color={IconColor}>
                -5
              </Text>
            }
            onPress={() => addPoints(item.label, -5)}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
