import { Dimensions, Platform } from 'react-native';

// android
const android = Platform.OS === 'android';

// is iPhoneX, iPhoneXs, iPhoneXr, iPhoneXs Max
const iOS = Platform.OS === 'ios';
const web = Platform.OS === 'web';
const windowInfo = Dimensions.get('window');
const { height, width } = windowInfo;
const aspectRatio = height / width;

// is iPad
const { isPad } = Platform;

// is iPhone with Notch?
// iPhoneX, iPhoneXs, iPhoneXr, iPhoneXs Max, iPhone 11 & 12
let iPhoneNotch = false;
if (iOS) {
  // iphone screen breakdown
  // https://blog.calebnance.com/development/iphone-ipad-pixel-sizes-guide-complete-list.html
  if (height === 812 || height === 844 || height === 896 || height === 926) {
    iPhoneNotch = true;
  }
}

const iconSize = width * 0.07;

export default {
  android,
  aspectRatio,
  height,
  iconSize,
  iOS,
  iPhoneNotch,
  isPad,
  web,
  width,
};
