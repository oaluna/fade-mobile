import * as React from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, fonts, images } from '../Constants';


const RequestRideType = ({ image, onPress, text }) => (
  <TouchableOpacity
    activeOpacity={styles.activeOpacity}
    onPress={onPress}
    style={styles.container}
  >
    <Image source={images[image]} style={styles.image} />
    <Text style={styles.text}>{text}</Text>
    <View style={styles.iconArrow}>
      <Image source={require('../assets/images/icon-chevron-down.png')} style={{resizeMode:'contain', width:20, height: 20}}/>
    </View>
  </TouchableOpacity>
);

RequestRideType.propTypes = {
  // required
  image: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 26,
    flexDirection: 'row',
    padding: 2,
    shadowColor: 'black',
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 8
  },
  image: {
    borderRadius: 18,
    height: 34,
    resizeMode: 'contain',
    width: 34
  },
  text: {
    fontFamily: fonts.comfortaaLight,
    fontSize: 16,
    paddingHorizontal: 8
  },
  iconArrow: {
    marginRight: 6,
    marginTop: 4
  }
});

export default RequestRideType;