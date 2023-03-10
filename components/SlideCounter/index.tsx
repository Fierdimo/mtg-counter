import React from "react";
import { Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
//types
import { Titem } from "../../types/Carousell";
import { Iinfo } from "../../types/info";
import StatusCard from "./StatusCard";

type tSlide = {
  info: Iinfo;
  points: { [x: string]: number };
  setPoints: React.Dispatch<
    React.SetStateAction<{[x: string]: number }|null>>;
  forceUpdate: () => void;
};

export default function SlideCounter({
  info,
  points,
  setPoints,
  forceUpdate,
}: tSlide) {
  // window constants
  const SLIDER_WIDTH = Dimensions.get("window").width;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

  const isCarousel = React.useRef(null);

  function statusCard({ item, index }: Titem) {
    return (
      <StatusCard
        data={{ item, index }}
        points={points}
        setPoints={setPoints}
        forceUpdate={forceUpdate}
      />
    );
  }

  return (
    <Carousel
      layout="default"
      vertical={false}
      ref={isCarousel}
      data={info.data}
      renderItem={statusCard}
      sliderWidth={SLIDER_WIDTH}
      itemWidth={ITEM_WIDTH}
      useScrollView={true}
    />
  );
}
