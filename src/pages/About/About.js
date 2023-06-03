import React from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import { INSTAGRAM_API, LINKEDIN_API, GITHUB_API } from "@env";

const About = () => {
  const handleLinkedInPress = () => {
    Linking.openURL(LINKEDIN_API);
  };

  const handleInstagramPress = () => {
    Linking.openURL(INSTAGRAM_API);
  };

  const handleGithubPress = () => {
    Linking.openURL(GITHUB_API);
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={require("../../../assets/avatar.jpg")}
          style={styles.avatar}
        />
      </View>
      <Text style={styles.aboutText}>Geleceğin Yazılımcısı</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={handleLinkedInPress}>
          <Ionicons
            name="logo-linkedin"
            size={30}
            color="white"
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleInstagramPress}>
          <Ionicons
            name="logo-instagram"
            size={30}
            color="white"
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleGithubPress}>
          <Ionicons
            name="logo-github"
            size={30}
            color="white"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default About;
