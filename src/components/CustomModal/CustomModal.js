import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import styles from "./styles";
import CustomButton from "../CustomDonateButton/CustomDonateButton";
import { increaseHealth } from "../../context/healthSlice";
import { useDispatch } from "react-redux";

const CustomModal = ({ visible, onClose }) => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [result, setResult] = React.useState(null);
  const [isConnected, setIsConnected] = React.useState(false);
  const [isCancelled, setIsCancelled] = React.useState(false);
  const dispatch = useDispatch();
  
  //       "com.tuttugunAltinOlsun.item5",
  //       "com.tuttugunAltinOlsun.item10",
  //       "com.tuttugunAltinOlsun.item20",
  //       "com.tuttugunAltinOlsun.item50",
  //       "com.tuttugunAltinOlsun.item100"

  const handleDonate = async () => {
    if (selectedButton === null) {
      Alert.alert("Uyarı", "Bağış miktarını seçiniz.");
      return;
    }


  };

  const handleButtonPress = (amount) => {
    if (selectedButton === amount) {
      setSelectedButton(null);
    } else {
      setSelectedButton(amount);
    }
  };

  return (
    visible && (
      <View style={styles.modal}>
        <Text style={styles.modalText}>Bağış miktarını seçin:</Text>
        <View style={styles.buttonContainer}>
          <CustomButton
            text="5 TL"
            onPress={() => handleButtonPress("5")}
            isSelected={selectedButton === "5"}
            backgroundColor="#ff6b6b"
          />
          <CustomButton
            text="10 TL"
            onPress={() => handleButtonPress("10")}
            isSelected={selectedButton === "10"}
            backgroundColor="#ffa94d"
          />
          <CustomButton
            text="20 TL"
            onPress={() => handleButtonPress("20")}
            isSelected={selectedButton === "20"}
            backgroundColor="#ffd700"
          />
          <CustomButton
            text="50 TL"
            onPress={() => handleButtonPress("50")}
            isSelected={selectedButton === "50"}
            backgroundColor="#7bed9f"
          />
          <CustomButton
            text="100 TL"
            onPress={() => handleButtonPress("100")}
            isSelected={selectedButton === "100"}
            backgroundColor="#00bfff"
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
            <Text style={styles.buttonText}>İptal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.donateButton} onPress={handleDonate}>
            <Text style={styles.buttonText}>Bağışla</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  );
};

export default CustomModal;
