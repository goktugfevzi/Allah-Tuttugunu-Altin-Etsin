import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  button: {
    width: width * 0.14, // Genişliği ekran genişliğinin %40'ı kadar ayarladım
    height: 60,
    borderRadius: 5,
    marginHorizontal: width * 0.01,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#CCCCCC",
  },
  buttonContent: {
    alignItems: "center",
    marginTop: -height * 0.01,
  },
  buttonNumber: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  iconContainer: {
    flexDirection: "row",
    marginLeft: width * 0.01,
    alignItems: "center",
  },
});

export default styles;