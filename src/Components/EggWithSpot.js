//import EggWithSpot from '../../../Components/EggWithSpot';

//<EggWithSpot />
import { colors } from "../Components/Theme";
import React from "react";
import { View } from "react-native";
import Svg, { Circle, Ellipse, Path } from "react-native-svg";

const ChickSvg = () => {
  return (
    <View>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 192 162"
        fill="none"
        position= "absolute"
      >
        <Path
          d="M27 31.5L2 49.5L27 59M27 31.5V59M27 31.5L66.5 1L129 67.5L190.5 49.5L154 98.5L111 115.5H88.75M27 59L48.5 115.5H66.5M66.5 115.5L64 146.5M66.5 115.5H88.75M64 146.5L48.5 152M64 146.5L53.5 161M64 146.5L66.5 161M88.75 115.5V146.5M88.75 146.5L83 161M88.75 146.5L98.5 161M88.75 146.5L77.5 152M64 71.5L93.5 98.5V71.5M48.5 31.5H64L56 41.5L48.5 31.5Z"
          stroke={colors.textoPreto}
          strokeWidth={5}
        />
      </Svg>
    </View>
  );
};

export default ChickSvg;
