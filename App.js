import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ObjectiveProvider } from './src/context/Objective';
import Home from './src/pages/home/Home';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ObjectiveProvider>
        <FlashMessage position="top" />
        <Home />
      </ObjectiveProvider>
    </SafeAreaView>
  );
};

export default App;
