import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Animated, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { resetAllGold, checkAllGold } from "../../context/imageSlice";
import { decreaseHealth } from "../../context/healthSlice";
import FlashMessage, { showMessage } from "react-native-flash-message";
import CustomModal from "../../components/CustomModal/CustomModal";

const Credit = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const allGold = useSelector((state) => state.image.allGold);
  const currentHealth = useSelector((state) => state.health.currentHealth);
  const [modalVisible, setModalVisible] = useState(false);
  const scaleValue = useState(new Animated.Value(1))[0];

  useEffect(() => {
    if (allGold) {
      showMessage({
        message: "Tebrikler!",
        description: "Tuttuğunuz altın oldu!",
        type: "success",
      });
    }
  }, [allGold]);

  const handleButtonAboutPress = () => {
    navigation.navigate("About");
  };
  const handleButtonPress = () => {
    if (currentHealth === 0) {
      showMessage({
        message: "Canın Bitti!",
        description: "Can Satın Almalısınız",
        type: "danger",
      });
    } else {
      dispatch(resetAllGold());
      dispatch(checkAllGold());
      dispatch(decreaseHealth());
      navigation.navigate("Home");
    }
  };

  const handleDonatePress = () => {
    setModalVisible(true);
  };

  const handleButtonAnimation = () => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 0.9,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.aboutIconContainer}
        onPress={handleButtonAboutPress}
      >
        <Ionicons
          style={styles.aboutIcon}
          name="information-circle-outline"
          size={24}
          color="gray"
        />
      </TouchableOpacity>
      <View style={styles.healthContainer}>
        <Ionicons name="heart" size={20} color="red" style={styles.heartIcon} />
        <Text style={styles.healthText}>{currentHealth}</Text>
      </View>

      <TouchableOpacity
        style={[
          styles.button,
          currentHealth === 0 ? styles.disabledButton : null,
        ]}
        onPress={handleButtonPress}
        onPressOut={handleButtonAnimation}
      >
        <Text style={styles.buttonText}>Tekrar Oyna</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.donationButton}
        onPress={handleDonatePress}
        onPressIn={handleButtonAnimation}
      >
        <Animated.Text style={[styles.donationButtonText]}>
          Bağış Yap
        </Animated.Text>
      </TouchableOpacity>
      <CustomModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />

      <FlashMessage position="top" />
    </View>
  );
};

export default Credit;
