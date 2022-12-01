import React from "react";
import PropTypes from "prop-types";
import { Animated, Modal, StyleSheet, View } from "react-native";
import { device } from "../Constants";

// components
import ModalBackdrop from "./ModalBackdrop";
import RideTypeItem from "./RideTypeItem";

const SelectRideType = ({ data, onClose, onSelect, visible }) => {
  const dataArray = Object.keys(data);
  const top = new Animated.Value(200);

  Animated.timing(top, {
    duration: 400,
    toValue: 0,
    useNativeDriver: false,
  }).start();

  return (
    <Modal
      animationType="fade"
      onRequestClose={onClose}
      transparent
      visible={visible}
    >
      <ModalBackdrop style={styles.close} onPress={onClose} />

      <Animated.View style={[styles.container, { top }]}>
        {dataArray.map((key, index) => {
          let separator = null;
          if (dataArray.length !== index + 1) {
            separator = <View style={styles.separator} />;
          }

          return (
            <React.Fragment key={key}>
              <RideTypeItem
                image={data[key].imageLg}
                onPress={() => {
                  onSelect(key);
                  onClose();
                }}
                text={data[key].text}
              />
              {separator}
            </React.Fragment>
          );
        })}
      </Animated.View>
    </Modal>
  );
};

SelectRideType.propTypes = {
  //  required
  data: PropTypes.shape({
    image: PropTypes.string,
    imageLg: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 0,
    marginTop: 0,
    width: "100%",
  },
  separator: {
    backgroundColor: "grey",
    height: 1,
    width: "100%",
  },
  activeOpacity: 0.7,
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  flexCenter: {
    alignItems: "center",
    justifyContent: "center",
  },
  flexRow: {
    alignItems: "center",
    flexDirection: "row",
  },
  flexRowSpace: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  navHeaderStyle: {
    backgroundColor: "#000000",
    borderBottomWidth: 0,
    elevation: 0,
  },
});

export default SelectRideType;
