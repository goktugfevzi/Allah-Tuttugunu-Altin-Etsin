import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const About = () => {
  const handleLinkedInPress = () => {
    Linking.openURL('https://www.linkedin.com/in/goktugfevziozcelik/');
  };

  const handleInstagramPress = () => {
    Linking.openURL('https://www.instagram.com/goktug.fevzi/');
  };

  const handleGithubPress = () => {
    Linking.openURL('https://github.com/goktugfevzi');
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image source={require('../../../assets/avatar.jpg')} style={styles.avatar} />
      </View>
      <Text style={styles.aboutText}>Geleceğin Yazılımcısı</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={handleLinkedInPress}>
          <Ionicons name="logo-linkedin" size={30} color="white" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleInstagramPress}>
          <Ionicons name="logo-instagram" size={30} color="white" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleGithubPress}>
          <Ionicons name="logo-github" size={30} color="white" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default About;