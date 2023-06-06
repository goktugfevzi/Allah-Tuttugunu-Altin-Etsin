import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  title: {
    fontSize: width * 0.06,
    fontWeight: "bold",
    color: "white",
    marginBottom: height * 0.03,
  },
  gmailContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: height * 0.05,
  },
  gmailIcon: {
    marginRight: width * 0.02,
  },
  button: {
    backgroundColor: "#4285F4",
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.08,
    borderRadius: width * 0.01,
    marginBottom: height * 0.02,
  },
  healthContainer: {
    position: "absolute",
    top: height * 0.1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  heartIcon: {
    marginRight: 5,
  },
  healthText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
  },
  buttonText: {
    fontSize: width * 0.04,
    color: "white",
    fontWeight: "bold",
  },
  donationButton: {
    backgroundColor: "#ff6b6b",
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.08,
    borderRadius: width * 0.01,
    marginBottom: height * 0.02,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "white",
    overflow: "hidden",
    elevation: 5,
    transform: [{ scale: 1 }],
  },
  donationButtonText: {
    fontSize: width * 0.04,
    color: "white",
    fontWeight: "bold",
  },
  disabledButton: {
    opacity: 0.5,
  },
  aboutIconContainer: {
    position: "absolute",
    top: height * 0.02,
    right: width * 0.02,
    zIndex: 1,
    padding: width * 0.03,
  },
  aboutIcon: {
    fontSize: width * 0.06,
    color: "white",
  },
});
