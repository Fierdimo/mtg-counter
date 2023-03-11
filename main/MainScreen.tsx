import React from "react";
import { Flex } from "@react-native-material/core";
import Constants from "expo-constants";

import MainCounter from "../components/MainCounter";
import BannerAds from "../components/BannerAds";

import {
  MyGlobalContext,
  TBackgroundSetting,
  getBackgroundSet,
} from "../data/backgroundSets";
import { MenuProvider } from "react-native-popup-menu";

export default function MainScreen() {
  const [bgSettingTop, setBgSettingTop] = React.useState<TBackgroundSetting>(
    getBackgroundSet(12)
  );
  const [bgSettingBottom, setBgSettingBottom] =
    React.useState<TBackgroundSetting>(getBackgroundSet(9));

  return (
    <MenuProvider>
      <Flex fill center style={{backgroundColor:'black'}} >
        <MyGlobalContext.Provider value={{ bgSettingTop, setBgSettingTop }}>
          <Flex center fill>
            <MainCounter rotate />
          </Flex>
        </MyGlobalContext.Provider>

        <Flex center>
          <BannerAds bannerID="ca-app-pub-3720641687450394/4634519008" />
        </Flex>

        <MyGlobalContext.Provider
          value={{ bgSettingBottom, setBgSettingBottom }}
        >
          <Flex center fill>
            <MainCounter />
          </Flex>
        </MyGlobalContext.Provider>
      </Flex>
    </MenuProvider>
  );
}
