import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles";
import ImageCard from "../../components/ImageCard/ImageCard";
import { setImageToGold, checkAllGold } from "../../context/imageSlice";
import { useNavigation } from "@react-navigation/native";
// import { useGlassfy } from "../../providers/GlassfyProvider";

const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const allGold = useSelector((state) => state.image.allGold);
  // const { restorePermissions, user, offerings } = useGlassfy();

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
      {/* {offerings.map((group) => (
        <View key={group.offeringId}>
          <Text style={{ color: "white" }}>{group.offeringId}</Text>
          {group.skus.map((sku) => (
            <Text key={sku.skuId} style={{ color: "white" }}>
              {sku.skuId}
            </Text>
          ))}
        </View>
      ))} */}
      <ImageCard item={"stone"} onPress={handleImagePress} />
      <ImageCard item={"tree"} onPress={handleImagePress} />
      <ImageCard item={"house"} onPress={handleImagePress} />
      <ImageCard item={"car"} onPress={handleImagePress} />
    </View>
  );
};

export default Home;
