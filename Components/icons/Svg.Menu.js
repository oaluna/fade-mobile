import * as React from "react";
import PropTypes from "prop-types";
import { Image } from "react-native";
import Svg, { Path } from "react-native-svg";

const SvgMenu = ({ fill, size }) => (
  // <Svg height={size} width={size} viewBox="0 0 24 24">
  //   <Path
  //     d="M3 13h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2zm0-6h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2zm0 12h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2z"
  //     fill={fill}
  //   />
  // </Svg>
  <Image
    source={require("../../assets/images/icon-menu.png")}
    style={{ width: 32, height: 32, resizeMode: "contain" }}
  />
);

SvgMenu.defaultProps = {
  fill: "#000000",
  size: 24,
};

SvgMenu.propTypes = {
  // optional
  fill: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.number,
};

export default React.memo(SvgMenu);
