import { View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles";
import ImageCard from "../../components/ImageCard/ImageCard";
import { setImageToGold, checkAllGold } from "../../context/imageSlice";
import { useNavigation } from "@react-navigation/native";
import { hideMessage } from "react-native-flash-message";

const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const currentHealth = useSelector((state) => state.health.currentHealth);
  const allGold = useSelector((state) => state.image.allGold);

  useEffect(() => {
    hideMessage();
  }, []);

  useEffect(() => {
    if (allGold) {
      navigation.navigate("Credit");
    }
  }, [allGold]);

  useEffect(() => {
    if (currentHealth === 0) {
      navigation.navigate("Credit");
    }
  }, [navigation]);

  const handleImagePress = (item) => {
    dispatch(setImageToGold(item));
    dispatch(checkAllGold());
  };
  return (
    <View style={styles.container}>
      <ImageCard item={"stone"} onPress={handleImagePress} />
      <ImageCard item={"tree"} onPress={handleImagePress} />
      <ImageCard item={"house"} onPress={handleImagePress} />
      <ImageCard item={"car"} onPress={handleImagePress} />
    </View>
  );
};

export default Home;
