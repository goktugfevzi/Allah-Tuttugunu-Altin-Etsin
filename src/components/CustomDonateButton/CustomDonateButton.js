import React from "react";
import { TouchableOpacity, Text, View, Dimensions } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";

const { width } = Dimensions.get("window");
const CustomButton = ({ onPress, text, isSelected, backgroundColor }) => {
  const renderCanText = () => {
    if (
      text === "5 TL" ||
      text === "10 TL" ||
      text === "20 TL" ||
      text === "50 TL" ||
      text === "100 TL"
    ) {
      return text.split(" ")[0];
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isSelected && { backgroundColor: backgroundColor },
      ]}
      onPress={onPress}
    >
      <View style={styles.buttonContent}>
        <Text style={styles.buttonNumber}>{text}</Text>
        <View style={styles.iconContainer}>
          <FontAwesome name="heart" size={12} color="white" />
          <Text
            style={[
              styles.buttonNumber,
              { marginHorizontal: width * 0.01, fontSize: 15 },
            ]}
          >
            {renderCanText()}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
