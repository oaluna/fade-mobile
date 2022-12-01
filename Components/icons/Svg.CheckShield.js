import * as React from "react";
import PropTypes from "prop-types";
import { View, Image, Pressable } from "react-native";
import IconUserShield from "../../assets/images/icon-user-shield.png";
import Svg, { Path } from "react-native-svg";


const SvgCheckShield = ({ fill, size }) => (
  // <Svg height={size} width={size} viewBox="0 0 24 24" style={{backgroundColor:'blue', borderRadius: 50 }}>
  //   <Path
  //     d="M12 0C8.629 2.866 6.516 3 3 3v11.535c0 4.603 3.203 5.804 9 9.465 5.797-3.661 9-4.862 9-9.465V3c-3.516 0-5.629-.134-9-3zm-.548 15L8 11.638l1.237-1.239 2.215 2.123 4.382-4.475 1.238 1.238L11.452 15z"
  //     fill={fill}
  //   />
  // </Svg>
  <Pressable>
    <Image source={IconUserShield} style={{resizeMode: "contain", width: 32, height: 32}}/>
  </Pressable>
);

SvgCheckShield.defaultProps = {
  fill: "white",
  size: 32,
};

SvgCheckShield.propTypes = {
  // optional
  fill: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.number,
};

export default React.memo(SvgCheckShield);
