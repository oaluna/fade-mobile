import * as React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, device, fonts, gStyle } from '../Constants';

// icons


const ModalHeader = ({ style, text }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        activeOpacity={gStyle.activeOpacity}
        hitSlop={{ bottom: 10, left: 10, right: 10, top: 10 }}
        onPress={() => navigation.goBack(null)}
        style={styles.containerIconRight}
      >
        <Image source={require('../assets/images/close.png')} />
      </TouchableOpacity>
      {text && <Text style={styles.header}>{text}</Text>}
    </View>
  );
};

ModalHeader.defaultProps = {
  style: {},
  text: null
};

ModalHeader.propTypes = {
  // optional
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.object
  ]),
  text: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    paddingHorizontal: 24,
    paddingTop:device.iPhoneNotch ? 48 : 24
  },
  containerIconRight: {
    width: 20
  },
  header: {
    color: colors.white,
    fontFamily: fonts.uberMedium,
    fontSize: 28,
    paddingVertical: 16
  }
});

export default ModalHeader;