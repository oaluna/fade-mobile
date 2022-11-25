import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333"
  },
   image: {
    height: 100,
    width: 100,
    marginRight: 15
  },
  logoTitle: {
    marginTop: 30,
    fontSize: 24,
    textAlign: "center",
    width: 300,
    color: "white",
    fontWeight: "800"
  },
  logoSubTitle: {
      textAlign: 'center',
      marginTop: 20,
      width: 300,
      fontSize: 15,
      fontWeight: "800",
      color: "#ffffff"

  },
    button: {
        backgroundColor: '#333333',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        width: 350,
        borderRadius: 50,
        borderColor: '#2afbff',
        borderWidth: 1,
        alignItems: "center",
        justifyContent: 'center',
        elevation: 2
    },
    buttonOpacity: {
        backgroundColor: '#2afbff',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        width: 350,
        opacity: .25,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: 'center',
        elevation: 2
    },
    buttonTitle: {
      fontSize: 24, 
      color: 'white'
    }
});