import {
  MaterialIcons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";

export type Icon = {
  materialIconName: keyof typeof MaterialIcons.glyphMap;
  materialCommunityName: keyof typeof MaterialCommunityIcons.glyphMap;
  antDesignName: keyof typeof AntDesign.glyphMap;
};

export type Tdata = {
  label: string;
  icon: string;
  value: number;
};
export type Titem = { item: Tdata; index: number };
