import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors, device, fonts } from '../Constants';

const CustomDrawerContent = () => (
  <View style={styles.container}>
  <Image source={require('../assets/images/fade-logo.png')} style={{resizeMode: 'contain', width: 100, height: 48}}/>
    <View style={styles.containerVersion}>
    <Text>1.0.0</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60
  },
  containerVersion: {
    bottom: device.iPhoneNotch ? 40 : 16,
    paddingHorizontal: 38,
    position: 'absolute',
    width: '100%'
  },
  versionText: {
    color: colors.grey,
    fontFamily: fonts.comfortaaRegular,
    fontSize: 20,
    textAlign: 'right'
  }
});

export default CustomDrawerContent;