import {

  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  Pressable,
  Animated
} from "react-native";
import { fonts } from "../../Constants";
import styles from './styles'

import React from "react";

const { height, width } = Dimensions.get("screen");

const LoadingScreen = ({ navigation }) => {
  const [imgMarginTop, setImgMarginTop] = React.useState(new Animated.Value(300))

  React.useEffect(()=> {
    Animated.timing(imgMarginTop, { toValue: 250 }).start()
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://images.pexels.com/photos/12491566/pexels-photo-12491566.jpeg",
        }}
        style={{ resizeMode: "cover", height: height, width: width}}
      >
        <Animated.Image useNativeDriver="true"
          source={{
            uri: "https://res.cloudinary.com/dgdnpkfun/image/upload/v1668379250/fade-logo_dr02kn.png",
          }}
          style={[styles.image, {marginTop: imgMarginTop, resizeMode:"contain"}]}
        />
        <View style={{alignSelf:'center', width: 300}}>
        <View style={styles.buttonGoogle}>
          <Pressable onPress={() => navigation.navigate("register")}>
            <Text style={styles.text}>Get Started</Text>
          </Pressable>
        </View>
        <View style={styles.button}>
          <Pressable onPress={() => navigation.navigate("login")}>
            <Text style={[styles.text, {color: '#fff'}]}>Sign In</Text>
          </Pressable>
        </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoadingScreen;

// const styles = StyleSheet.create({
//   container: {
//     marginLeft: 0,
//     marginTop: 0,
//   },
//   textBody: {
//     fontSize: 24,
//   },
//   image: {
//     width: 300,
//     height: 90,
//     marginLeft: 40,
//   },
//   getStartedButton: {
//     width: width - 50,
//     backgroundColor: '#777777',
//     borderColor: '#2afbff',
//     borderWidth: 1,
//     height: 50,
//     textAlign:'center',
//     marginTop: 400,
//     marginHorizontal: 30,
//     display:'flex',
//     flexDirection:'column',
//     alignItems:'center',
//     padding: 15,
//     borderRadius: 25,
//     elevation: 3,
//   },
//   alreadyHaveAccountButton: {
//     width: width - 50,
//     backgroundColor: '#000000',
//     borderColor: '#2afbff',
//     borderWidth: 1,
//     height: 50,
//     textAlign:'center',
//     marginTop: 15,
//     marginHorizontal: 30,
//     display:'flex',
//     flexDirection:'column',
//     alignItems:'center',
//     padding: 15,
//     borderRadius: 25,
//     elevation: 3,
//   },
//   text: {
  
//     fontSize: 25,
//     lineHeight: 25,
//     fontWeight: "light",
//     letterSpacing: 0.25,
//     color: "white",
//   }
// });
