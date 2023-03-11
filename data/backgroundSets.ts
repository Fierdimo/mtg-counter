//Images
import bg01 from "../assets/digital-art-1434763_1280.jpg";
import bg02 from "../assets/avenue-815297_1280.jpg";
import bg03 from "../assets/dark-art-2838965_1280.jpg";
import bg04 from "../assets/mountains-1303620_1280.jpg";
import bg05 from "../assets/drop-1004250_1280.jpg";
import bg06 from "../assets/forest-3877365_1280.jpg";
import bg07 from "../assets/forest-438432_1280.jpg";
import bg08 from "../assets/illustration-4955344_1280.jpg";
import bg09 from "../assets/mountains-139012_1280.jpg";
import bg10 from "../assets/mountains-862870_1280.jpg";
import bg11 from "../assets/nature-3151869_1280.jpg";
import bg12 from "../assets/road-1072821_1280.jpg";
import bg13 from "../assets/stingrays-3966533_1280.webp";
import bg14 from "../assets/swamp-7512474_1280.jpg";
import bg15 from "../assets/water-1330252_1280.jpg";
import bg16 from "../assets/water-3913925_1280.jpg";

//react
import {ImageSourcePropType } from "react-native";
import { createContext, useContext } from "react";

//types
type TBackgroundSetting = {
  image?: ImageSourcePropType;
  iconColor?: string;
  sliderIconColor?:string;
  numberColor?: string;
  textShadowColor?: string;
};

type GlobalContent = {
  bgSettingTop?: TBackgroundSetting;
  setBgSettingTop?: React.Dispatch<React.SetStateAction<TBackgroundSetting>>;
  bgSettingBottom?: TBackgroundSetting;
  setBgSettingBottom?: React.Dispatch<React.SetStateAction<TBackgroundSetting>>;
};

//context
const MyGlobalContext = createContext<GlobalContent>({
  bgSettingTop: {},
  setBgSettingTop: () => {},
  bgSettingBottom: {},
  setBgSettingBottom: () => {},
});
const useGlobalContext = () => useContext(MyGlobalContext);

const globalStyle: TBackgroundSetting[] = [
  {
    image: bg01,
    sliderIconColor:'black',
    textShadowColor: 'yellow'
  },
  {
    image: bg02,
    textShadowColor: 'green'
  },
  {
    image: bg03,
    textShadowColor: 'black'
  },
  {
    image: bg04,
    textShadowColor: 'red'
  },
  {
    image: bg05,
    textShadowColor: 'blue'
  },
  {
    image: bg06,
    textShadowColor: 'green'
  },
  {
    image: bg07,
    textShadowColor: 'green'
  },
  {
    image: bg08, 
    sliderIconColor:'black',
    textShadowColor: 'yellow'
  },
  {
    image: bg09,
    textShadowColor: 'red'
  },
  {
    image: bg10,
    textShadowColor: 'red'
  },
  {
    image: bg11,
    textShadowColor: 'green'
  },
  {
    image: bg12,
    textShadowColor: 'green'
  },
  {
    image: bg13,
    textShadowColor: 'blue'
  },
  {
    image: bg14,
    textShadowColor: 'black'
  },
  {
    image: bg15,
    textShadowColor: 'blue'
  },
  {
    image: bg16,
    textShadowColor: 'black'
  },
];

//function
function getBackgroundSet(code: number) {
  return globalStyle[code];
}

export {
  getBackgroundSet,
  useGlobalContext,
  MyGlobalContext,
  GlobalContent,
  TBackgroundSetting,
  globalStyle,
};
