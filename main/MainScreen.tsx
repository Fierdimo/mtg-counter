import React from "react";
import { Flex, Text } from "@react-native-material/core";
import Constants from "expo-constants";

import MainCounter from "../components/MainCounter";
import BannerAds from "../components/BannerAds";

export default function MainScreen() {
  return (
    <Flex fill center mt={Constants.statusBarHeight}>      
      <Flex center fill>
        <MainCounter />
      </Flex>
      <Flex center>
        <BannerAds bannerID="ca-app-pub-1013951831230804/6069261891" />
      </Flex>
      <Flex center fill>
        <MainCounter rotate={false} />
      </Flex>
    </Flex>
  );
}
