import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './src/components/MainScreen';
import SplashScreen from './src/components/SplashScreen';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

export default function App() {
  const Stack = createStackNavigator();
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <StatusBar
            barStyle={'light-content'}
            backgroundColor={theme.colors.backdrop}
            translucent={true} // Add this line to make the status bar translucent
          />
        <Stack.Navigator  initialRouteName="SplashScreen"
                screenOptions={{
                  headerShown: false,
                }}>
            <Stack.Screen name="MainScreen" component={MainScreen} />
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

