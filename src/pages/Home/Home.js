import { View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles";
import ImageCard from "../../components/ImageCard/ImageCard";
import { setImageToGold, checkAllGold } from "../../context/imageSlice";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const allGold = useSelector((state) => state.image.allGold);

  useEffect(() => {
    if (allGold) {
      navigation.navigate("Credit");
    }
  }, [allGold]);

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
