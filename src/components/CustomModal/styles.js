import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modal: {
    backgroundColor: "#F2F2F2", // Gri tonları
    width: width * 0.9,
    padding: width * 0.04,
    borderRadius: 5,
  },
  modalText: {
    fontSize: 18,
    marginBottom: height * 0.02,
    color: "#333333", // Gri tonlarına uyumlu renk
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: height * 0.02,
  },
  cancelButton: {
    flex: 1,
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF5555", // Kırmızı tonları
    marginRight: 10,
  },
  donateButton: {
    flex: 1,
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#55DD55", // Yeşil tonları
  },
});

export default styles;