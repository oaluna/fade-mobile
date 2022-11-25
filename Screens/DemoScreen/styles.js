import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eeffff"
  },
  loginBtn: {
      backgroundColor: '#333333',
      marginLeft: 30,
      marginRight: 30,
      marginTop: 20,
      height: 48,
      width: 350,
      borderRadius: 30,
      borderWidth: 2,
      borderColor: "#2afbff",
      alignItems: "center",
      justifyContent: 'center',
      elevation: 2
  },
  startBtn: {
      backgroundColor: '#2afbff',
      marginLeft: 30,
      marginRight: 30,
      marginTop: 20,
      height: 48,
      width: 350,
      borderRadius: 40,
      alignItems: "center",
      justifyContent: 'center',
      elevation: 2
  },
  startBtnText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#000000"
  },
  loginBtnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#ffffff"
    }
});