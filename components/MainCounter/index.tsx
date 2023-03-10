import React from "react";
import { Flex } from "@react-native-material/core";
import SlideCounter from "../SlideCounter";
import TagCounter from "../TagCounter";
import { Iinfo } from "../../types/info";

import Config from "../../data/config.json";

export default function MainCounter({ rotate = true }: any) {
  //Force update screen
  const [, updateState] = React.useState(0);
  const forceUpdate = React.useCallback(() => updateState(Math.random()), []);
  const [reload, setReload] = React.useState<number>(0)

  const [info, setInfo] = React.useState<Iinfo>({
    data: Config,
    color: "white",
  });
  const [points, setPoints] = React.useState<{ [x: string]: number } | null>(
    null
  );

  React.useEffect(() => {
    const base: { [x: string]: number } = { base: 0 };
    info.data.forEach((item) => {
      const label = item.label;
      const value = item.value;

      base[`${label}`] = value;
    });

    setPoints(base);
  }, [reload]);

  function Reload(){
    setReload(Math.random());
  }

  return (
    <Flex
      center 
      p={10}
      style={[
        {},
        {
          transform: [{ rotate: rotate ? "180deg" : "0deg" }],
        },
      ]}
    >
      {points && (
        <Flex center>
          <TagCounter data={info.data} points={points} Reload={Reload} />
          <SlideCounter
            info={info}
            points={points}
            setPoints={setPoints}
            forceUpdate={forceUpdate}
          />
        </Flex>
      )}
    </Flex>
  );
}
