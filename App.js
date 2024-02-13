import { decode, encode } from "base-64";
import { jsPDF } from "jspdf";
import React from "react";
import { Text, View } from "react-native";

// polyfill for jsPDF
globalThis.btoa = encode;
globalThis.atob = decode;

const App = () => {
  const handlePicture = () => {
    const document = new jsPDF({ unit: "px", putOnlyUsedFonts: true });
    console.log(document.getNumberOfPages());
  };

  return (
    <View style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center'}}>
      <Text onPress={handlePicture}>TEST</Text>
    </View>
  );
};

export default App;
