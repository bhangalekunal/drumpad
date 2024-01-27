import React, { memo, useEffect, useRef, useState, useCallback } from 'react';
import { StyleSheet, View, Animated, Image } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { SvgUri } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import * as ExpoSplashScreen from 'expo-splash-screen';


const SplashScreen = ({ navigation }) => {

  const theme = useTheme();
  const logoImage = require('../assets/app_logo.png'); // Replace with your PNG image

  const logoOpacity = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    ExpoSplashScreen.preventAutoHideAsync(); // Prevent default splash screen
    ExpoSplashScreen.hideAsync();
    const logoAnimation = Animated.timing(logoOpacity, {
      toValue: 1,
      duration: 1000, // Adjust the duration as needed
      useNativeDriver: true,
    });

    const textAnimation = Animated.timing(textOpacity, {
      toValue: 1,
      duration: 1000, // Adjust the duration as needed
      useNativeDriver: true,
    });

    // Run animations sequentially
    // Run animations sequentially
     Animated.sequence([logoAnimation, textAnimation]).start(() => {
      ExpoSplashScreen.hideAsync();
      // Navigate to MainScreen after animations complete
      navigation.navigate('MainScreen');
    });
  }, [logoOpacity, textOpacity]);

  
  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: logoOpacity }}>
        <Image
            source={logoImage}
            style={{ width: 100, height: 100 }}
          />
      </Animated.View>
      <Animated.View style={{ ...styles.textContainer, opacity: textOpacity }}>
        <Text style={{...styles.appNameText, color: theme.colors.background}}>DrumPad Machine</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#212121'
  },
  textContainer: {
    marginTop: 20
  },
  appNameText: {
    fontSize: 26,
    fontWeight: 'bold',
  },
});

export default memo(SplashScreen);