import { Image, Dimensions } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers,
} from "react-native-popup-menu";
import {
  globalStyle,
  TBackgroundSetting,
  useGlobalContext,
} from "../../data/backgroundSets";

type TBGselector = {
  top?: boolean;
  bottom?: boolean;
};

export default function BgSelector({
  top = false,
  bottom = false,
}: TBGselector) {
  const { setBgSettingTop, setBgSettingBottom } = useGlobalContext();
  const { Popover } = renderers;
  const { bgSettingTop, bgSettingBottom } = useGlobalContext();
  const IconColor =
    (top ? bgSettingTop?.iconColor : bgSettingBottom?.iconColor) || "white";

  function triggerBG(bgSettings: TBackgroundSetting) {
    if (top && setBgSettingTop) setBgSettingTop(bgSettings);
    if (bottom && setBgSettingBottom) setBgSettingBottom(bgSettings);
  }

  const imageSide =
    (Dimensions.get("screen").height / globalStyle.length) * 0.66;

  return (
    <Menu renderer={Popover}>
      <MenuTrigger>
      <Entypo name="images" size={30} color={IconColor} />
      </MenuTrigger>
      <MenuOptions
        customStyles={{
          optionsContainer: {
            backgroundColor: IconColor,
            borderRadius: 20,
            width: imageSide * 1.3, 
          } 
        }}
      >
        {globalStyle.map((item: TBackgroundSetting, index: number) => {
          return (
            <MenuOption onSelect={() => triggerBG(item)} key={index}>
              <Image
                source={item.image}
                style={[{
                  height: imageSide,
                  width: imageSide,
                  borderRadius: 100,
                },{
                  transform: [{ rotate: top ? "180deg" : "0deg" }],
                }]}
              />
            </MenuOption>
          );
        })}
      </MenuOptions>
    </Menu>
  );
}
