import React, { memo, useEffect, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { useTheme, Text } from 'react-native-paper';
// import RadialGradient from 'react-native-radial-gradient';
import Svg, { Defs, RadialGradient, Stop, Rect, Text as SvgText } from "react-native-svg";
import { Audio } from 'expo-av';



const DrumPad = ({ soundFileRef, label }) => {
  const theme = useTheme();
  const [sound, setSound] = useState();

  async function playSound() {
    console.log('Loading Sound:'+soundFileRef);
    const { sound } = await Audio.Sound.createAsync(soundFileRef);
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  return (
    <TouchableOpacity style={styles.drumPad} onPress={playSound}>
      <Svg height="100%" width="100%">
        <Defs>
          <RadialGradient
            id="radial-gradient"
            cx="50%"
            cy="50%"
            r="50%"
            gradientUnits="userSpaceOnUse"
          >
            <Stop offset="0" stopColor="#333" />
            <Stop offset="1" stopColor="#070707" />
          </RadialGradient>
        </Defs>
        <Rect
          width="100%"
          height="100%"
          rx="4%"  // Adjust the corner radius if needed
          ry="4%"  // Adjust the corner radius if needed
          fill="url(#radial-gradient)"
        />
          <Text
            style={styles.label}
          >
          {label}
        </Text>
        
      </Svg>
      {/* <Text style={styles.label}>{label}</Text> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  drumPad: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 5,
    borderColor: '#1ec8ce',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
  },

  label: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    width: '100%',
    height: '100%',
  },
});
  

export default memo(DrumPad);