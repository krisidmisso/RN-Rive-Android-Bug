import React from 'react';
import {
  StatusBar,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Rive from 'rive-react-native';



function App(): React.JSX.Element {

  const backgroundStyle = {
    backgroundColor:  Colors.darker,
  };

  return (
    <View style={backgroundStyle}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Rive  url="https://raw.githubusercontent.com/krisidmisso/RN-Rive-Android-Bug/refs/heads/main/rive/testButton.riv"
        artboardName="Artboard"
      stateMachineName="State Machine"
        style={{width: 250, height: 250}} />
    </View>
  );
}

export default App;
