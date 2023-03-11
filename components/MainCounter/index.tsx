import React from "react";
import { Image, ImageBackground } from "react-native";
import { Flex, IconButton, Text } from "@react-native-material/core";
import SlideCounter from "../SlideCounter";
import TagCounter from "../TagCounter";
import { Iinfo } from "../../types/info";

import cityBlessing from "../../assets/citysblessing.jpg";
import monarch from "../../assets/The_Monarch.jpg";

import Config from "../../data/config.json";
import { useGlobalContext } from "../../data/backgroundSets";
import BgSelector from "./bgSelector";

type TMAinCounter = {
  rotate?: boolean;
};

export default function MainCounter({ rotate = false }: TMAinCounter) {
  //Force update screen
  const [, updateState] = React.useState(0);
  const forceUpdate = React.useCallback(() => updateState(Math.random()), []);
  const [reload, setReload] = React.useState<number>(0);
  const [myCityBlessing, setCityBlessing] = React.useState(false)
  const [imTheMonarch, setMeAsMonarch] = React.useState(false)


  const { bgSettingTop, bgSettingBottom } = useGlobalContext();

  const [info, setInfo] = React.useState<Iinfo>({
    data: Config,
  });
  const [points, setPoints] = React.useState<{ [x: string]: number } | null>(
    null
  );

  const bgImage = rotate ? bgSettingTop?.image : bgSettingBottom?.image
  const bgColor = (rotate ? bgSettingTop?.iconColor : bgSettingBottom?.iconColor )|| "blue"


  React.useEffect(() => {
    const base: { [x: string]: number } = { base: 0 };
    info.data.forEach((item) => {
      const label = item.label;
      const value = item.value;

      base[`${label}`] = value;
    });

    setPoints(base);
  }, [reload]);

  function Reload() {
    setReload(Math.random());
  }

  return (
    <Flex
      center
      style={[
        {},
        {
          transform: [{ rotate: rotate ? "180deg" : "0deg" }],
        },
      ]}
    >
      {points && (
        <Flex>
          <ImageBackground
            source={bgImage}
          >
            {/** Tag Counter */}
            <Flex p={10}>
              <TagCounter
                data={info.data}
                points={points}
                Reload={Reload}
                top={rotate ? true : false}
              />
            </Flex>
            {/**Slide Counter */}
            <Flex center fill>
              <SlideCounter
                info={info}
                points={points}
                setPoints={setPoints}
                forceUpdate={forceUpdate}
                top={rotate ? true : false}
              />
            </Flex>
            {/** Backgrounde selector */}
            <Flex
              inline
              style={{ position: "absolute", left: "5%", top: "40%" }}
            >
              <BgSelector
                top={rotate ? true : false}
                bottom={rotate ? false : true}
              />
            </Flex>
            {/** City blessing */}
            <Flex
              inline
              style={{ position: "absolute", right: "2%", top: "40%", borderColor: (myCityBlessing?bgColor: 'black'), borderWidth:3, borderRadius:100 }}
            >
              <IconButton
                onPress={() => setCityBlessing(!myCityBlessing)}                
                icon={
                  <Image
                    style={{ height: 50, width: 50 }}
                    source={cityBlessing}
                  />
                }
              />
            </Flex>
            {/** The monarch */}
            <Flex
              inline
              style={{ position: "absolute", right: "2%", top: "22%", borderColor: (imTheMonarch?bgColor: 'black'), borderWidth:3, borderRadius:100 }}
            >
              <IconButton
                onPress={() => setMeAsMonarch(!imTheMonarch)}                
                icon={
                  <Image
                    style={{ height: 50, width: 50 }}
                    source={monarch}
                  />
                }
              />
            </Flex>
          </ImageBackground>
        </Flex>
      )}
    </Flex>
  );
}
