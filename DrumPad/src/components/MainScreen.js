import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme, Text } from 'react-native-paper';
import DrumPad from './DrumPad';

const MainScreen = ({ navigation }) => {
  const theme = useTheme();
 

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <DrumPad soundFileRef={require('../assets/Dsc_Oh.mp3')} label={'Q'} />
        <DrumPad soundFileRef={require('../assets/Cev_H2.mp3')} label={'W'} />
        <DrumPad soundFileRef={require('../assets/Kick_n_Hat.mp3')} label={'E'} />
      </View>
      <View style={styles.row}>
        <DrumPad soundFileRef={require('../assets/punchy_kick_1.mp3')} label={'A'} />
        <DrumPad soundFileRef={require('../assets/RP4_KICK_1.mp3')} label={'S'} />
        <DrumPad soundFileRef={require('../assets/Brk_Snr.mp3')} label={'D'} />
      </View>
      <View style={styles.row}>
        <DrumPad soundFileRef={require('../assets/side_stick_1.mp3')} label={'Z'} />
        <DrumPad soundFileRef={require('../assets/Heater-6.mp3')} label={'X'} />
        <DrumPad soundFileRef={require('../assets/Give_us_a_light.mp3')} label={'C'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 5,
      backgroundColor: '#212121'
    },
    row: {
      flexDirection: 'row'
    },
  });
  

export default memo(MainScreen);