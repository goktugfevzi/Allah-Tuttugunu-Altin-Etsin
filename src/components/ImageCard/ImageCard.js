import { View, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import { useSelector } from "react-redux";

const images = {
  stone: require("../../../assets/stone.png"),
  tree: require("../../../assets/tree.png"),
  house: require("../../../assets/house.png"),
  car: require("../../../assets/car.png"),
  gold: require("../../../assets/gold.png"),
};

const ImageCard = ({ item, onPress }) => {
  const [image, setImage] = useState(item);
  const allGoldControl = useSelector((state) => state.image.images);
  useEffect(() => {
    if (!allGoldControl[item]) {
      setImage(item);
    }
  }, [allGoldControl]);
  const handlePress = () => {
    if (image !== "gold") {
      setImage("gold");
    }
    onPress(item);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View>
        {image === "gold" ? (
          <Image style={styles.image} source={images.gold} />
        ) : (
          <Image style={styles.image} source={images[item]} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ImageCard;
