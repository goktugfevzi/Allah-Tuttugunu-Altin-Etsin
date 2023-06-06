import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    paddingTop: height * 0.1,
  },
  avatarContainer: {
    width: width * 0.35,
    height: width * 0.35,
    borderRadius: (width * 0.35) / 2,
    backgroundColor: "black",
    marginBottom: height * 0.03,
    overflow: "hidden",
  },
  avatar: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  aboutText: {
    marginVertical: height * 0.03,
    fontSize: width * 0.05,
    fontWeight: "bold",
    color: "white",
    marginBottom: height * 0.02,
  },
  iconContainer: {
    flexDirection: "row",
    marginVertical: height * 0.4,
    marginBottom: height * 0.02,
  },
  icon: {
    marginHorizontal: width * 0.04,
  },
});
