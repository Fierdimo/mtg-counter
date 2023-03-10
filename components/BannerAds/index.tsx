import { View } from "react-native";
import React from "react";

type TBanner = {
  bannerID: string;
};
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

export default function BannerAds({ bannerID }: TBanner) {
  const UnitBannerID =
    bannerID.toUpperCase() == "TEST" ? TestIds.BANNER : bannerID;

  const Banner = React.useCallback(() => {
    return (
      <BannerAd
        unitId={UnitBannerID}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
    );
  }, [UnitBannerID]);

  return (
    <View >
       <Banner />
    </View>
  );
}
